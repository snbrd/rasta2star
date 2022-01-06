import { getCakeAddress } from 'utils/addressHelpers'
import { QuoteToken, PoolCategory } from './types'

const pools = [
  {
    sousId: 0,
    tokenName: 'AirNFT',
    stakingTokenName: QuoteToken.RASTA,
    stakingTokenAddress: getCakeAddress(),
    contractAddress: {
      97: '0x35b1EF3FF9763F72C11e9f08B471D0b6b5A7515D',
      56: '0xec89Be665c851FfBAe2a8Ded03080F3E64116539',
    },
    airTokenContract: '0x50751588924b480f9e9d4A1541CCa83f75aC0ECC',
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://rasta.finance/',
    harvest: true,
    tokenPerBlock: '0.0338409478',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }
]

export default pools
