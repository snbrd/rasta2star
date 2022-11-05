import React, { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import useStake, { useApproveAll } from 'hooks/useAirFarm'
import { getAddress } from 'utils/addressHelpers'
import * as FaIcons from 'react-icons/fa'
import styled from 'styled-components'

import CardHeading from './CardHeading'
import FarmHarvest from './CardElements/FarmHarvest'
import FooterCardFarms from './CardElements/FooterCardFarms'
import Wallet from './CardElements/Wallet'

interface HarvestProps {
  pool?: any
  removed?: boolean
  apy?: any
}

const CustomTitle = styled.div`
  padding: 8px 40px;
  margin-top: -48px;
  margin-left: -40px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: white;
  @media (max-width: 1280px) {
    margin-top: -40px;
    margin-left: -32px;
  }
  @media (max-width: 1024px) {
    margin-top: -32px;
    margin-left: -20px;
    padding: 4px 40px;
  }
`

const PoolCard: React.FC<HarvestProps> = ({ pool, apy, removed = false }) => {
  const {
    id,
    icon,
    ribbon,
    balance,
    approved,
    poolName,
    ribbonText,
    isFinished,
    farmbalance,
    projectLink,
    stakedBalance,
    contractAddress,
    nftContractAddress,
  } = pool

  const TranslateString = useI18n()
  const { account, status } = useWallet()
  const [isApproval, SETisApproval] = useState(approved)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    SETisApproval(approved)
  }, [approved])

  const { onApproveAll } = useApproveAll(nftContractAddress, getAddress(contractAddress))
  const { onStake, onUnStake } = useStake(getAddress(contractAddress))

  // const buttonClass =
  //   'w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'
  const buttonClass =
    'w-full flex flex-row text-white py-2 bg-gradient-to-b from-blue-zion to-blue-zion_cyan items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'

  return (
    <>
      {/* <div
        className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8"
        style={{
          backgroundImage: "url('images/cardbg.png')",
          backgroundSize: '100% 580px',
          boxShadow: '6px 6px 24px -9px',
        }}
      > */}
      <div
        className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8"
        style={{
          background: '#3d38467a',
          color: '#fff',
          backgroundSize: '100% 580px',
          boxShadow: '6px 6px 24px -9px #000000',
        }}
      >
        {ribbon && (
          // <CustomTitle className="absolute text-md md:text-md xl:text-lg bg-gradient-to-r from-yellow-rasta to-green-rasta">
          <CustomTitle className="absolute text-md md:text-md xl:text-lg bg-gradient-to-r from-blue-zion to-blue-zion_cyan">
            {ribbonText}
          </CustomTitle>
        )}
        <div className="row flex flex-col lg:flex-row space-x-0 md:space-x-4 mb-4 md:mb-12">
          <CardHeading lpLabel={poolName} isCommunityFarm={false} farmImage={icon} tokenSymbol="farm.tokenSymbol" />
          {!removed && (
            <div
              className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-4 px-6  mt-4 md:mt-0"
              style={{
                background: '#241f31',
              }}
            >
              <span className="apr-value text-2xl w-full text-white ">
                {Number(apy) > 0 && !isFinished ? `${apy}%` : '-'}
              </span>
              {/* <span className="apr-label text-red-rasta text-sm">APR</span> */}
              <span className="apr-label text-blue-zion_cyan text-sm">APR</span>
            </div>
          )}
        </div>
        <div className={` expanded md:block`}>
          <FarmHarvest pool={pool} type={status === 'connected'} />
        </div>
        {(() => {
          if (!account) {
            return <Wallet />
          }

          if (!balance && (Number(stakedBalance) === 0 || !stakedBalance)) {
            return (
              <a href={projectLink} target="_blank" rel="noreferrer">
                <span className={buttonClass}>
                  <FaIcons.FaShoppingBag />
                  <span>Buy NFTs</span>
                </span>
              </a>
            )
          }

          if (!isApproval) {
            return (
              <span
                className={(status === 'connected' ? '' : 'disabled') + buttonClass}
                onClick={() => (status === 'connected' ? onApproveAll() : null)}
              >
                <FaIcons.FaCheck />
                <span>APPROVE NFT</span>
              </span>
            )
          }

          if (Number(stakedBalance) === 0 || !stakedBalance) {
            return (
              <div className="flex justify-between">
                <button
                  type="button"
                  disabled={!isApproval || loading || isFinished}
                  onClick={async () => {
                    setLoading(true)
                    await onStake()
                    setLoading(false)
                  }}
                  className={(isFinished ? 'disabled ' : '') + buttonClass}
                >
                  <span>{TranslateString(758, 'Stake NFT')}</span>
                </button>
              </div>
            )
          }

          return (
            <div className="flex justify-between space-x-3">
              <button
                type="button"
                disabled={loading}
                onClick={async () => {
                  setLoading(true)
                  await onUnStake()
                  setLoading(false)
                }}
                className={buttonClass}
              >
                <span>{TranslateString(758, 'Unstake')}</span>
              </button>
              <button
                type="button"
                disabled={!isApproval || loading || Number(stakedBalance) === 0 || isFinished || !Number(balance)}
                onClick={async () => {
                  setLoading(true)
                  await onStake()
                  setLoading(false)
                }}
                className={
                  !isApproval || loading || Number(stakedBalance) === 0 || isFinished || !Number(balance)
                    ? `disabled ${buttonClass}`
                    : buttonClass
                }
              >
                <span>{TranslateString(758, 'Stake More')}</span>
              </button>
            </div>
          )
        })()}

        {/* <CardActionsContainer farm={farm} ethereum={ethereum} account={account} addLiquidityUrl={addLiquidityUrl} /> */}
        <FooterCardFarms
          farmBscLink={`https://bscscan.com/address/${getAddress(contractAddress)}`}
          farmValue={farmbalance}
          stackedValue={stakedBalance}
          farmStake="lpLabel"
          addLPurl="addLiquidityUrl"
          type={status === 'connected'}
          poolId={id}
        />
      </div>
    </>
  )
}

export default PoolCard
