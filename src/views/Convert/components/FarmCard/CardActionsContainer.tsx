import React, { useMemo, useState, useCallback, useEffect } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { getAddressByName, getTokenConverterAddress } from 'utils/addressHelpers'
import * as FaIcons from 'react-icons/fa'
import useI18n from 'hooks/useI18n'
import useTokenBalance from 'hooks/useTokenBalance'
import { useTokenConverterApprove } from 'hooks/useApprove'
import { useIfoAllowance } from 'hooks/useAllowance'
import useConvert from 'hooks/useConvert'
import Wallet from '../CardElements/Wallet'

const Action = styled.div`
  padding-top: 16px;
`

interface FarmCardActionsProps {
  account?: string
  ethereum?: provider
  pool: any
}

const CardActions: React.FC<FarmCardActionsProps> = ({ account, ethereum, pool }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const [convertPending, setConvertPending] = useState(false)
  const tokenAddress = getAddressByName(pool.from);
  // const lpName = farm.lpSymbol.toUpperCase()

  const tokenContract = useMemo(() => {
    return getContract(ethereum as provider, tokenAddress)
  }, [ethereum, tokenAddress])

  const { onApprove } = useTokenConverterApprove(tokenContract)
  const { onConvert } = useConvert()
  const allowance = useIfoAllowance(tokenContract, getTokenConverterAddress());
  const tokenBalance = useTokenBalance(getAddressByName(pool.from))
  const [isApproved, setIsApproved] = useState(false)

  useEffect(() => {
    const getApprovedStatus = async () => {
      setIsApproved(account && allowance && allowance.isGreaterThan(0) && allowance.eq(tokenBalance))
    }
    getApprovedStatus()
  }, [account, allowance, requestedApproval, tokenBalance])

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
      setRequestedApproval(false)
    }
  }, [onApprove])

  const handleConvert = useCallback(async () => {
    try {
      if (new BigNumber(tokenBalance).isGreaterThan(0)) {
        setConvertPending(true)
        await onConvert(getAddressByName(pool.from), getAddressByName(pool.to), tokenBalance);
        setConvertPending(false)
      } else {
        // eslint-disable-next-line no-alert
        alert(`You have no ${pool.from} token to convert.`)
      }
      setConvertPending(false)
    } catch (e) {
      console.error(e)
      setConvertPending(false)
    }
  }, [onConvert, pool, tokenBalance])
  
  const renderApprovalOrConvertButton = () => {
    return isApproved ? (
      <button
        type="button"
        disabled={convertPending}
        onClick={handleConvert}
        className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-newpurple-400 to-newpurple-900 items-center justify-center space-x-4 rounded-xl cursor-pointer"
      >
        <FaIcons.FaWallet />
        <span>{TranslateString(758, 'Convert')}</span>
      </button>
    ) : (
      <button
        type="button"
        disabled={requestedApproval}
        onClick={handleApprove}
        className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-newpurple-400 to-newpurple-900 items-center justify-center space-x-4 rounded-xl cursor-pointer"
      >
        <FaIcons.FaWallet />
        <span>{TranslateString(758, 'Approve Convert')}</span>
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
