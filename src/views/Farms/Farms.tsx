import React, { useEffect, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
// import { Image, Heading } from 'rasta-uikit'
import { BLOCKS_PER_YEAR, RASTA_PER_BLOCK, RASTA_POOL_PID } from 'config'
import ToggleSwitch from 'components/toggle-switch/ToggleSwitch'
import styled from 'styled-components'
// import FlexLayout from 'components/layout/Flex'
// import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceRastaBusd, usePriceEthBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import AnimatedPage from 'components/AnimatedPage'

import ToggleSwitchForStack from 'components/toggle-switch/ToggleSwitchForStack'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
// import FarmTabButtons from './components/FarmTabButtons'
// import Divider from './components/Divider'
// import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import MrRastaImage from '../../assets/headerImageZionLabs11.jpg'

const Farms: React.FC = () => {
  const TranslateString = useI18n()
  const [checked, setChecked] = useState(true)
  const farmList = useFarms()
  const rastaPrice = usePriceRastaBusd()
  const bnbPrice = usePriceBnbBusd()
  const { ethereum }: { ethereum: provider } = useWallet()
  const { account } = useWallet()
  const ethPriceUsd = usePriceEthBusd()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stackedOnly, setStackedOnly] = useState(false)

  const farmsLP = farmList.filter((farm) => farm.farm === true)
  const activeFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((farm) => farm.pid !== 0 && farm.multiplier === '0X')
  const stackedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )
  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const cakePriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === RASTA_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
          return farm
        }
        const cakeRewardPerBlock = RASTA_PER_BLOCK.times(farm.poolWeight)
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        // cakePriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
        let apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)

        if (farm.quoteTokenSymbol === QuoteToken.BUSD || farm.quoteTokenSymbol === QuoteToken.UST) {
          apy = cakePriceVsBNB.times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken).times(bnbPrice)
        } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
          apy = rastaPrice.div(ethPriceUsd).times(cakeRewardPerYear).div(farm.lpTotalInQuoteToken)
        } else if (farm.quoteTokenSymbol === QuoteToken.RASTA) {
          apy = cakeRewardPerYear.div(farm.lpTotalInQuoteToken)
        } else if (farm.dual) {
          const cakeApy =
            farm && cakePriceVsBNB.times(cakeRewardPerBlock).times(BLOCKS_PER_YEAR).div(farm.lpTotalInQuoteToken)
          const dualApy =
            farm.tokenPriceVsQuote &&
            new BigNumber(farm.tokenPriceVsQuote)
              .times(farm.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(farm.lpTotalInQuoteToken)

          apy = cakeApy && dualApy && cakeApy.plus(dualApy)
        }

        return { ...farm, apy }
      })
      if (farmsToDisplayWithAPY && farmsToDisplayWithAPY.length > 0) {
        return farmsToDisplayWithAPY.map((farm) => (
          <FarmCard
            key={farm.pid}
            farm={farm}
            removed={removed}
            bnbPrice={bnbPrice}
            cakePrice={rastaPrice}
            ethPrice={ethPriceUsd}
            ethereum={ethereum}
            account={account}
          />
        ))
      }
      return (
        <>
          <div />
          No Farm Data Found
        </>
      )
    },
    [farmsLP, bnbPrice, ethPriceUsd, rastaPrice, ethereum, account],
  )

  return (
    <AnimatedPage>
      <div>
        <div
          className="flex w-full bg-left-center-small md:bg-center flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16 items-center"
          style={{
            backgroundImage: `url(${MrRastaImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'top center',
          }}
        >
          <h1 className="text-4xl font-bold">{stackedOnly ? 'Mr Rasta Liquidity' : 'Mr Rasta Liquidity'}</h1>
        </div>

        <div className=" py-8 md:py-0 md:pt-16 md:pb-32  w-full bg-gradient-to-br from-red-rasta to-blue-zion text-black">
          <div className=" flex flex-col text-white items-center w-10/12 mx-auto">
            <h2 className="font-bold text-xl">{TranslateString(696, 'Stake Liquidity Pool Tokens')}</h2>
            <p className="text-white">{TranslateString(696, 'Earn Brand New Rasta Tokens')}</p>
            <div className="toggle-button items-center md:items-end flex-col flex w-full">
              <Wrapper>
                <ToggleSwitchForStack id="ToggleSwitchForStack" checked={stackedOnly} onChange={setStackedOnly} />
                Staked Only &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <ToggleSwitch id="toggleSwitch" checked={checked} onChange={setChecked} />
              </Wrapper>
            </div>
            <div className="card items-center text-center w-full mt-0 mb-16 md:mt-16 md:mb-0">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 space-4">
                  {stackedOnly ? (
                    farmsList(stackedOnlyFarms, false)
                  ) : (
                    <>{checked ? farmsList(activeFarms, false) : farmsList(inactiveFarms, true)}</>
                  )}
                </div>
              </div>
              {/* {checked && <CardsSection itemsToRender={list}/>}
              {showMore && checked &&
                <button type="button" onClick={loadMore} className="flex items-center justify-center mx-auto mt-8 text-md space-x-4 hover:text-red-rasta" > 
                <FaIcons.FaChevronCircleDown/>
                <span>Load More</span> </button>
              }
              {!checked && "No Farm Data Found"} */}
            </div>
          </div>
        </div>
        {/* <FarmTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} /> */}
      </div>
    </AnimatedPage>
  )
}

export default Farms

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`
