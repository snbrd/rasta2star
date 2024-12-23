import BigNumber from 'bignumber.js/bignumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const RASTA_PER_BLOCK = new BigNumber(0.2)
export const BLOCKS_PER_YEAR = new BigNumber(10512000)
export const SEC_PER_YEAR = new BigNumber(31536000)
export const BSC_BLOCK_TIME = 3
export const RASTA_POOL_PID = 1
export const BASE_EXCHANGE_URL = 'https://swap.rasta.finance'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 1
