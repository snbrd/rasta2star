import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { claim, approveAll, stakeAirNFT, unstakeAirNFT, stakeNFT, unStakeNFT } from 'utils/callHelpers'
import { fetchNFTPoolsAUserDataAsync } from 'state/pools'
import airnft from 'config/abi/airToken.json'
import { AbiItem } from 'web3-utils'
import useContract, { useNftFarmContract } from './useContract'

const useStake = (poolAddress) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const airFarmContract = useNftFarmContract(poolAddress)

  const handleStake = useCallback(async () => {
    try {
      const txHash = await stakeAirNFT(airFarmContract, account)
      dispatch(fetchNFTPoolsAUserDataAsync(account))
      console.info(txHash)
    } catch (error) {
      console.log(error)
    }
  }, [account, dispatch, airFarmContract])

  const handleStakeManual = useCallback(
    async (tokens) => {
      try {
        const txHash = await stakeNFT(airFarmContract, tokens, account)
        dispatch(fetchNFTPoolsAUserDataAsync(account))
        console.info(txHash)
        return txHash
      } catch (error) {
        console.log(error)
        return false
      }
    },
    [account, dispatch, airFarmContract],
  )

  const handleUnStakeManual = useCallback(
    async (tokens) => {
      try {
        const txHash = await unStakeNFT(airFarmContract, tokens, account)
        dispatch(fetchNFTPoolsAUserDataAsync(account))
        console.info(txHash)
        return txHash;
      } catch (error) {
        console.log(error)
        return false;
      }
    },
    [account, dispatch, airFarmContract],
  )

  const handleUnStake = useCallback(async () => {
    try {
      const txHash = await unstakeAirNFT(airFarmContract, account)
      dispatch(fetchNFTPoolsAUserDataAsync(account))
      console.info(txHash)
    } catch (error) {
      console.log(error)
    }
  }, [account, dispatch, airFarmContract])

  return {
    onStake: handleStake,
    onStakeManual: handleStakeManual,
    onUnstakeManual: handleUnStakeManual,
    onUnStake: handleUnStake,
  }
}

export const useClaim = (poolAddress) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const nftFarmContract = useNftFarmContract(poolAddress)

  const handleClaim = useCallback(async () => {
    if (account) {
      try {
        const tx = await claim(nftFarmContract, account)
        dispatch(fetchNFTPoolsAUserDataAsync(account))
        console.info(tx)
      } catch (error) {
        console.log(error)
      }
    }
  }, [account, dispatch, nftFarmContract])

  return { onClaim: handleClaim }
}

export const useApproveAll = (nftContractAddress, poolAddress) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const abi = airnft as unknown as AbiItem
  const NftContract = useContract(abi, nftContractAddress)

  const handleApproveAll = useCallback(async () => {
    if (account) {
      try {
        const tx = await approveAll(NftContract, poolAddress, account)
        dispatch(fetchNFTPoolsAUserDataAsync(account))
        console.info(tx)
      } catch (error) {
        console.log(error)
      }
    }
  }, [account, dispatch, NftContract, poolAddress])

  return { onApproveAll: handleApproveAll }
}

export default useStake
