import React, { useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { getAirFarmAddress } from 'utils/addressHelpers'
// import { getBalanceNumber } from 'utils/formatBalance'
// import { useSousDepositFee } from 'hooks/useHarvest'
// import { QuoteToken } from 'config/constants/types'

import CardHeading from './CardHeading'
import FarmHarvest from './CardElements/FarmHarvest'
import FooterCardFarms from './CardElements/FooterCardFarms'
import Wallet from './CardElements/Wallet'

// interface PoolWithApy extends Pool {
//   apy: BigNumber
// }

interface HarvestProps {
  pool?: any
  removed?: boolean
  type?: boolean
}

const PoolCard: React.FC<HarvestProps> = ({ pool, type, removed = false }) => {

  // Pools using native BNB behave differently than pools using a token
  const TranslateString = useI18n()
  const { account } = useWallet()
  const requestedApproval = false;


  const [isStaked, setIsStaked] = useState(false)

  return (
    <>
      <div className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8" style={{ backgroundImage: "url('images/cardbg.png')", backgroundSize: "100% 580px", boxShadow: "6px 6px 24px -9px" }}>
        <div className="row flex flex-col lg:flex-row gap-0 md:gap-4 mb-12">
          <CardHeading
            lpLabel='RastaDividend AirNFT'
            isCommunityFarm={false}
            farmImage='airnft'
            tokenSymbol="farm.tokenSymbol"
          />
          {!removed && (
            <div className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-4 px-6  mt-4 md:mt-0">
              <span className="apr-value text-2xl w-full text-gray-700 ">
                47%
              </span>
              <span className="apr-label text-red-rasta text-sm">APR</span>
            </div>
          )}
        </div>
        <div className={` expanded md:block`}>
          <FarmHarvest
            lpLabel='AIRNFT'
            farmEarned={0}
            depositFee={0}
            pid={0}
            type={type}
            pool={pool}
            earning={0}
          />
        </div>
        {!account && <Wallet />}
        {account && (
          <div className="flex justify-between">
            <button
              type="button"
              disabled={requestedApproval}
              onClick={() => setIsStaked(!isStaked)}
              className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl cursor-pointer"
            >
              <span>{isStaked ? TranslateString(758, 'Unstake NFT') : TranslateString(758, 'Stake NFT')}</span>
            </button>
          </div>
        )}

        {/* <CardActionsContainer farm={farm} ethereum={ethereum} account={account} addLiquidityUrl={addLiquidityUrl} /> */}
        <FooterCardFarms
          farmBscLink={`https://bscscan.com/address/${getAirFarmAddress()}`}
          farmValue='0'
          farmStake="lpLabel"
          addLPurl="addLiquidityUrl"
        />
      </div>
    </>
  )
}

// const PoolFinishedSash = styled.div`
//   background-image: url('/images/pool-finished-sash.svg');
//   background-position: top right;
//   background-repeat: not-repeat;
//   height: 135px;
//   position: absolute;
//   right: -24px;
//   top: -24px;
//   width: 135px;
// `

// const StyledCardActions = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 16px 0;
//   width: 100%;
//   box-sizing: border-box;
// `

// const BalanceAndCompound = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: row;
// `

// const StyledActionSpacer = styled.div`
//   height: ${(props) => props.theme.spacing[4]}px;
//   width: ${(props) => props.theme.spacing[4]}px;
// `

// const StyledDetails = styled.div`
//   display: flex;
//   font-size: 14px;
// `

export default PoolCard
