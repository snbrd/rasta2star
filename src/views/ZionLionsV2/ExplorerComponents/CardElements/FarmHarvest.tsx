import React, { useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getAddress } from 'utils/addressHelpers'
import { useApproveAll } from 'hooks/useAirFarm'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { BlockAccounts } from 'config/constants/nftPools'
import { approve } from 'utils/callHelpers'
import { useModal } from 'rasta-uikit'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

type Props = {
  staked?: boolean
  isApproval?: boolean
  allowance?: any
  pool?: any
  poolContract?: any
  zionContract?: any
  stakedAmount?: any
  rastaBalance?: any
  onFetch?: any
}

// const buttonClass =
//   'w-full font-bold flex flex-row text-white py-2 bg-gradient-to-b from-blue-zion to-blue-zion_cyan items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'
const buttonClass =
  'w-full font-bold flex flex-row text-white py-2 bg-gradient-to-b from-newpurple-400 to-newpurple-900 items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'

const activeButtonClass =
  'w-full font-bold flex flex-row text-white py-2 bg-gradient-to-b from-green-zion to-yellow-zion items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'

const activeButtonClass2 =
  'w-full font-bold flex flex-row text-white py-2 bg-gradient-to-b from-yellow-rasta to-orange-zion items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'

export default function FarmHarvest({
  onFetch,
  rastaBalance,
  stakedAmount,
  poolContract,
  zionContract,
  allowance,
  staked,
  isApproval,
  pool,
}: Props) {
  const { balance, contractAddress, maxDepositAmount, nftContractAddress } = pool

  const { account } = useWallet()
  const { onApproveAll } = useApproveAll(nftContractAddress, getAddress(contractAddress))
  const [loading, setLoading] = useState(false)

  const isApprovedToken = useMemo(() => Number(allowance) >= Number(maxDepositAmount), [allowance, maxDepositAmount])
  const isStakedToken = useMemo(() => new BigNumber(stakedAmount).toNumber() > 0, [stakedAmount])
  const blocked = useMemo(() => BlockAccounts.indexOf(account) !== -1, [account])

  const onStakeNft = async () => {
    if (!poolContract) return
    if (blocked) return
    if (!balance || balance < 10) return

    try {
      await poolContract.methods.stakeAll().send({ from: account })
      onFetch()
    } catch (error) {
      console.log(error)
    }
  }

  const onUnStakeNft = async () => {
    if (!poolContract) return

    try {
      await poolContract.methods.unStack().send({ from: account })
      onFetch()
    } catch (error) {
      console.log(error)
    }
  }

  const onApproveToken = async () => {
    if (!poolContract || !account) return
    setLoading(true)

    try {
      await approve(zionContract, poolContract, account)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const onStakeZion = async (amount) => {
    if (!poolContract || !account) return
    if (blocked) return

    setLoading(true)
    try {
      await poolContract.methods
        .depositToken(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
        .send({ from: account })
      onFetch()
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const onWithdrawZion = async (amount) => {
    if (!poolContract || !account) return
    setLoading(true)

    try {
      await poolContract.methods
        .withdrawToken(new BigNumber(amount).times(new BigNumber(10).pow(18)).toString())
        .send({ from: account })
      onFetch()
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  const [onPresentDeposit] = useModal(
    <DepositModal max={new BigNumber(rastaBalance)} onConfirm={onStakeZion} tokenName="Rasta" />,
  )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedAmount} onConfirm={onWithdrawZion} tokenName="Rasta" />,
  )

  return (
    <div className="w-full mt-4 md:mt-0">
      <div className="gap-4 md:gap-10 row flex flex-col w-full">
        <div className="w-full items-detail flex flex-col pb-4 md:pb-0 ml-0 gap-6">
          <h2 className="text-xl font-bold text-left">STEP 1: Approve and Stake 10 Explorer NFTs</h2>
          <div className="flex flex-row space-x-3 xl:space-x-0 justify-between md:pr-10">
            <button
              type="button"
              disabled={loading}
              className={isApproval ? activeButtonClass : buttonClass}
              style={{ maxWidth: 220 }}
              onClick={async () => {
                if (isApproval || loading) return
                setLoading(true)
                await onApproveAll()
                setLoading(false)
              }}
            >
              <span>{isApproval ? 'Approved' : 'Approve'}</span>
            </button>
            {blocked ? (
              <button
                type="button"
                disabled
                className={`${buttonClass} ${' disabled'}`}
                style={{ maxWidth: 220 }}
              >
                <span>Stake 10 Explorers</span>
              </button>
            ) : (
              <button
                type="button"
                disabled={loading || blocked}
                className={`${staked ? activeButtonClass2 : buttonClass} ${!isApproval && ' disabled'}`}
                style={{ maxWidth: 220 }}
                onClick={async () => {
                  setLoading(true)
                  if (!staked) {
                    if (!isApproval) return

                    await onStakeNft()
                  } else {
                    await onUnStakeNft()
                  }
                  setLoading(false)
                }}
              >
                <span>{staked ? 'Unstake Explorers' : 'Stake 10 Explorers'}</span>
              </button>
            )}
          </div>
        </div>
        <div className="w-full items-detail flex flex-col pb-4 md:pb-0 ml-0 gap-6">
          <h2 className="text-xl font-bold text-left">STEP 2: Stake your $ZION Tokens for A Supercharged Return</h2>
          <div className="flex flex-row space-x-3 xl:space-x-0 justify-between md:pr-10">
            <button
              type="button"
              disabled={loading || blocked}
              className={`${isApprovedToken ? activeButtonClass : buttonClass} ${!staked && ' disabled'}`}
              style={{ maxWidth: 220 }}
              onClick={async () => {
                if (loading) return
                if (!staked) return

                if (isApprovedToken) {
                  onPresentDeposit()
                } else {
                  await onApproveToken()
                }
              }}
            >
              <span>{isApprovedToken ? 'Stake More $ZION' : 'Approve'}</span>
            </button>
            <button
              type="button"
              disabled={loading || blocked}
              className={`${isStakedToken ? activeButtonClass2 : buttonClass} ${!isApprovedToken && ' disabled'}`}
              style={{ maxWidth: 220 }}
              onClick={async () => {
                if (loading) return
                if (!isApprovedToken) return

                if (!isStakedToken) {
                  onPresentDeposit()
                } else {
                  onPresentWithdraw()
                }
              }}
            >
              <span>{isStakedToken ? 'Unstake $ZION' : 'Stake $ZION'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
