import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { claim, approveAll, stakeAirNFT, unstakeAirNFT } from 'utils/callHelpers'
import { fetchNFTPoolsAUserDataAsync } from 'state/pools'
import airnft from 'config/abi/airToken.json'
import { AbiItem } from 'web3-utils'
import useContract, { useAirFarmContract } from './useContract'

const useStake = (poolAddress) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const airFarmContract = useAirFarmContract(poolAddress)

  const handleStake = useCallback(async () => {
    const txHash = await stakeAirNFT(airFarmContract, account)
    dispatch(fetchNFTPoolsAUserDataAsync(account))
    console.info(txHash)
  }, [account, dispatch, airFarmContract])

  const handleUnStake = useCallback(async () => {
    const txHash = await unstakeAirNFT(airFarmContract, account)
    dispatch(fetchNFTPoolsAUserDataAsync(account))
    console.info(txHash)
  }, [account, dispatch, airFarmContract])

  return { onStake: handleStake, onUnStake: handleUnStake }
}

export const useClaim = (poolAddress) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const airFarmContract = useAirFarmContract(poolAddress)

  const handleClaim = useCallback(async () => {
    if (account) {
      const tx = await claim(airFarmContract, account)
      dispatch(fetchNFTPoolsAUserDataAsync(account))
      console.info(tx)
    }
  }, [account, dispatch, airFarmContract])

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
