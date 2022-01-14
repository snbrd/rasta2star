import React, { useState } from 'react'
import useI18n from 'hooks/useI18n'
import { SEC_PER_YEAR } from 'config'
import { useAirNFT, usePriceBnbBusd, usePriceRastaBusd } from 'state/hooks'
import BigNumber from 'bignumber.js'
import ToggleSwitch from 'components/toggle-switch/ToggleSwitch'
import PoolCard from './components/PoolCard'

import MrRastaImage from '../../assets/lion-mr-rasta.jpg'

const Farm: React.FC = () => {
  const TranslateString = useI18n()
  const [Active, setActive] = useState(true)
  const farmInfo = useAirNFT();
  const bnbPriceUSD = usePriceBnbBusd()
  const rastaPriceUSD = usePriceRastaBusd()

  const poolsWithApy =
    new BigNumber(rastaPriceUSD)
      .div(bnbPriceUSD)
      .times(farmInfo.rewardRate)
      .times(SEC_PER_YEAR)
      .div(Number(farmInfo.totalSupply) > 0 ? farmInfo.totalSupply : new BigNumber(10).pow(18))
      .times(100)
      .toFixed(0)
      .toString();

  return (
    <div>
      <div
        className="flex w-full flex-col bg-blend-overlay bg-black bg-opacity-50 text-white py-16 items-center"
        style={{
          backgroundImage: `url(${MrRastaImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <h1 className="text-4xl font-bold text-center">{TranslateString(696, 'Stake RastaDividend NFT')}</h1>
      </div>
      <div className=" py-8  w-full bg-white text-black">
        <div className=" flex flex-col text-gray-800 items-center w-10/12 mx-auto">
          <h2 className="font-bold text-xl">{TranslateString(696, 'Stake Purchased AirNFTs')}</h2>
          <p className="text-gray-700">{TranslateString(696, 'Earn Brand New Rasta Tokens')}</p>
          <div className="toggle-button items-end flex-col flex w-full">
            <ToggleSwitch id="toggleSwitch" checked={Active} onChange={setActive} />
          </div>
          <div className="card items-center text-center w-full mt-16">
            <div>
              <div className="cus-grid-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 space-8">
                {
                  Active &&
                  <PoolCard pool={farmInfo} apy={poolsWithApy} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Farm