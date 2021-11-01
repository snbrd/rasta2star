import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import useI18n from 'hooks/useI18n'
import { useTotalValue } from 'state/hooks'


const TotalValueLockedCard = () => {
  const TranslateString = useI18n()

  const totalValue = useTotalValue()

  const { countUp, update } = useCountUp({
    start: 0,
    end: totalValue.toNumber(),
    duration: 1,
    separator: ',',
    decimals: 2,
  })

  const updateValue = useRef(update)

  useEffect(() => {
    updateValue.current(totalValue.toNumber())
  }, [totalValue, updateValue])


  return (
    <div className="h-full shadow-2xl p-8 rounded-lg w-1/3">
      <div className="row flex flex-col gap-5">
        <span className="text-2xl text-center font-bold">Total Value Locked (TVL)</span>
        <div className="row flex flex-col py-12 gap-3">
          <div className="flex-col flex gap-2">
            <span className="text-5xl font-bold text-center">${countUp}</span>
            <span className="text-sm text-gray text-center">{TranslateString(764, 'Across all LPs and Rasta Pools')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TotalValueLockedCard
