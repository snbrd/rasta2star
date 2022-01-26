import React, { useState, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { BLOCKS_PER_YEAR } from 'config'
import orderBy from 'lodash/orderBy'
import partition from 'lodash/partition'
import useI18n from 'hooks/useI18n'
import useBlock from 'hooks/useBlock'
import { getBalanceNumber } from 'utils/formatBalance'
import { useFarms, usePriceBnbBusd, usePools } from 'state/hooks'
import { useGetDFLPriceVsBnb } from 'hooks/api'
import { QuoteToken, PoolCategory } from 'config/constants/types'
// import Coming from './components/Coming'
import ToggleSwitch from 'components/toggle-switch/ToggleSwitch'
import PoolCard from './components/PoolCard'

import MrRastaImage from '../../assets/lion-mr-rasta.jpg'
import MrsRastaImage from '../../assets/lion-mrs-rasta.jpg'

const Farm: React.FC = () => {
  const TranslateString = useI18n()
  const { account } = useWallet()
  const farms = useFarms()
  const pools = usePools(account)
  const block = useBlock()
  const stackedOnly = false;
  const [Active, setActive] = useState(true)
  const bnbPriceUSD = usePriceBnbBusd()
  const bnbPriceDFL = useGetDFLPriceVsBnb()

  const ethPriceBnb = useMemo(() => {
    return new BigNumber(0)
  }, [])

  const priceToBnb = (tokenName: string, tokenPrice: BigNumber, quoteToken: QuoteToken): BigNumber => {
    const tokenPriceBN = new BigNumber(tokenPrice)
    if (tokenName === 'BNB') {
      return new BigNumber(1)
    }
    if (tokenPrice && quoteToken === QuoteToken.BUSD) {
      return tokenPriceBN.div(bnbPriceUSD)
    }
    return tokenPriceBN
  }

  const poolsWithApy = pools.map((pool) => {
    const isBnbPool = pool.poolCategory === PoolCategory.BINANCE
    let rewardTokenFarm = null
    if (pool.tokenName !== 'DFL') {
      rewardTokenFarm = farms.find((f) => f.tokenSymbol === pool.tokenName)
    }
    const stakingTokenFarm = farms.find((s) => s.tokenSymbol === pool.stakingTokenName)

    // tmp mulitplier to support ETH farms
    // Will be removed after the price api
    const tempMultiplier = stakingTokenFarm?.quoteTokenSymbol === 'ETH' ? ethPriceBnb : 1

    // /!\ Assume that the farm quote price is BNB
    const stakingTokenPriceInBNB = isBnbPool
      ? new BigNumber(1)
      : new BigNumber(stakingTokenFarm?.tokenPriceVsQuote).times(tempMultiplier)
    let rewardTokenPriceInBNB = new BigNumber(0)
    if (rewardTokenFarm) {
      rewardTokenPriceInBNB = priceToBnb(
        pool.tokenName,
        rewardTokenFarm?.tokenPriceVsQuote,
        rewardTokenFarm?.quoteTokenSymbol,
      )
    } else if (pool.tokenName === 'DFL') {
      rewardTokenPriceInBNB = new BigNumber(bnbPriceDFL)
    }

    if (stakingTokenFarm.tokenSymbol === 'RASTA' && rewardTokenFarm && rewardTokenFarm.quoteTokenSymbol === 'RASTA') {
      rewardTokenPriceInBNB = new BigNumber(rewardTokenPriceInBNB).times(stakingTokenPriceInBNB)
    }

    const totalRewardPricePerYear = rewardTokenPriceInBNB.times(pool.tokenPerBlock).times(BLOCKS_PER_YEAR)
    const totalStakingTokenInPool = stakingTokenPriceInBNB.times(getBalanceNumber(pool.totalStaked))
    const apy = totalRewardPricePerYear.div(totalStakingTokenInPool).times(100)

    return {
      ...pool,
      multiplier: stakingTokenFarm.multiplier,
      isFinished: pool.sousId === 0 ? false : pool.isFinished || block > pool.endBlock,
      apy,
    }
  })

  const [finishedPools, openPools] = partition(poolsWithApy, (pool) => pool.isFinished)

  const stackedOnlyPools = openPools.filter(
    (pool) => pool.userData && new BigNumber(pool.userData.stakedBalance).isGreaterThan(0),
  )

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
        <h1 className="text-4xl font-bold">{stackedOnly ? 'STAKE RASTA' : 'STAKE RASTA'}</h1>
      </div>
      <div className=" py-8  w-full bg-white text-black">
        <div className=" flex flex-col text-gray-800 items-center w-10/12 mx-auto">
          <h2 className="font-bold text-xl">{TranslateString(696, 'Stake Liquidity Pool Tokens')}</h2>
          <p className="text-gray-700">{TranslateString(696, 'Earn Brand New Rasta Tokens')}</p>
          <div className="toggle-button items-end flex-col flex w-full">
            <ToggleSwitch id="toggleSwitch" checked={Active} onChange={setActive} />
            {/* <PoolTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} /> */}
          </div>
          <div className="card items-center text-center w-full mt-16">
            <div>
              <div className="cus-grid-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 space-8">
                {/* <Route exact path={`${path}`}>
                    {stackedOnly ? farmsList(stackedOnlyFarms, false) : farmsList(activeFarms, false)}
                  </Route>
                  <Route exact path={`${path}`}>
                    {farmsList(inactiveFarms, true)}
                  </Route> */}
                {/* <Route exact path={`${path}`}> */}
                {
                  Active ?
                    <>
                      {stackedOnly
                        ? orderBy(stackedOnlyPools, ['sortOrder']).map((pool) => (
                          <PoolCard key={pool.sousId} pool={pool} />
                        ))
                        : orderBy(openPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)}
                    </>
                    :
                    <>
                      {orderBy(finishedPools, ['sortOrder']).map((pool) => (
                        <PoolCard key={pool.sousId} type={false} pool={pool} />
                      ))}
                    </>
                }
                {/* </Route> */}
                {/* <Route path={`${path}/history`}>
              </Route> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
    // <Page>
    //   <Hero>
    //     <div>
    //       <Heading color="#000000" as="h1" size="xxl" mb="16px">
    //         {TranslateString(738, 'Stake Rasta')}
    //       </Heading>
    //       <ul>
    //         <li>{TranslateString(580, 'Stake RASTA to earn new tokens.')}</li>
    //         <li>{TranslateString(486, 'You can unstake at any time.')}</li>
    //         <li>{TranslateString(406, 'Rewards are calculated per block.')}</li>
    //       </ul>
    //     </div>
    //     <img src="/images/syrup.png" alt="RASTA POOL icon" width={250} height={191} />
    //   </Hero>
    //   <PoolTabButtons stackedOnly={stackedOnly} setStackedOnly={setStackedOnly} />
    //   <Divider />
    //   <FlexLayout>
    //     <Route exact path={`${path}`}>
    //       <>
    //         {stackedOnly
    //           ? orderBy(stackedOnlyPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)
    //           : orderBy(openPools, ['sortOrder']).map((pool) => <PoolCard key={pool.sousId} pool={pool} />)}
    //       </>
    //     </Route>
    //     <Route path={`${path}/history`}>
    //       {orderBy(finishedPools, ['sortOrder']).map((pool) => (
    //         <PoolCard key={pool.sousId} pool={pool} />
    //       ))}
    //     </Route>
    //   </FlexLayout>
    // </Page>
  )
}


export default Farm
