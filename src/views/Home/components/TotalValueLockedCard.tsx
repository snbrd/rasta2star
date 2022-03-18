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
    <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" className="h-full shadow-xl p-8 rounded-lg">
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
