import React from 'react'
import BigNumber from 'bignumber.js'
import { useModal } from 'rasta-uikit'
import { useSousStake } from 'hooks/useStake'
import { PoolCategory } from 'config/constants/types'
import CompoundModal from '../CompoundModal'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  type?: boolean
  pool: any
}

const CompoundAction: React.FC<FarmCardActionsProps> = ({ earnings, type, pool }) => {
  // const {
  //   sousId,
  //   stakingTokenName,
  //   poolCategory,
  // } = pool

  const buttonClass = "px-4 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer"
  return (
    <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full from-green-rasta to-yellow-rasta  rounded-md">
      <button
        type="button"
        className={(type === false ? "disabled " : "") + buttonClass}
      >
        <span className="text-sm">REWARD & COMPOUND</span>
      </button>
    </div>
  )
}

export default CompoundAction
