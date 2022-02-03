import { useCallback, useEffect, useState } from 'react'
import { abi } from '@uniswap/v2-core/build/IUniswapV2Pair.json'
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

  const fetchBalance = useCallback(async () => {
    try {
      const response = await fetch(`https://api.pancakeswap.info/api/v2/tokens/0xe3e8cc42da487d1116d26687856e9fb684817c52`)
      const { data } = await response.json()
      const mrastaObj = await mrastaRastaPairContract.methods.getReserves().call()
      const mrastaPrice = new BigNumber(mrastaObj.reserve0).div(mrastaObj.reserve1).times(data.price)
      if (!mrastaPrice.isEqualTo(price)) {
        setPrice(mrastaPrice.toNumber())
      }
    } catch (e) {
      setPrice(0)
    }
  }, [price])

  useEffect(() => {
    if (mrastaRastaPairContract) {
      fetchBalance()
    }
  }, [setPrice, fetchBalance, block])

  return price
}

export default useRastaPrice
