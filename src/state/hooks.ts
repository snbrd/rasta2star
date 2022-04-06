import { useEffect, useMemo, useState } from 'react'
import BigNumber from 'bignumber.js'
import { kebabCase } from 'lodash'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { Toast, toastTypes } from 'rasta-uikit'
import { useSelector, useDispatch } from 'react-redux'
import { Team } from 'config/constants/types'
import useRefresh from 'hooks/useRefresh'
import { useGetPriceData } from 'hooks/api'
import useMRastaPrice from 'hooks/useMRastaPrice'
import {
  fetchFarmsPublicDataAsync,
  fetchPoolsPublicDataAsync,
  fetchPoolsUserDataAsync,
  push as pushToast,
  remove as removeToast,
  clear as clearToast,
} from './actions'
import { State, Farm, Pool, ProfileState, TeamsState, AchievementState } from './types'
import { fetchProfile } from './profile'
import { fetchTeam, fetchTeams } from './teams'
import { fetchAchievements } from './achievements'
import { QuoteToken } from '../config/constants/types'
import { fetchNFTPoolsAUserDataAsync } from './pools'

const ZERO = new BigNumber(0)

export const useFetchPublicData = () => {
  const dispatch = useDispatch()
  const { slowRefresh } = useRefresh()
  useEffect(() => {
    dispatch(fetchFarmsPublicDataAsync())
    dispatch(fetchPoolsPublicDataAsync())
  }, [dispatch, slowRefresh])
}

// Farms

export const useFarms = (): Farm[] => {
  const farms = useSelector((state: State) => state.farms.data)
  return farms
}

export const useFarmFromPid = (pid): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.pid === pid))
  return farm
}

export const useFarmFromSymbol = (lpSymbol: string): Farm => {
  const farm = useSelector((state: State) => state.farms.data.find((f) => f.lpSymbol === lpSymbol))
  return farm
}

export const useFarmUser = (pid) => {
  const farm = useFarmFromPid(pid)

  return {
    allowance: farm.userData ? new BigNumber(farm.userData.allowance) : new BigNumber(0),
    tokenBalance: farm.userData ? new BigNumber(farm.userData.tokenBalance) : new BigNumber(0),
    stakedBalance: farm.userData ? new BigNumber(farm.userData.stakedBalance) : new BigNumber(0),
    earnings: farm.userData ? new BigNumber(farm.userData.earnings) : new BigNumber(0),
  }
}

// Pools

export const usePools = (account): Pool[] => {
  const { fastRefresh } = useRefresh()
  const dispatch = useDispatch()
  useEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const pools = useSelector((state: State) => state.pools.data)
  return pools
}

export const useAirNFT = () => {
  const { fastRefresh } = useRefresh()
  const { account } = useWallet()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchNFTPoolsAUserDataAsync(account))
  }, [account, dispatch, fastRefresh])

  const airFarm = useSelector((state: State) => state.pools.airdata)
  return airFarm
}

export const usePoolFromPid = (sousId): Pool => {
  const pool = useSelector((state: State) => state.pools.data.find((p) => p.sousId === sousId))
  return pool
}

// Prices

export const usePriceBnbBusd = (): BigNumber => {
  const pid = 4 // BUSD-BNB LP
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? new BigNumber(1).div(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceRastaBusd = (): BigNumber => {
  const [rastaPrice, setPrice] = useState(ZERO)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.pancakeswap.info/api/v2/tokens/0xe3e8cc42da487d1116d26687856e9fb684817c52`,
        )
        const { data } = await response.json()
        return setPrice(new BigNumber(data.price))
      } catch (error) {
        return setPrice(ZERO)
      }
    })()
  }, [])

  return rastaPrice
}

export const usePriceLatteBnb = (): BigNumber => {
  const [lattePrice, setPrice] = useState(ZERO)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=latteswap&vs_currencies=BNB`,
        )
        const { latteswap } = await response.json()
        return setPrice(new BigNumber(latteswap.bnb))
      } catch (error) {
        return setPrice(ZERO)
      }
    })()
  }, [])

  return lattePrice
}

export const usePriceCNRBusd = (): BigNumber => {
  const [cnrPrice, setPrice] = useState(ZERO)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://api.pancakeswap.info/api/v2/tokens/0xdCbA3fbd7BBc28abD18A472D28358089467A8a74`,
        )
        const { data } = await response.json()
        return setPrice(new BigNumber(data.price))
      } catch (error) {
        return setPrice(ZERO)
      }
    })()
  }, [])

  return cnrPrice
}

export const usePriceEthBusd = (): BigNumber => {
  const pid = 7 // ETH-BNB LP
  const bnbPriceUSD = usePriceBnbBusd()
  const farm = useFarmFromPid(pid)
  return farm.tokenPriceVsQuote ? bnbPriceUSD.times(farm.tokenPriceVsQuote) : ZERO
}

export const usePriceEthBnb = (): BigNumber => {
  const priceBnbBusd = usePriceBnbBusd()
  const priceEthBusd = usePriceEthBusd()
  return priceEthBusd.div(priceBnbBusd)
}

// Toasts
export const useToast = () => {
  const dispatch = useDispatch()
  const helpers = useMemo(() => {
    const push = (toast: Toast) => dispatch(pushToast(toast))

    return {
      toastError: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.DANGER, title, description })
      },
      toastInfo: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.INFO, title, description })
      },
      toastSuccess: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.SUCCESS, title, description })
      },
      toastWarning: (title: string, description?: string) => {
        return push({ id: kebabCase(title), type: toastTypes.WARNING, title, description })
      },
      push,
      remove: (id: string) => dispatch(removeToast(id)),
      clear: () => dispatch(clearToast()),
    }
  }, [dispatch])

  return helpers
}

// Profile

export const useFetchProfile = () => {
  const { account } = useWallet()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProfile(account))
  }, [account, dispatch])
}

export const useProfile = () => {
  const { isInitialized, isLoading, data, hasRegistered }: ProfileState = useSelector((state: State) => state.profile)
  return { profile: data, hasProfile: isInitialized && hasRegistered, isInitialized, isLoading }
}

// Teams

export const useTeam = (id: number) => {
  const team: Team = useSelector((state: State) => state.teams.data[id])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTeam(id))
  }, [id, dispatch])

  return team
}

export const useTeams = () => {
  const { isInitialized, isLoading, data }: TeamsState = useSelector((state: State) => state.teams)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTeams())
  }, [dispatch])

  return { teams: data, isInitialized, isLoading }
}

// Achievements

export const useFetchAchievements = () => {
  const { account } = useWallet()
  const dispatch = useDispatch()

  useEffect(() => {
    if (account) {
      dispatch(fetchAchievements(account))
    }
  }, [account, dispatch])
}

export const useAchievements = () => {
  const achievements: AchievementState['data'] = useSelector((state: State) => state.achievements.data)
  return achievements
}

export const useTotalValue = (): BigNumber => {
  const farms = useFarms()
  const bnbPrice = usePriceBnbBusd()
  const rastaPrice = usePriceRastaBusd()
  const cnrPrice = usePriceCNRBusd()
  const mrastaPrice = useMRastaPrice()
  const ethPrice = usePriceEthBusd()
  const priceData = useGetPriceData()
  let value = new BigNumber(0)
  const farmsLP = farms.filter((farm) => farm.lpSymbol.includes('RLP') || farm.lpSymbol.includes('LP'))
  for (let i = 0; i < farmsLP.length; i++) {
    const farm = farmsLP[i]
    if (farm.lpTotalInQuoteToken) {
      let val
      if (farm.quoteTokenSymbol === QuoteToken.BNB) {
        val = bnbPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.RASTA) {
        val = rastaPrice.times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.MRASTA) {
        val = new BigNumber(mrastaPrice).times(farm.lpTotalInQuoteToken)
      } else if (farm.quoteTokenSymbol === QuoteToken.ETH) {
        val = ethPrice.times(farm.lpTotalInQuoteToken)
      } else {
        val = farm.lpTotalInQuoteToken
      }
      value = value.plus(val)
    }
  }
  value = value.times(new BigNumber(2))
  const farmsNonLP = farms.filter((farm) => !farm.lpSymbol.includes('RLP') && !farm.lpSymbol.includes('LP'))
  for (let i = 0; i < farmsNonLP.length; i++) {
    const farm = farmsNonLP[i]
    if (!farm.singleTokenAmount || !priceData) {
      break
    }

    let price
    if (farm.pid === 0) {
      price = rastaPrice.toNumber()
    } else if (farm.pid === 23) {
      price = mrastaPrice
    } else if (farm.pid === 27) {
      price = cnrPrice
    } else {
      price = farm.tokenSymbol === 'CAKE' ? priceData.prices.Cake : priceData.prices[farm.tokenSymbol]
    }
    value = value.plus(new BigNumber(farm.singleTokenAmount).times(Number(price)))
  }

  return value
}
