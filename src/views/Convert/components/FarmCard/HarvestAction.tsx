import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import * as FaIcons from 'react-icons/fa'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, pid }) => {
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)

  return (
    <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
      <button
        type="button"
        disabled={rawEarningsBalance === 0 || pendingTx}
        className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer"
        onClick={async () => {
          setPendingTx(true)
          await onReward()
          setPendingTx(false)
        }}
      >
        <span>CONVERT NOW</span>
      </button>
    </div>
  )
}

export default HarvestAction
