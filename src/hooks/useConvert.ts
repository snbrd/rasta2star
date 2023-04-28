import { useCallback, useState, useEffect } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/actions'
import { convert } from 'utils/callHelpers'
import BigNumber from 'bignumber.js'
import { useTokenConverter } from './useContract'

export const useUserAmountConverted = (src: string, dst: string) => {
  const { account }: { account: string } = useWallet()
  const [amount, setAmount] = useState("0")
  const tokenContract = useTokenConverter()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await tokenContract.methods.userConvertedAmount(account, src, dst).call()
        setAmount(new BigNumber(res).div(new BigNumber(10).pow(18)).toString(10))
      } catch (e) {
        setAmount("0")
      }
    }
    fetch()
  }, [account, dst, src, tokenContract])

  return amount
}

const useConvert = () => {
  const dispatch = useDispatch()
  const { account } = useWallet()
  const contract = useTokenConverter()

  const handleConvert = useCallback(
    async (src: string, dst: string, amount: any) => {
      const txHash = await convert(contract, src, dst, amount, account)
      dispatch(fetchFarmUserDataAsync(account))
      console.info(txHash)
    },
    [account, dispatch, contract,]
  )

  return { onConvert: handleConvert }
}

export default useConvert
