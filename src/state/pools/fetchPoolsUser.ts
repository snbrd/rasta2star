import { AbiItem } from 'web3-utils'
import poolsConfig from 'config/constants/pools'
import masterChefABI from 'config/abi/masterchef.json'
import airNFTABI from 'config/abi/airToken.json'
import airFarmABI from 'config/abi/airFarm.json'
import sousChefABI from 'config/abi/sousChef.json'
import erc20ABI from 'config/abi/erc20.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getAddress, getAirFarmAddress, getAirNftAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { getWeb3 } from 'utils/web3'
import BigNumber from 'bignumber.js'
import { RastaNftIds } from 'config/constants/airnfts'

// Pool 0, Cake / Cake is a different kind of contract (master chef)
// BNB pools use the native BNB token (wrapping ? unwrapping is done at the contract level)
const nonBnbPools = poolsConfig.filter((p) => p.stakingTokenName !== QuoteToken.BNB)
const bnbPools = poolsConfig.filter((p) => p.stakingTokenName === QuoteToken.BNB)
const nonMasterPools = poolsConfig.filter((p) => p.sousId !== 0)
const web3 = getWeb3()
const masterChefContract = new web3.eth.Contract(masterChefABI as unknown as AbiItem, getMasterChefAddress())
const AirNftContract = new web3.eth.Contract(airNFTABI as unknown as AbiItem, getAirNftAddress())

export const fetchPoolsAllowance = async (account) => {
  const calls = nonBnbPools.map((p) => ({
    address: p.stakingTokenAddress,
    name: 'allowance',
    params: [account, getAddress(p.contractAddress)],
  }))

  const allowances = await multicall(erc20ABI, calls)
  return nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(allowances[index]).toJSON() }),
    {},
  )
}

export const fetchUserAirnftBalances = async (account) => {
  const balance = await AirNftContract.methods.balanceOf(account).call();
  const approved = await AirNftContract.methods.isApprovedForAll(account, getAirFarmAddress()).call();
  const calls = [];
  for (let i = 0; i < balance; i++) {
    calls.push({
      address: getAirNftAddress(),
      name: 'tokenOfOwnerByIndex',
      params: [account, i],
    })
  }
  const tokenIds = await multicall(airNFTABI, calls);
  let j = false;
  for (let i = 0; i < tokenIds.length; i++) {
    const res = RastaNftIds.find((item) => item === new BigNumber(tokenIds[i]).toNumber());
    if (res) {
      j = true;
      break;
    }
  }

  if (j) return { approved, balance };
  return { approved, balance: 0 };
}

export const fetchPoolStatus = async (account) => {
  const calls = [
    {
      address: getAirFarmAddress(),
      name: 'userInfo',
      params: [account],
    },
    {
      address: getAirFarmAddress(),
      name: 'claimable',
      params: [account],
    },
    {
      address: getAirFarmAddress(),
      name: 'paused',
      params: [],
    },
    {
      address: getAirFarmAddress(),
      name: 'totalSupply',
      params: [],
    },
    {
      address: getAirFarmAddress(),
      name: 'rewardRate',
      params: [],
    },
  ];
  const poolInfo = await multicall(airFarmABI, calls)
  console.log('===========')
  console.log(poolInfo[1][0] * 1)
  return {
    userInfo: poolInfo[0],
    pendingReword: new BigNumber(poolInfo[1][0]).toString(),
    paused: poolInfo[2][0],
    totalSupply: new BigNumber(poolInfo[3][0]).toString(),
    rewardRate: new BigNumber(poolInfo[4][0]).toString(),
  };
}

export const fetchUserBalances = async (account) => {
  // Non BNB pools
  const calls = nonBnbPools.map((p) => ({
    address: p.stakingTokenAddress,
    name: 'balanceOf',
    params: [account],
  }))
  const tokenBalancesRaw = await multicall(erc20ABI, calls)
  const tokenBalances = nonBnbPools.reduce(
    (acc, pool, index) => ({ ...acc, [pool.sousId]: new BigNumber(tokenBalancesRaw[index]).toJSON() }),
    {},
  )

  // BNB pools
  const bnbBalance = await web3.eth.getBalance(account)
  const bnbBalances = bnbPools.reduce(
    (acc, pool) => ({ ...acc, [pool.sousId]: new BigNumber(bnbBalance).toJSON() }),
    {},
  )

  return { ...tokenBalances, ...bnbBalances }
}

export const fetchUserStakeBalances = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'userInfo',
    params: [account],
  }))
  const userInfo = await multicall(sousChefABI, calls)
  const stakedBalances = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(userInfo[index].amount._hex).toJSON(),
    }),
    {},
  )

  // Cake / Cake pool
  const { amount: masterPoolAmount } = await masterChefContract.methods.userInfo('0', account).call()

  return { ...stakedBalances, 0: new BigNumber(masterPoolAmount).toJSON() }
}

export const fetchUserPendingRewards = async (account) => {
  const calls = nonMasterPools.map((p) => ({
    address: getAddress(p.contractAddress),
    name: 'pendingReward',
    params: [account],
  }))
  const res = await multicall(sousChefABI, calls)
  const pendingRewards = nonMasterPools.reduce(
    (acc, pool, index) => ({
      ...acc,
      [pool.sousId]: new BigNumber(res[index]).toJSON(),
    }),
    {},
  )

  // Cake / Cake pool
  const pendingReward = await masterChefContract.methods.pendingRasta('0', account).call()

  return { ...pendingRewards, 0: new BigNumber(pendingReward).toJSON() }
}
