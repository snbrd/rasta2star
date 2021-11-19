import React from 'react'
import useI18n from '../../hooks/useI18n'

interface ModalInputProps {
  max: string
  symbol: string
  onSelectMax?: () => void
  onChange: (e: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  value: string
  addLiquidityUrl?: string
  inputTitle?: string
}

const ModalInput: React.FC<ModalInputProps> = ({
  max,
  onChange,
  onSelectMax,
  value,
  inputTitle,
}) => {
  const TranslateString = useI18n()
  const isBalanceZero = max === '0' || !max

  const displayBalance = isBalanceZero ? '0' : parseFloat(max).toFixed(4)

  return (
    <div className="flex flex-col">
      <div className="flex justify-between flex-row items-center">
        <span className="text-xl">{inputTitle}</span>
        <span className="text-sm font-bold">RASTA</span>
      </div>
      <div className="flex justify-between my-2">
        <input
          type="number"
          className="border-2 border-gray-500 rounded-md outline-none px-2 w-1/2"
          onChange={onChange}
          placeholder="0"
          value={value}
        />
        {/* <button type="button" className="bg-red-300 rounded-lg mx-1 px-3 py-1 text-red-800 font-bold" onClick={onSelectMax}>
          {TranslateString(452, '- MIN')}
        </button> */}
        <button type="button" className="bg-green-300 rounded-lg mx-1 px-3 py-1 text-green-800 font-bold" onClick={onSelectMax}>
          {TranslateString(452, '+ MAX')}
        </button>
      </div>
      <span className="text-xl mt-2">
        {TranslateString(1120, 'Balance')}: <br />
        {displayBalance.toLocaleString()}
      </span>
    </div>
  )
}

export default ModalInput
