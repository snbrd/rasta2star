import { AirData } from 'state/types';
import { getCakeAddress } from 'utils/addressHelpers'
import { QuoteToken, PoolCategory } from './types'

const pools = [
  {
    sousId: 0,
    tokenName: 'RastaDividend AirNFT',
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

export const initAirData: AirData = {
  approved: false,
  balance: 0,
  depositedAmount: "0",
  pendingReword: "0",
  paused: false,
  totalSupply: '0',
  rewardRate: '0',
  totalNFT: '0'
}

export const RastaNftIds = [222912, 222905, 221411, 221414, 222910, 222906, 222914, 222908, 222915, 222918, 222916, 222907, 221401, 221406, 221418, 221417, 221404, 221407, 221413, 221402, 221371, 221369, 221366, 221373, 221375, 221374, 221382, 221385, 221370, 221378];

export default pools
