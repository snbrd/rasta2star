import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { slice, concat } from 'lodash'
import useRefresh from 'hooks/useRefresh'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import * as FaIcons from 'react-icons/fa'
import AnimatedPage from 'components/AnimatedPage'
import CardsSection from './components/CardSection'
// import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import MrRastaImage from '../../assets/headerImageZionLabs11.jpg'
import BinanceLogo from '../../assets/Binance-Icon-Logo.svg'
import MrsRastaImage from '../../assets/lion-mrs-rasta.jpg'
import ToggleSwitch from '../../components/toggle-switch/ToggleSwitch'

interface ParamTypes {
  farm: string
}
export default function Farms2() {
  const { farm } = useParams<ParamTypes>()
  let pages = null
  const { account } = useWallet()

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

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

  return (
    <AnimatedPage>
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
    </AnimatedPage>
  )
}
