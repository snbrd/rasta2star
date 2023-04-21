import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { getZionConvertAddress } from 'utils/addressHelpers'
import { Farm } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import * as FaIcons from 'react-icons/fa'
import useI18n from 'hooks/useI18n'
import { useApprove } from 'hooks/useApprove'
import StakeAction from './StakeAction'
import Wallet from '../CardElements/Wallet'

const Action = styled.div`
  padding-top: 16px;
`

interface FarmCardActionsProps {
  account?: string
  ethereum?: provider
}

const CardActions: React.FC<FarmCardActionsProps> = ({ account, ethereum }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  // const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol)
  // const { allowance, tokenBalance, stakedBalance } = useFarmUser(pid)
  const contractAddress = getZionConvertAddress()
  // const lpName = farm.lpSymbol.toUpperCase()
  // const isApproved = account && allowance && allowance.isGreaterThan(0)
  const isApproved = false;

  const convertContract = useMemo(() => {
    return getContract(ethereum as provider, contractAddress)
  }, [ethereum, contractAddress])

  const { onApprove } = useApprove(convertContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrConvertButton = () => {
    return isApproved ? (
      // <StakeAction
      //   stakedBalance={stakedBalance}
      //   tokenBalance={tokenBalance}
      //   tokenName={lpName}
      //   pid={pid}
      //   addLiquidityUrl={addLiquidityUrl}
      // />
      ""
    ) : (
      // <button
      //   type="button"
      //   disabled={requestedApproval}
      //   onClick={handleApprove}
      //   className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl cursor-pointer"
      // >
      // <button
      //   type="button"
      //   disabled={requestedApproval}
      //   onClick={handleApprove}
      //   className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-blue-zion to-blue-zion_cyan items-center justify-center space-x-4 rounded-xl cursor-pointer"
      // >
      <button
        type="button"
        disabled={requestedApproval}
        onClick={handleApprove}
        className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-newpurple-400 to-newpurple-900 items-center justify-center space-x-4 rounded-xl cursor-pointer"
      >
        <FaIcons.FaWallet />
        <span>{TranslateString(758, 'Approve Contract')}</span>
      </button>
    )
  }

  return (
    <Action>
      {!account ? <Wallet /> : renderApprovalOrConvertButton()}
    </Action>
  )
}

export default CardActions
