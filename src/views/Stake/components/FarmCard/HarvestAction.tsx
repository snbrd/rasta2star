import React, { useState } from 'react'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading } from 'rasta-uikit'
import useI18n from 'hooks/useI18n'
import * as FaIcons from 'react-icons/fa'
import { useHarvest } from 'hooks/useHarvest'
import { getBalanceNumber } from 'utils/formatBalance'

interface FarmCardActionsProps {
  earnings?: BigNumber
  pid?: number
  type?: boolean
}

const HarvestAction: React.FC<FarmCardActionsProps> = ({ earnings, type, pid }) => {
  const TranslateString = useI18n()
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)

  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()
  const buttonClass = "px-4 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer"

  return (
    <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full from-green-rasta to-yellow-rasta  rounded-md">
      <button
        type="button"
        disabled={rawEarningsBalance === 0 || pendingTx}
        className={(type === false ? "disabled " : "") + buttonClass}
        onClick={async () => {
          if (type !== false) {
            setPendingTx(true)
            await onReward()
            setPendingTx(false)
          }
        }}
      >
        <FaIcons.FaSearchDollar />
        <span className="text-sm">HARVEST</span>
      </button>
    </div>
    // <Flex mb="8px" justifyContent="space-between" alignItems="center">
    //   <Heading color={rawEarningsBalance === 0 ? '#666171' : 'text'}>{displayBalance}</Heading>
    //   <Button
    //     disabled={rawEarningsBalance === 0 || pendingTx}
    //     onClick={async () => {
    //       setPendingTx(true)
    //       await onReward()
    //       setPendingTx(false)
    //     }}
    //   >
    //     {TranslateString(562, 'Harvest')}
    //   </Button>
    // </Flex>
  )
}

export default HarvestAction
