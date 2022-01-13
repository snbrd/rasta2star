import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import * as FaIcons from 'react-icons/fa'
import { getBalanceNumber } from 'utils/formatBalance'
import { useClaim } from 'hooks/useAirFarm'

interface FarmCardActionsProps {
  earnings?: BigNumber
  type: boolean
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings }) => {
  const [pendingTx, setPendingTx] = useState(false)
  const rawEarningsBalance = getBalanceNumber(earnings)
  const buttonClass = "px-4 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer"
  const { onClaim } = useClaim()
  return (
    <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full from-green-rasta to-yellow-rasta  rounded-md">
      <button
        type="button"
        disabled={rawEarningsBalance === 0 || pendingTx}
        className={(rawEarningsBalance === 0 ? "disabled " : "") + buttonClass}
        onClick={async () => {
          if (rawEarningsBalance > 0) {
            setPendingTx(true)
            await onClaim();
            setPendingTx(false)
          }
        }}
      >
        <FaIcons.FaSearchDollar />
        <span className="text-sm">HARVEST</span>
      </button>
    </div>
  )
}

export default HarvestAction
