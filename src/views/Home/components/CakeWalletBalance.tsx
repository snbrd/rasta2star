import React from 'react'
import { Text } from 'rasta-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import { usePriceRastaBusd } from 'state/hooks'
import { BigNumber } from 'bignumber.js'
import CardBusdValue from './CardBusdValue'

const CakeWalletBalance = () => {
  const cakeBalance = useTokenBalance(getCakeAddress())
  const busdBalance = new BigNumber(getBalanceNumber(cakeBalance)).multipliedBy(usePriceRastaBusd()).toNumber()

  return (
    <>
      <span className="text-2xl font-bold">{getBalanceNumber(cakeBalance).toFixed(4)}</span>
      <CardBusdValue value={busdBalance} />
    </>
  )
}

export default CakeWalletBalance
