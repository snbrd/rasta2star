import { useCallback, useEffect, useState } from 'react'
import { abi } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
import { usePriceRastaBusd } from 'state/hooks'
import BigNumber from 'bignumber.js'
import Web3 from 'web3'
import useBlock from './useBlock'

// BUSD-RASTA
const ABI: any = abi
const web3 = new Web3('https://bsc-dataseed.binance.org/')
const mrastaRastaPairContract = new web3.eth.Contract(ABI, '0xbea61686d11aed2d078885d77ccaeda352bb1fe4')

const useRastaPrice = () => {
  const [price, setPrice] = useState(0)
  const block = useBlock()
  const rastaPrice = usePriceRastaBusd()

  const fetchBalance = useCallback(async () => {
    try {
      const mrastaObj = await mrastaRastaPairContract.methods.getReserves().call()
      const mrastaPrice = new BigNumber(mrastaObj.reserve0).div(mrastaObj.reserve1).times(rastaPrice)
      if (!mrastaPrice.isEqualTo(price)) {
        setPrice(mrastaPrice.toNumber())
      }
    } catch (e) {
      setPrice(0)
    }
  }, [price, rastaPrice])

  useEffect(() => {
    if (mrastaRastaPairContract) {
      fetchBalance()
    }
  }, [fetchBalance, block])

  return price
}

export default useRastaPrice
