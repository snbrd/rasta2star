import React, { useEffect, useRef } from 'react'
import { useCountUp } from 'react-countup'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useTokenBalanceByAccount } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const buoyancyBalance = useTokenBalanceByAccount(getCakeAddress(), '0xf2A92c2d85C1A5e4F5A6d4B99C4C8F74D85fBD06')
  const trustBalance = useTokenBalanceByAccount(getCakeAddress(), '0x437326807aAA8be7C0E3d89ab8C9072BC7614131')
  const operatingBalance = useTokenBalanceByAccount(getCakeAddress(), '0x0c26627aDd3F1bdC2a1f3aEA87E14DA5E9EfA1af')
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0
  const circulatingSupply =
    cakeSupply - getBalanceNumber(buoyancyBalance) - getBalanceNumber(trustBalance) - getBalanceNumber(operatingBalance)

  const cakeSupplyCount = useCountUp({
    start: 0,
    end: cakeSupply,
    duration: 1,
    separator: ',',
  })

  const updateCakeSupply = useRef(cakeSupplyCount.update)

  useEffect(() => {
    updateCakeSupply.current(cakeSupply)
  }, [cakeSupply, updateCakeSupply])

  const circulatingSupplyCount = useCountUp({
    start: 0,
    end: circulatingSupply,
    duration: 1,
    separator: ',',
  })

  const updatecirculatingSupply = useRef(circulatingSupplyCount.update)

  useEffect(() => {
    updatecirculatingSupply.current(circulatingSupply)
  }, [circulatingSupply, updatecirculatingSupply])

  const burnedBalanceCount = useCountUp({
    start: 0,
    end: getBalanceNumber(burnedBalance),
    duration: 1,
    separator: ',',
  })

  const updateburnedBalance = useRef(burnedBalanceCount.update)

  useEffect(() => {
    updateburnedBalance.current(getBalanceNumber(burnedBalance))
  }, [burnedBalance, updateburnedBalance])

  return (
    <div className="h-full shadow-xl p-8 rounded-lg">
      <div className="row flex flex-col gap-5">
        <span className="text-2xl text-center font-bold">{TranslateString(534, 'Rasta Stats')}</span>
        <div className="row flex flex-col py-12 gap-3">
          <div className="items-center justify-between flex">
            <span className="text-sm">{TranslateString(536, 'Total RASTA Supply')}</span>
            <span className="font-bold text-sm">{cakeSupplyCount.countUp}</span>
          </div>
          <div className="items-center justify-between flex">
            <span className="text-sm">{TranslateString(536, 'Circulating RASTA Supply')}</span>
            <span className="font-bold text-sm">{circulatingSupplyCount.countUp}</span>
          </div>
          <div className="items-center justify-between flex">
            <span className="text-sm">Total RASTA Burned</span>
            <span className="font-bold text-sm">{burnedBalanceCount.countUp}</span>
          </div>
          <div className="items-center justify-between flex">
            <span className="text-sm">New RASTA/block</span>
            <span className="font-bold text-sm">0.2</span>
          </div>
        </div>
      </div>
    </div>
  )
}
    
export default CakeStats
