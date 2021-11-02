import React from 'react'
import BigNumber from 'bignumber.js'
import { Pool } from 'state/types'
import { useModal } from 'rasta-uikit'
import { useSousStake } from 'hooks/useStake'
import { PoolCategory } from 'config/constants/types'
import CompoundModal from '../CompoundModal'

interface PoolWithApy extends Pool {
  apy: BigNumber
}
interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  type?: boolean
  pool: PoolWithApy
}

const CompoundAction: React.FC<FarmCardActionsProps> = ({ earnings, type, pool }) => {
  const {
    sousId,
    stakingTokenName,
    poolCategory,
  } = pool

  const isBnbPool = poolCategory === PoolCategory.BINANCE

  const { onStake } = useSousStake(sousId, isBnbPool)

  const [onPresentCompound] = useModal(
    <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingTokenName} />,
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
        <span className="text-sm">COMPOUND</span>
      </button>
    </div>
  )
}

export default CompoundAction