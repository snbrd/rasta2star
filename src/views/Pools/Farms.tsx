import React, { useEffect, useCallback, useState } from 'react'
import { Route, useHistory, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
// import { Image, Heading } from 'rasta-uikit'
import { BLOCKS_PER_YEAR, RASTA_PER_BLOCK, RASTA_POOL_PID } from 'config'
// import FlexLayout from 'components/layout/Flex'
// import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, usePriceRastaBusd, usePriceEthBusd } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
// import { QuoteToken, PoolCategory } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
// import useBlock from 'hooks/useBlock'
import ToggleSwitch from 'components/toggle-switch/ToggleSwitch'
import { useGetPriceData, useGetCNSPriceVsBnb } from 'hooks/api'
import useMRastaPrice from 'hooks/useMRastaPrice'
// import { getBalanceNumber } from 'utils/formatBalance'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
// import FarmTabButtons from './components/FarmTabButtons'
// import Divider from './components/Divider'
// import PoolCard from '../Stake/components/PoolCard'

import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import MrsRastaImage from '../../assets/lion-mrs-rasta.jpg'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const history = useHistory()
  const TranslateString = useI18n()
  const farmList = useFarms()
  const rastaPrice = usePriceRastaBusd()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const ethPriceUsd = usePriceEthBusd()
  const priceData = useGetPriceData()
  // const pools = usePools(account)
  // const block = useBlock()
  const mrastaPrice = useMRastaPrice()
  const cnsPriceVsBnb = useGetCNSPriceVsBnb()
  const [checked, setChecked] = useState(true)

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  // const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
  //   const tokenPriceBN = new BigNumber(tokenPrice)
  //   if (tokenName === 'BNB') {
  //     return new BigNumber(1)
  //   }
  //   if (tokenPrice && quoteToken === QuoteToken.BUSD) {
  //     return tokenPriceBN.div(bnbPrice)
  //   }
  //   return tokenPriceBN
  // }

  const stackedOnly = false;

  const farmsLP = farmList.filter((farm) => !farm.lpSymbol.includes('RLP'))
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
      const rastaPriceVsBNB = new BigNumber(
        farmList.find((farm) => farm.pid === RASTA_POOL_PID)?.tokenPriceVsQuote || 0,
      )
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken || !priceData) {
          return farm
        }
        const cakeRewardPerBlock = RASTA_PER_BLOCK.times(farm.poolWeight)
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        let price = ''
        if (farm.tokenSymbol === 'CAKE') {
          price = priceData.prices.Cake
        } else if (farm.tokenSymbol === 'MRASTA') {
          price = mrastaPrice.toString()
        } else if (farm.lpSymbol === 'CNR') {
          price = new BigNumber(cnsPriceVsBnb).times(115).times(bnbPrice).toString()
        } else {
          price = priceData.prices[farm.tokenSymbol]
        }

        const apy = rastaPriceVsBNB
          .times(bnbPrice)
          .times(cakeRewardPerYear)
          .div(new BigNumber(farm.singleTokenAmount).times(Number(price)))

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
          No Pool Data Found
        </>
      )
    },
    [bnbPrice, ethPriceUsd, rastaPrice, ethereum, account, priceData, farmList, mrastaPrice, cnsPriceVsBnb],
  )

  // const poolsWithApy = pools.map((pool) => {
  //   const rastaFarm = farmList.find((f) => f.pid === 0)
  //   const cakeRewardPerBlock = RASTA_PER_BLOCK.times(rastaFarm.poolWeight)
  //   const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

  //   const apy = cakeRewardPerYear.times(100).div(new BigNumber(rastaFarm.singleTokenAmount))

  //   return {
  //     ...pool,
  //     isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
  //     apy,
  //   }
  // })

  useEffect(() => {
    if (checked) history.push(`${path}`)
    else history.push(`${path}/history`)
  }, [checked, path, history])

  return (
    <div>
      <div
        className="flex w-full flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16 items-center"
        style={{
          backgroundImage: `url(${stackedOnly ? MrsRastaImage : MrRastaImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-4xl font-bold">{stackedOnly ? 'Mrs. Rasta Pools' : 'Mr. Rasta Pools'}</h1>
      </div>
      <div className=" py-8  w-full bg-white text-black">
        <div className=" flex flex-col text-gray-800 items-center w-10/12 mx-auto">
          <h2 className="font-bold text-xl">{TranslateString(696, 'Stake Tokens')}</h2>
          <p className="text-gray-700">{TranslateString(696, 'Earn Brand New Rasta Tokens')}</p>
          <div className="toggle-button items-end flex-col flex w-full">
            <ToggleSwitch id="toggleSwitch" checked={checked} onChange={setChecked} />
          </div>
          <div className="card items-center text-center w-full mt-16">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 space-4">
                <Route exact path={`${path}`}>
                  {stackedOnly ? farmsList(stackedOnlyFarms, false) : farmsList(activeFarms, false)}
                </Route>
                <Route exact path={`${path}/history`}>
                  {farmsList(inactiveFarms, true)}
                </Route>
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
    </div>
  )
}

export default Farms
