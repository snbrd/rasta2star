import { usePriceRastaBusd } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalRasta = getBalanceNumber(totalRewards)
  const rastaPriceBusd = usePriceRastaBusd()

  return totalRasta * rastaPriceBusd.toNumber()
}

export default useLotteryTotalPrizesUsd
