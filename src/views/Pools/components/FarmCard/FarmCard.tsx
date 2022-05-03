import React from 'react'
import BigNumber from 'bignumber.js'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
// import { QuoteToken } from 'config/constants/types'
import { BASE_EXCHANGE_URL } from 'config'
// import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import FarmHarvest from '../CardElements/FarmHarvest'
import FooterCardFarms from '../CardElements/FooterCardFarms'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

// const RainbowLight = keyframes`
// 	0% {
// 		background-position: 0% 50%;
// 	}
// 	50% {
// 		background-position: 100% 50%;
// 	}
// 	100% {
// 		background-position: 0% 50%;
// 	}
// `

// const StyledCardAccent = styled.div`
//   background: linear-gradient(
//     45deg,
//     rgba(255, 0, 0, 1) 0%,
//     rgba(255, 154, 0, 1) 10%,
//     rgba(208, 222, 33, 1) 20%,
//     rgba(79, 220, 74, 1) 30%,
//     rgba(63, 218, 216, 1) 40%,
//     rgba(47, 201, 226, 1) 50%,
//     rgba(28, 127, 238, 1) 60%,
//     rgba(95, 21, 242, 1) 70%,
//     rgba(186, 12, 248, 1) 80%,
//     rgba(251, 7, 217, 1) 90%,
//     rgba(255, 0, 0, 1) 100%
//   );
//   background-size: 300% 300%;
//   animation: ${RainbowLight} 2s linear infinite;
//   border-radius: 16px;
//   filter: blur(6px);
//   position: absolute;
//   top: -2px;
//   right: -2px;
//   bottom: -2px;
//   left: -2px;
//   z-index: -1;
// `

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  ethPrice?: BigNumber
  ethereum?: provider
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, ethereum, account }) => {

  const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. RASTA-BNB LP, LINK-BNB LP,
  // NAR-RASTA LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()

  // const totalValue: BigNumber = useMemo(() => {
  //   if (!farm.lpTotalInQuoteToken) {
  //     return null
  //   }
  //   if (farm.quoteTokenSymbol === QuoteToken.BNB) {
  //     return bnbPrice.times(farm.lpTotalInQuoteToken)
  //   }
  //   if (farm.quoteTokenSymbol === QuoteToken.RASTA) {
  //     return cakePrice.times(farm.lpTotalInQuoteToken)
  //   }
  //   if (farm.quoteTokenSymbol === QuoteToken.ETH) {
  //     return ethPrice.times(farm.lpTotalInQuoteToken)
  //   }
  //   return farm.lpTotalInQuoteToken
  // }, [bnbPrice, cakePrice, ethPrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  const totalValueFormated = farm.singleTokenAmount
    ? `${Number(farm.singleTokenAmount).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-';
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase()
  const farmAPY = farm.apy && farm.apy.times(new BigNumber(100)).toNumber().toLocaleString('en-US').slice(0, -1)
  // const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm
  // const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  // const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`
  const addLiquidityUrl = `${BASE_EXCHANGE_URL}`
  const { pid } = useFarmFromSymbol(farm.lpSymbol)
  const { earnings } = useFarmUser(pid)
  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <div className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8" style={{ backgroundImage: "url('https://app.rasta.finance/images/cardbg.png')", backgroundSize: "100% 580px", boxShadow: "6px 6px 24px -9px" }}>
      <div className="row flex flex-col gap-4 mb-12">
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          isCommunityFarm={isCommunityFarm}
          farmImage={farmImage}
          tokenSymbol={farm.tokenSymbol}
        />
        {!removed && (
          <div className="w-full apr bg-gray-300 flex flex-col rounded-lg justify-center text-center mt-4 md:mt-0">
            <span className="apr-value text-2xl w-full text-gray-700 ">{Number(farmAPY) > 0 ? `${farmAPY}%` : "-"}</span>
            <span className="apr-label text-red-rasta text-md">APR</span>
          </div>
        )}
      </div>
      <div className={` expanded md:block`}>
        <FarmHarvest farmEarned={displayBalance} depositFee={farm.depositFee} pid={pid} earning={earnings} />
      </div>
      <CardActionsContainer farm={farm} ethereum={ethereum} account={account} addLiquidityUrl={addLiquidityUrl} />
      <FooterCardFarms
        farmBscLink={`https://bscscan.com/address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`}
        farmValue={totalValueFormated}
        farmStake={lpLabel}
        addLPurl={addLiquidityUrl}
      />
    </div>
  )
}

export default FarmCard
