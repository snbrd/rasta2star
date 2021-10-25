import { useCallback, useEffect, useState } from 'react'
import { abi } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import BigNumber from 'bignumber.js'
import Web3 from 'web3'
import useBlock from './useBlock'

// BUSD-RASTA
const ABI: any = abi
const web3 = new Web3('https://bsc-dataseed.binance.org/')
const wbnbCnrPairContract = new web3.eth.Contract(ABI, '0xaC99E0eC687EAC63C4b40D857d104A58E0380Da5')

const useCNRPriceVsBnb = () => {
  const [price, setPrice] = useState(0)
  const block = useBlock()

  const fetchBalance = useCallback(async () => {
    try {
      const bnbObj = await wbnbCnrPairContract.methods.getReserves().call()
      if (!new BigNumber(bnbObj.reserve1).eq(new BigNumber(0))) {
        const cnrRate = new BigNumber(bnbObj.reserve0).div(bnbObj.reserve1).div(1e10)
        if (!cnrRate.isEqualTo(price)) {
          setPrice(cnrRate.toNumber())
        }
      }
    } catch (e) {
      setPrice(0)
    }
  }, [price])

  useEffect(() => {
    if (wbnbCnrPairContract) {
      fetchBalance()
    }
  }, [setPrice, fetchBalance, block])

  return price
}

export default useCNRPriceVsBnb
