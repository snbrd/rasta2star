import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { LinkExternal } from 'rasta-uikit'
import ModalInput from 'components/ModalInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface DepositModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
  addLiquidityUrl?: string
}

const DepositModal: React.FC<DepositModalProps> = ({ max, onConfirm, onDismiss, tokenName = '', addLiquidityUrl }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max)
  }, [max])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  return (
    <div
      className="bg-white z-50 px-12 py-12 flex flex-col justify-between rounded-lg"
      style={{ width: '443px', height: '415px' }}
    >
      <div className="text-2xl font-bold text-center pb-6">Deposit {tokenName}</div>
      <ModalInput
        value={val}
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        max={fullBalance}
        symbol={tokenName}
        addLiquidityUrl={addLiquidityUrl}
        inputTitle={TranslateString(1070, 'Stake')}
      />
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
          className="w-1/2 bg-gradient-to-l text-white from-green-rasta to-yellow-rasta  rounded-lg px-3 py-2 flex-row space-x-2 flex items-center justify-center cursor-pointer"
          disabled={pendingTx || fullBalance === '0' || !val || Number(val) > Number(fullBalance)}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(val)
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </button>
      </div>
      <LinkExternal href={addLiquidityUrl} style={{ alignSelf: 'center', color: 'darkorange' }}>
        {TranslateString(999, 'Get')} {tokenName}
      </LinkExternal>
    </div>
  )
}

export default DepositModal
