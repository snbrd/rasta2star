import React, { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import useStake, { useApproveAll } from 'hooks/useAirFarm'
import { getAirFarmAddress } from 'utils/addressHelpers'
import * as FaIcons from 'react-icons/fa'

import CardHeading from './CardHeading'
import FarmHarvest from './CardElements/FarmHarvest'
import FooterCardFarms from './CardElements/FooterCardFarms'
import Wallet from './CardElements/Wallet'

interface HarvestProps {
  pool?: any
  removed?: boolean
  apy?: any
}

const PoolCard: React.FC<HarvestProps> = ({ pool, removed = false }) => {
  const {
    approved,
    depositedAmount,
    balance,
    totalNFT
  } = pool;

  const TranslateString = useI18n()
  const { account, status } = useWallet()
  const [isApproval, SETisApproval] = useState(approved)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    SETisApproval(approved)
  }, [approved])

  const { onApproveAll } = useApproveAll()
  const { onStake, onUnStake } = useStake()

  const buttonClass = "w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-md xl:rounded-xl cursor-pointer"

  return (
    <>
      <div className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8" style={{ backgroundImage: "url('images/cardbg.png')", backgroundSize: "100% 580px", boxShadow: "6px 6px 24px -9px" }}>
        <div className="row flex flex-col lg:flex-row gap-0 md:gap-4 mb-4 md:mb-12">
          <CardHeading
            lpLabel='RastaDividend AirNFT'
            isCommunityFarm={false}
            farmImage='airnft'
            tokenSymbol="farm.tokenSymbol"  
          />
          {!removed && (
            <div className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-4 px-6  mt-4 md:mt-0">
              <span className="apr-value text-2xl w-full text-gray-700 ">
                {/* {Number(apy) > 0 ?
                  `${apy}%` : '-'
                } */}
                241%
              </span>
              <span className="apr-label text-red-rasta text-sm">APR</span>
            </div>
          )}
        </div>
        <div className={` expanded md:block`}>
          <FarmHarvest
            pool={pool}
            type={status === "connected"}
          />
        </div>
        {(() => {
          if (!account) {
            return <Wallet />;
          }

          if (!balance && Number(depositedAmount) === 0) {
            return (
              <a href='https://app.airnfts.com/creators/0x21C8B8069f7B9950cbdA2EF4Af12Aa98c9D97A61' target="_blank" rel='noreferrer'>
                <span
                  className={buttonClass}
                >
                  <FaIcons.FaShoppingBag />
                  <span>Buy NFTs</span>
                </span>
              </a>
            )
          }

          if (!isApproval) {
            return (
              <span
                className={(status === "connected" ? "" : "disabled") + buttonClass}
                onClick={() => status === "connected" ? onApproveAll() : null}
              >
                <FaIcons.FaCheck />
                <span>APPROVE NFT</span>
              </span>
            )
          }

          if (Number(depositedAmount) === 0) {
            return (
              <div className="flex justify-between">
                <button
                  type="button"
                  disabled={!isApproval || loading}
                  onClick={async () => {
                    setLoading(true)
                    await onStake()
                    setLoading(false)
                  }}
                  className={buttonClass}
                >
                  <span>{TranslateString(758, 'Stake NFT')}</span>
                </button>
              </div>
            )
          }

          return (
            <div className="flex justify-between gap-3">
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
                disabled={!isApproval || loading || (Number(depositedAmount) === 0)}
                onClick={async () => {
                  setLoading(true)
                  await onStake()
                  setLoading(false)
                }}
                className={(!isApproval || loading || (Number(depositedAmount) === 0)) ? `disabled ${buttonClass}` : buttonClass}
              >
                <span>{TranslateString(758, 'Stake More')}</span>
              </button>
            </div>
          )

        })()}

        {/* <CardActionsContainer farm={farm} ethereum={ethereum} account={account} addLiquidityUrl={addLiquidityUrl} /> */}
        <FooterCardFarms
          farmBscLink={`https://bscscan.com/address/${getAirFarmAddress()}`}
          farmValue={totalNFT}
          farmStake="lpLabel"
          addLPurl="addLiquidityUrl"
        />
      </div>
    </>
  )
}

export default PoolCard
