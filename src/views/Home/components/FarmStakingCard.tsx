import React, { useState, useCallback } from 'react'
import useI18n from 'hooks/useI18n'
import { useAllHarvest } from 'hooks/useHarvest'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'


const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const farmsWithBalance = useFarmsWithBalance()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.toNumber() > 0)

  const { onReward } = useAllHarvest(balancesWithValue.map((farmWithBalance) => farmWithBalance.pid))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    try {
      await onReward()
    } catch (error) {
      // 
    } finally {
      setPendingTx(false)
    }
  }, [onReward])

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="h-full shadow-xl p-8 rounded-lg">
      <div className="row flex flex-col gap-10">
        <h3 className="text-2xl text-center font-bold">Farms & Staking</h3>
        <div className="row flex flex-col">
          <span >RASTA to Harvest:</span>
          <CakeHarvestBalance />
          <span>RASTA in Wallet:</span>
          <CakeWalletBalance />

          <button type="button" onClick={harvestAllFarms} className="uppercase text-sm bg-gradient-to-r text-white mt-8 from-yellow-rasta to-green-rasta_cta text-center py-3 px-8 rounded-md">
            {pendingTx
              ? TranslateString(548, 'Collecting RASTA')
              : TranslateString(532, `HARVEST ALL`)}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FarmedStakingCard
