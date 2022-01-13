import BigNumber from 'bignumber.js'
import React, { useMemo, useState } from 'react'
import CountUp from 'react-countup'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface DepositModalProps {
  earnings: string
  onConfirm: () => void
  onDismiss?: () => void
  tokenName?: string
}

const CompoundModal: React.FC<DepositModalProps> = ({ earnings, onConfirm, onDismiss, tokenName = '' }) => {
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(new BigNumber(earnings))
  }, [earnings])

  return (
    <div
      className="bg-white z-50 px-12 py-12 flex flex-col justify-between rounded-lg"
      style={{ width: '443px', height: '370px' }}
    >
      <div className="text-2xl font-bold text-center pb-6">{`${TranslateString(704, 'Compound')} ${TranslateString(330, `${tokenName} Earned`)}`}</div>
      <div className="text-center" style={{ marginTop: -30 }}>
        <span className="text-4xl font-bold">
          <CountUp start={0} end={Number(fullBalance)} decimals={4} duration={1} separator="," />
        </span>
      </div>
      <div className="flex flex-row justify-between mt-2 mb-6 gap-5">
        <button
          type="button"
          className="w-1/2 bg-gradient-to-l border-2 text-gray-700 rounded-lg px-12 py-2 flex-row space-x-2 flex items-center justify-center cursor-pointer"
          onClick={onDismiss}
        >
          {TranslateString(462, 'Cancel')}
        </button>
        <button
          type="button"
          style={{ maxWidth: "50%" }}
          className="w-1/2 bg-gradient-to-l text-white from-green-rasta to-yellow-rasta  rounded-lg px-3 py-2 flex-row space-x-2 flex items-center justify-center cursor-pointer"
          disabled={pendingTx || Number(fullBalance) === 0}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm()
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </button>
      </div>
    </div>
  )
}

export default CompoundModal
