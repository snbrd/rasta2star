import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { slice, concat } from 'lodash'
import { useFarms, usePriceBnbBusd, usePriceEthBusd, usePriceRastaBusd } from 'state/hooks'
import useI18n from 'hooks/useI18n'
import useRefresh from 'hooks/useRefresh'
import { useWeb3React } from '@web3-react/core'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/farms'
import BigNumber from 'bignumber.js'
import { FarmWithStakedValue } from 'views/Pools/components/FarmCard/FarmCard'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { BLOCKS_PER_YEAR, RASTA_PER_BLOCK, RASTA_POOL_PID } from 'config'
import { QuoteToken } from 'config/constants/types'

import * as FaIcons from 'react-icons/fa'
import CardsSection from './components/CardSection'
import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import BinanceLogo from '../../assets/Binance-Icon-Logo.svg'
import MrsRastaImage from '../../assets/lion-mrs-rasta.jpg'
import ToggleSwitch from '../../components/toggle-switch/ToggleSwitch'

interface ParamTypes {
  farm: string
}
export default function Farms2() {
  const { farm } = useParams<ParamTypes>()
  let pages = null
  const farmList = useFarms()
  const TranslateString = useI18n()
  const rastaPrice = usePriceRastaBusd()
  const bnbPrice = usePriceBnbBusd()
  const ethPriceUsd = usePriceEthBusd()
  const { account, ethereum } = useWallet()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stackedOnly, setStackedOnly] = useState(false)

  const farmsLP = farmList.filter((f) => f.lpSymbol.includes('RLP'))
  const activeFarms = farmsLP.filter((f) => f.pid !== 0 && f.multiplier !== '0X')
  const inactiveFarms = farmsLP.filter((f) => f.pid !== 0 && f.multiplier === '0X')
  const stackedOnlyFarms = activeFarms.filter(
    (f) => f.userData && new BigNumber(f.userData.stakedBalance).isGreaterThan(0),
  )
  if (farm === 'mr-rasta')
    pages = {
      name: 'mr-rasta',
      page: {
        header_img: MrRastaImage,
        title: 'Mr. Rasta Farms',
        subtitle: 'Stake Liquidity Pool Tokens',
        desc: 'Earn Brand New Rasta Tokens',
        card: {
          pages: 3,
          content: [
            {
              name: 'M - RASTA 1',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '/',
                unlockWalletLink: '/',
                stake: 'Total Liquidity',
                value: '47,581',
                bscLink: '/',
              },
            },
            {
              name: 'M - RASTA 2',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 3',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 4',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 5',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 6',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
          ],
        },
      },
    }
  else
    pages = {
      name: 'mr-rasta',
      page: {
        header_img: MrsRastaImage,
        title: 'Mrs. Rasta Farms',
        subtitle: 'Stake Liquidity Pool Tokens',
        desc: 'Earn Brand New Rasta Tokens',
        card: {
          pages: 3,
          content: [
            {
              name: 'M - RASTA 1',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '/',
                unlockWalletLink: '/',
                stake: 'Total Liquidity',
                value: '47,581',
                bscLink: '/',
              },
            },
            {
              name: 'M - RASTA 2',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 3',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 4',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 5',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 6',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 6',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 6',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
            {
              name: 'M - RASTA 6',
              detail: {
                core: 'Core',
                multiple: '35x',
                wallet: BinanceLogo,
                apr: '256.08',
                depositFee: '0',
                rastaEarned: '0',
                harvesLink: '',
                unlockWalletLink: '',
                stake: 'Total Liquidity',
                value: '47,581',
              },
            },
          ],
        },
      },
    }

  const farmPage = pages
  const [checked, setChecked] = useState(false)

  const LENGTH = farmPage.page.card.content.length
  const DATA = farmPage.page.card.content
  const LIMIT = 3

  const [showMore, setShowMore] = useState(true)
  const [list, setList] = useState(slice(DATA, 0, LIMIT))
  const [index, setIndex] = useState(LIMIT)
  const loadMore = () => {
    const newIndex = index + LIMIT
    const newShowMore = newIndex < LENGTH - 1
    const newList = concat(list, slice(DATA, index, newIndex))
    setIndex(newIndex)
    setList(newList)
    setShowMore(newShowMore)
  }

  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const cakePriceVsBNB = new BigNumber(farmsLP.find((f) => f.pid === RASTA_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: any[] = farmsToDisplay.map((f) => {
        if (!f.tokenAmount || !f.lpTotalInQuoteToken || !f.lpTotalInQuoteToken) {
          return f
        }
        const cakeRewardPerBlock = RASTA_PER_BLOCK.times(f.poolWeight)
        const cakeRewardPerYear = cakeRewardPerBlock.times(BLOCKS_PER_YEAR)

        // cakePriceInQuote * cakeRewardPerYear / lpTotalInQuoteToken
        let apy = cakePriceVsBNB.times(cakeRewardPerYear).div(f.lpTotalInQuoteToken)

        if (f.quoteTokenSymbol === QuoteToken.BUSD || f.quoteTokenSymbol === QuoteToken.UST) {
          apy = cakePriceVsBNB.times(cakeRewardPerYear).div(f.lpTotalInQuoteToken).times(bnbPrice)
        } else if (f.quoteTokenSymbol === QuoteToken.ETH) {
          apy = rastaPrice.div(ethPriceUsd).times(cakeRewardPerYear).div(f.lpTotalInQuoteToken)
        } else if (f.quoteTokenSymbol === QuoteToken.RASTA) {
          apy = cakeRewardPerYear.div(f.lpTotalInQuoteToken)
        } else if (f.dual) {
          const cakeApy =
            farm && cakePriceVsBNB.times(cakeRewardPerBlock).times(BLOCKS_PER_YEAR).div(f.lpTotalInQuoteToken)
          const dualApy =
            f.tokenPriceVsQuote &&
            new BigNumber(f.tokenPriceVsQuote)
              .times(f.dual.rewardPerBlock)
              .times(BLOCKS_PER_YEAR)
              .div(f.lpTotalInQuoteToken)

          apy = cakeApy && dualApy && cakeApy.plus(dualApy)
        }

        return { ...f, apy }
      })
      return <CardsSection itemsToRender={farmsToDisplayWithAPY} />
    },
    [farmsLP, bnbPrice, ethPriceUsd, rastaPrice, farm],
  )

  return (
    <div className="">
      <div
        className="flex w-full text-black flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16 items-center"
        style={{
          backgroundImage: `url(${farmPage.page.header_img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-4xl font-bold">{farmPage.page.title}</h1>
      </div>
      <div className=" py-8  w-full bg-white text-black">
        <div className=" flex flex-col text-gray-800 items-center w-10/12 mx-auto">
          <h2 className="font-bold text-xl">{farmPage.page.subtitle}</h2>
          <p className="text-gray-700">{farmPage.page.desc}</p>
          <div className="toggle-button items-end flex-col flex w-full">
            <ToggleSwitch id="toggleSwitch" checked={checked} onChange={setChecked} />
          </div>
          <div className="card items-center text-center w-full mt-16">
            {checked && <CardsSection itemsToRender={list} />}
            {showMore && checked && (
              <button
                type="button"
                onClick={loadMore}
                className="flex items-center justify-center mx-auto mt-8 text-md space-x-4 hover:text-red-rasta"
              >
                <FaIcons.FaChevronCircleDown />
                <span>Load More</span>{' '}
              </button>
            )}
            {!checked && 'No Farm Data Found'}
          </div>
        </div>
      </div>
    </div>
  )
}
