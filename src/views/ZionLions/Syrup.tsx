import React, { useState } from 'react'
import useI18n from 'hooks/useI18n'
import { useZionLionsNFT, usePriceBnbBusd, usePriceRastaBusd } from 'state/hooks'
import nftPools from 'config/constants/nftPools'

import ToggleSwitch from 'components/toggle-switch/ToggleSwitch'


// import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import AnimatedPage from 'components/AnimatedPage'
import PoolCard from './components/PoolCard'
import MrRastaImage from '../../assets/new-banner-image.jpg'
import ExplorerPoolCard from './ExplorerComponents/ExplorerPoolCard'


const Farm: React.FC = () => {
  const TranslateString = useI18n()
  const [Active, setActive] = useState(true)
  const farmInfo = useZionLionsNFT()
  const bnbPriceUSD = usePriceBnbBusd()
  const rastaPriceUSD = usePriceRastaBusd()

  return (
    <AnimatedPage>
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
        <div className="pt-8 py-0 md:pt-8 md:py-8 w-full bg-gradient-to-br from-red-rasta to-blue-zion text-black">
          <div className=" flex flex-col text-white items-center w-10/12 mx-auto">
            <h2 className="font-bold text-xl">{TranslateString(696, 'Stake Purchased ZionLions')}</h2>
            <p className="text-white">{TranslateString(696, 'Earn Brand New Rasta Tokens')}</p>
            <div className="toggle-button items-end flex-col flex w-full">
              <ToggleSwitch id="toggleSwitch" checked={Active} onChange={setActive} />
            </div>
            <div className="card items-center text-center w-full mt-3 md:mt-16 mb-12">
              <div>
                <div className="cus-grid-3 flex flex-col md:grid gap-0 space-y-8 xl:space-y-0 xl:gap-8 grid-cols-1 mt-8 md:mt-0 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
                  {nftPools.map((farm, index) => {
                    if (farm.type !== 'zlnft') return null
                    if (Active) {
                      if (!farm.isFinished) {
                        if (farm.id === 5) {
                          return (
                            <ExplorerPoolCard key={index} pool={{ ...farmInfo[index], ...farm, rastaPriceUSD }} />
                          )
                        }
                        return (
                          <PoolCard key={index} pool={{ ...farmInfo[index], ...farm, bnbPriceUSD, rastaPriceUSD }} />
                        )
                      }
                      return null;
                    }
                    if (farm.isFinished) {
                      if (farm.id === 4 || farm.id === 5) {
                        return (
                          <ExplorerPoolCard key={index} pool={{ ...farmInfo[index], ...farm, rastaPriceUSD }} />
                        )
                      }
                      return (
                        <PoolCard key={index} pool={{ ...farmInfo[index], ...farm, bnbPriceUSD, rastaPriceUSD }} />
                      )
                    }
                    return null
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Farm
