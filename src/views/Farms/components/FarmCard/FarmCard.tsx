import React, { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { QuoteToken } from 'config/constants/types'
import { BASE_ADD_LIQUIDITY_URL } from 'config'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import FarmHarvest from '../CardElements/FarmHarvest'
import FooterCardFarms from '../CardElements/FooterCardFarms'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardProps {
  farm: FarmWithStakedValue
  removed: boolean
  cakePrice?: BigNumber
  bnbPrice?: BigNumber
  ethPrice?: BigNumber
  ethereum?: provider
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ farm, removed, cakePrice, bnbPrice, ethPrice, ethereum, account }) => {

  const isCommunityFarm = communityFarms.includes(farm.tokenSymbol)
  // We assume the token name is coin pair + lp e.g. RASTA-BNB LP, LINK-BNB LP,
  // NAR-RASTA LP. The images should be cake-bnb.svg, link-bnb.svg, nar-cake.svg
  const farmImage = farm.lpSymbol.split(' ')[0].toLocaleLowerCase()

  const totalValue: BigNumber = useMemo(() => {
    if (!farm.lpTotalInQuoteToken) {
      return null
    }
    if (farm.quoteTokenSymbol === QuoteToken.BNB) {
      return bnbPrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.RASTA) {
      return cakePrice.times(farm.lpTotalInQuoteToken)
    }
    if (farm.quoteTokenSymbol === QuoteToken.ETH) {
      return ethPrice.times(farm.lpTotalInQuoteToken)
    }
    return farm.lpTotalInQuoteToken
  }, [bnbPrice, cakePrice, ethPrice, farm.lpTotalInQuoteToken, farm.quoteTokenSymbol])

  const totalValueFormated = totalValue
    ? `$${Number(totalValue).toLocaleString(undefined, { maximumFractionDigits: 0 })}`
    : '-'
  const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase()
  const farmAPY = farm.apy && farm.apy.times(new BigNumber(100)).toNumber().toLocaleString('en-US').slice(0, -1)

  const { quoteTokenAdresses, quoteTokenSymbol, tokenAddresses } = farm
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const addLiquidityUrl = `${BASE_ADD_LIQUIDITY_URL}/${liquidityUrlPathParts}`

  const { pid } = useFarmFromSymbol(farm.lpSymbol)
  const { earnings } = useFarmUser(pid)
  const rawEarningsBalance = getBalanceNumber(earnings)
  const displayBalance = rawEarningsBalance.toLocaleString()

  return (
    <div className="shadow-md p-5 pt-8 pb-8 rounded-lg border-2 border-green-rasta mt-8">
      <div className="row flex flex-col lg:flex-row gap-0 md:gap-2 mb-12">
        <CardHeading
          lpLabel={lpLabel}
          multiplier={farm.multiplier}
          isCommunityFarm={isCommunityFarm}
          farmImage={farmImage}
          tokenSymbol={farm.tokenSymbol}
        />
        {!removed && (
          <div className="w-full apr bg-gray-300 flex flex-col rounded-lg justify-center text-center mt-4 md:mt-0">
            <span className="apr-value text-2xl w-full text-gray-700 ">{farmAPY}%</span>
            <span className="apr-label text-red-rasta text-md">APR</span>
          </div>
          // <Flex justifyContent="space-between" alignItems="center">
          //   <Text color="yellow">{TranslateString(736, 'APR')}:</Text>
          //   <Text bold style={{ display: 'flex', alignItems: 'center' }}>
          //     {farm.apy ? (
          //       <>
          //         <ApyButton lpLabel={lpLabel} addLiquidityUrl={addLiquidityUrl} cakePrice={cakePrice} apy={farm.apy} />
          //         {farmAPY}%
          //       </>
          //     ) : (
          //       <Skeleton height={24} width={80} />
          //     )}
          //   </Text>
          // </Flex>
        )}
      </div>
      <div className={` expanded md:block`}>
        <FarmHarvest farmEarned={displayBalance} depositFee={farm.depositFee} pid={pid} earning={earnings} />
        <CardActionsContainer farm={farm} ethereum={ethereum} account={account} addLiquidityUrl={addLiquidityUrl} />
        {/* <Divider /> */}
        {/* <ExpandingWrapper expanded={showExpandableSection}>
        <DetailsSection
          removed={removed}
          bscScanAddress={`https://bscscan.com/address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`}
          totalValueFormated={totalValueFormated}
          lpLabel={lpLabel}
          addLiquidityUrl={addLiquidityUrl}
        />
      </ExpandingWrapper>
        <ExpandableSectionButton
          onClick={() => setShowExpandableSection(!showExpandableSection)}
          expanded={showExpandableSection}
        /> */}
        <FooterCardFarms
          farmBscLink={`https://bscscan.com/address/${farm.lpAddresses[process.env.REACT_APP_CHAIN_ID]}`}
          farmValue={totalValueFormated}
          farmStake={lpLabel}
          addLPurl={addLiquidityUrl}
        />
      </div>
    </div>
  )
}

export default FarmCard
