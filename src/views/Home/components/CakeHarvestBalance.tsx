import React, { useEffect, useRef } from 'react'
import BigNumber from 'bignumber.js'
import useAllEarnings from 'hooks/useAllEarnings'
import { usePriceRastaBusd } from 'state/hooks'
import styled from 'styled-components'
import { useCountUp } from 'react-countup'
import { toNumber } from 'lodash'
import CardBusdValue from './CardBusdValue'

const Block = styled.div`
  margin-bottom: 5px;
}
`

const CakeHarvestBalance = () => {
  const allEarnings = useAllEarnings()
  const earningsSum = allEarnings.reduce((accum, earning) => {
    return accum + new BigNumber(earning).div(new BigNumber(10).pow(18)).toNumber()
  }, 0)
  const earningsBusd = new BigNumber(earningsSum).multipliedBy(usePriceRastaBusd()).toNumber()

  const { countUp, update } = useCountUp({
    start: 0,
    end: toNumber(earningsSum),
    duration: 1,
    separator: ',',
    decimals: 3,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(toNumber(earningsSum))
  }, [earningsSum, updateValue])

  return (
    <Block className="flex flex-col">
      {/* <CardValue value={earningsSum} lineHeight="1" /> */}
      <span className="text-2xl font-bold">{countUp}</span>
      <CardBusdValue value={earningsBusd} />
    </Block>
  )
}

export default CakeHarvestBalance
