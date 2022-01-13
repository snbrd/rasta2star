import React from 'react'
import BigNumber from 'bignumber.js'
import { useModal } from 'rasta-uikit'
import { useClaim } from 'hooks/useAirFarm'
import CompoundModal from '../CompoundModal'
// import { useModal } from 'rasta-uikit'
// import { useSousStake } from 'hooks/useStake'
// import { PoolCategory } from 'config/constants/types'
// import CompoundModal from '../CompoundModal'

interface FarmCardActionsProps {
  earnings?: BigNumber
  type?: boolean
  pool: any
}

const CompoundAction: React.FC<FarmCardActionsProps> = ({ type, pool }) => {
  const {
    pendingReword,
  } = pool;

  const { onClaim } = useClaim()

  const [onPresentCompound] = useModal(
    <CompoundModal earnings={pendingReword} onConfirm={onClaim} tokenName="RASTA" />,
  )
  const buttonClass = "px-4 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer"
  return (
    <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full from-green-rasta to-yellow-rasta  rounded-md">
      <button
        type="button"
        className={(type === false ? "disabled " : "") + buttonClass}
        onClick={async () => {
          if (type !== false) {
            onPresentCompound()
          }
        }}
      >
        <span className="text-sm">Compound</span>
      </button>
    </div>
  )
}

export default CompoundAction
