import { AbiItem } from 'web3-utils'
import poolsConfig from 'config/constants/pools'
import masterChefABI from 'config/abi/masterchef.json'
import airNFTABI from 'config/abi/airToken.json'
import airFarmABI from 'config/abi/airFarm.json'
import sousChefABI from 'config/abi/sousChef.json'
import erc20ABI from 'config/abi/erc20.json'
import { QuoteToken } from 'config/constants/types'
import multicall from 'utils/multicall'
import { getAddress, getAirNftAddress, getMasterChefAddress } from 'utils/addressHelpers'
import { getWeb3 } from 'utils/web3'
import BigNumber from 'bignumber.js'
import nftPools, { RastaNftIds } from 'config/constants/nftPools'

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

export const fetchNFTAllowance = async (account) => {
  const call = nftPools.map((farm) => ({
    address: farm.nftContractAddress,
    name: 'isApprovedForAll',
    params: [account, getAddress(farm.contractAddress)],
  }));
  const approved = await multicall(airNFTABI, call);
  return nftPools.map((farm, index) => ({
    [farm.id]: approved[index][0]
  }))
}

export const fetchNFTUserBalance = async (account) => {
  const balance = await AirNftContract.methods.balanceOf(account).call();
  const call = nftPools.map((farm) => ({
    address: farm.nftContractAddress,
    name: 'balanceOf',
    params: [account],
  }));
  const balances = await multicall(airNFTABI, call);

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
  let airBalance = 0;
  for (let i = 0; i < tokenIds.length; i++) {
    const res = RastaNftIds.indexOf(new BigNumber(tokenIds[i]).toNumber());
    if (res !== -1) {
      j = true;
      break;
    }
  }
  if (j) airBalance = balances;

  return nftPools.map((farm, index) => {
    if (farm.type === "airnft") {
      return { [farm.id]: airBalance }
    }
    return { [farm.id]: new BigNumber(balances[index]).toJSON() }
  })
}

export const fetchStakedBalance = async (account) => {
  const call = nftPools.map((farm) => ({
    address: getAddress(farm.contractAddress),
    name: 'userTokenBalanceOf',
    params: [account],
  }));
  const stakedAmount = await multicall(airFarmABI, call);
  return nftPools.map((farm, index) => ({
    [farm.id]: new BigNumber(stakedAmount[index]).toJSON()
  }))
}

export const fetchNFTPendingReward = async (account) => {
  const call = nftPools.map((farm) => ({
    address: getAddress(farm.contractAddress),
    name: 'claimable',
    params: [account],
  }));
  const pendingReward = await multicall(airFarmABI, call);
  return nftPools.map((farm, index) => ({
    [farm.id]: new BigNumber(pendingReward[index]).toJSON()
  }))
}

export const fetchNftBalance = async () => {
  const call = nftPools.map((farm) => ({
    address: farm.nftContractAddress,
    name: 'balanceOf',
    params: [getAddress(farm.contractAddress)],
  }));
  const balance = await multicall(airNFTABI, call);
  return nftPools.map((farm, index) => ({
    [farm.id]: new BigNumber(balance[index]).toJSON()
  }))
}

export const fetchAirRewardRate = async () => {
  const call3 = nftPools.map((farm) => ({
    address: getAddress(farm.contractAddress),
    name: 'rewardRate',
    params: [],
  }));
  const rewardRate = await multicall(airFarmABI, call3);
  return nftPools.map((farm, index) => ({
    [farm.id]: new BigNumber(rewardRate[index]).toJSON()
  }))
}

export const fetchPoolStatus = async () => {
  const call2 = nftPools.map((farm) => ({
    address: getAddress(farm.contractAddress),
    name: 'paused',
    params: [],
  }));
  const paused = await multicall(airFarmABI, call2);
  return nftPools.map((farm, index) => ({
    [farm.id]: paused[index][0]
  }))
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
