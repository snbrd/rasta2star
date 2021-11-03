import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from 'rasta-uikit'
import useI18n from 'hooks/useI18n'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import { getDecimals } from 'utils/callHelpers'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  pid?: number
  addLiquidityUrl?: string
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  tokenName,
  pid,
  addLiquidityUrl,
}) => {
  const TranslateString = useI18n()
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)

  const rawStakedBalance = getBalanceNumber(stakedBalance, getDecimals(pid))
  const displayBalance = rawStakedBalance.toLocaleString()

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={tokenBalance}
      onConfirm={onStake}
      tokenName={tokenName}
      addLiquidityUrl={addLiquidityUrl}
      pid={pid}
    />,
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={tokenName} pid={pid} />,
  )

  const renderStakingButtons = () => {
    return rawStakedBalance === 0 ? (
      <div className="flex">
        <button
          type="button"
          className=" bg-gradient-to-l text-white w-full from-green-rasta to-yellow-rasta  rounded-xl px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer"
          onClick={onPresentDeposit}
        >
          {TranslateString(999, 'Stake LP')}
        </button>
      </div>
    ) : (
      <div>
        <button
          type="button"
          className="text-gray-800 border-2 border-gray-800 rounded-md w-10 p-0 text-2xl mx-2"
          onClick={onPresentWithdraw}
        >
          -
        </button>
        <button
          type="button"
          className="text-gray-800 border-2 border-gray-800 rounded-md w-10 p-0 text-2xl mx-2"
          onClick={onPresentDeposit}
        >
          +
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <span className="text-lg text-left">{displayBalance}</span>
        <span className="text-sm text-red-600">TOKENS STAKED</span>
      </div>
      {renderStakingButtons()}
    </div>
  )
}

export default StakeAction
