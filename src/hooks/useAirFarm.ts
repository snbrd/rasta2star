import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { claim, approveAll, stakeAirNFT, unstakeAirNFT } from 'utils/callHelpers'
import { getAirFarmAddress } from 'utils/addressHelpers'
import { fetchAirNFTPoolsAUserDataAsync } from 'state/pools'
import { useAirFarmContract, useAirNFTContract } from './useContract'

const useStake = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const airFarmContract = useAirFarmContract()

  const handleStake = useCallback(
    async () => {
      const txHash = await stakeAirNFT(airFarmContract, account)
      dispatch(fetchAirNFTPoolsAUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, airFarmContract],
  )

  const handleUnStake = useCallback(
    async () => {
      const txHash = await unstakeAirNFT(airFarmContract, account)
      dispatch(fetchAirNFTPoolsAUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, airFarmContract],
  )

  return { onStake: handleStake, onUnStake: handleUnStake }
}

export const useClaim = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const airFarmContract = useAirFarmContract()

  const handleClaim = useCallback(
    async () => {
      if (account) {
        const tx = await claim(airFarmContract, account);
        dispatch(fetchAirNFTPoolsAUserDataAsync(account));
        console.info(tx)
      }
    },
    [account, dispatch, airFarmContract],
  )

  return { onClaim: handleClaim }
}

export const useApproveAll = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const airNftContract = useAirNFTContract()

  const handleApproveAll = useCallback(
    async () => {
      if (account) {
        const tx = await approveAll(airNftContract, getAirFarmAddress(), account);
        dispatch(fetchAirNFTPoolsAUserDataAsync(account));
        console.info(tx)
      }
    },
    [account, dispatch, airNftContract],
  )

  return { onApproveAll: handleApproveAll }
}

export default useStake
