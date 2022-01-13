import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { stake, claim } from 'utils/callHelpers'
import { fetchAirNFTPoolsAUserDataAsync } from 'state/pools'
import { useAirFarmContract, useMasterchef } from './useContract'

const useStake = (pid: number) => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const masterChefContract = useMasterchef()

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stake(masterChefContract, pid, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, masterChefContract, pid],
  )

  return { onStake: handleStake }
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

export default useStake
