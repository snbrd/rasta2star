import React, { useState, useEffect } from 'react'
import useI18n from 'hooks/useI18n'
import { useAirNFT } from 'state/hooks'
import { useSelector } from 'react-redux'
import { State } from 'state/types'
// import Coming from './components/Coming'
import ToggleSwitch from 'components/toggle-switch/ToggleSwitch'
import PoolCard from './components/PoolCard'

import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import MrsRastaImage from '../../assets/lion-mrs-rasta.jpg'

const Farm: React.FC = () => {
  const TranslateString = useI18n()
  const stackedOnly = false;
  const [Active, setActive] = useState(true)
  const { onFetch } = useAirNFT();
  const farmInfo = useSelector((state: State) => state.pools.airdata);
  console.log('-----------------')
  console.log(farmInfo)

  useEffect(() => {
    onFetch()
  }, [onFetch])

  // const poolsWithApy = pools.map((pool) => {
  //   const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
  //   let rewardTokenFarm = null
  //   if (pool.tokenName !== 'DFL') {
  //     rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
  //   }
  //   const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)

  //   // tmp mulitplier to support ETH farms
  //   // Will be removed after the price api
  //   const tempMultiplier = stakingTokenFarm?.quoteTokenSymbol === 'ETH' ? ethPriceBnb : 1

  //   // /!\ Assume that the farm quote price is BNB
  //   const stakingTokenPriceInBNB = isBnbPool
  //     ? new BigNumber(1)
  //     : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote).times(tempMultiplier)
  //   let rewardTokenPriceInBNB = new BigNumber(0)
  //   if (rewardTokenFarm) {
  //     rewardTokenPriceInBNB = priceToBnb(
  //       pool.tokenName,
  //       rewardTokenFarm?.tokenPriceVsQuote,
  //       rewardTokenFarm?.quoteTokenSymbol,
  //     )
  //   } else if (pool.tokenName === 'DFL') {
  //     rewardTokenPriceInBNB = new BigNumber(bnbPriceDFL)
  //   }

  //   if (stakingTokenFarm.tokenSymbol === 'RASTA' && rewardTokenFarm && rewardTokenFarm.quoteTokenSymbol === 'RASTA') {
  //     rewardTokenPriceInBNB = new BigNumber(rewardTokenPriceInBNB).times(stakingTokenPriceInBNB)
  //   }

  //   const totalRewardPricePerYear = rewardTokenPriceInBNB.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
  //   const totalStakingTokenInPool = stakingTokenPriceInBNB.times(getBalanceNumber(pool.totalStaked))
  //   const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

  //   return {
  //     ...pool,
  //     isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
  //     apy,
  //   }
  // })

  // const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)

  // const stackedOnlyPools = openPools.filter(
  //   (pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0),
  // )

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
        <h1 className="text-4xl font-bold">{stackedOnly ? 'STAKE AIRNFT' : 'STAKE AIRNFT'}</h1>
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
                  <PoolCard key={3} />
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
