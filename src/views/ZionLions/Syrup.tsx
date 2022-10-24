import React, { useEffect, useState } from 'react'
import useI18n from 'hooks/useI18n'
import { SEC_PER_YEAR } from 'config'
import { useZionLionsNFT, usePriceBnbBusd, usePriceRastaBusd } from 'state/hooks'
import BigNumber from 'bignumber.js'
import nftPools from 'config/constants/nftPools'
import zionLionsABI from 'config/abi/zionlionsPool.json'
import ToggleSwitch from 'components/toggle-switch/ToggleSwitch'

import { getWeb3 } from 'utils/web3'
import { AbiItem } from 'web3-utils'
// import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import PoolCard from './components/PoolCard'
import MrRastaImage from '../../assets/headerImageZionLabs11.jpg'

const web3 = getWeb3()
const ZionLionsContract = new web3.eth.Contract(
  zionLionsABI as unknown as AbiItem,
  '0xF5475159CeE27693ad975286Ab51848afA332E27',
)

const Farm: React.FC = () => {
  const TranslateString = useI18n()
  const [Active, setActive] = useState(true)
  const [rate, setRate] = useState(0)
  const farmInfo = useZionLionsNFT()
  const bnbPriceUSD = usePriceBnbBusd()
  const rastaPriceUSD = usePriceRastaBusd()

  useEffect(() => {
    (async () => {
      const _rate = await ZionLionsContract.methods.rewardRate().call()
      setRate(_rate)
    })()
  }, [])

  const poolsWithApy = nftPools.map((farm, index) => {
    if (farm.type === 'zlnft') {
      // Promise.resolve(rewardRate).then((result) => {
      return {
        [farm.id]: new BigNumber(rastaPriceUSD)
          .div(bnbPriceUSD)
          .times(rate)
          .times(SEC_PER_YEAR)
          .div(
            Number(farmInfo[index].farmbalance) > 0
              ? new BigNumber(farmInfo[index].farmbalance).times(new BigNumber(0.18).times(new BigNumber(10).pow(18)))
              : new BigNumber(10).pow(18),
          )
          .times(100)
          .toFixed(0)
          .toString(),
      }
      // })
    }
    return {
      [farm.id]: new BigNumber(farm.rewardRate)
        .times(SEC_PER_YEAR)
        .div(
          Number(farmInfo[index].farmbalance) > 0
            ? new BigNumber(farmInfo[index].farmbalance).times(new BigNumber(0.1).times(new BigNumber(10).pow(18)))
            : new BigNumber(10).pow(18),
        )
        .times(100)
        .toFixed(0)
        .toString(),
    }
  })

  return (
    <div>
      <div
        className="flex w-full flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16 items-center"
        style={{
          backgroundImage: `url(${MrRastaImage})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-4xl font-bold text-center">{TranslateString(696, 'Stake ZionLions NFT')}</h1>
      </div>
      <div className=" py-8  w-full bg-white text-black">
        <div className=" flex flex-col text-gray-800 items-center w-10/12 mx-auto">
          <h2 className="font-bold text-xl">{TranslateString(696, 'Stake Purchased ZionLions')}</h2>
          <p className="text-gray-700">{TranslateString(696, 'Earn Brand New Rasta Tokens')}</p>
          <div className="toggle-button items-end flex-col flex w-full">
            <ToggleSwitch id="toggleSwitch" checked={Active} onChange={setActive} />
          </div>
          <div className="card items-center text-center w-full mt-16 mb-16">
            <div>
              <div className="cus-grid-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 space-8">
                {nftPools.map((farm, index) => {
                  if (farm.type !== 'zlnft') return null
                  if (Active)
                    return (
                      <PoolCard key={index} pool={{ ...farmInfo[index], ...farm }} apy={poolsWithApy[index][farm.id]} />
                    )
                  if (farm.isFinished)
                    return (
                      <PoolCard key={index} pool={{ ...farmInfo[index], ...farm }} apy={poolsWithApy[index][farm.id]} />
                    )
                  return null
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Farm
