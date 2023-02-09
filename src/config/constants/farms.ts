import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 28,
    lpSymbol: 'BNB-RASTA CAKE LP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x950b7377695e81235397da1b608c2087bc7002dc',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: {
      97: '0xeE14CBfAaD3BADa6fc9886bf2BA11D1c5F373DF2',
      56: '0xE3e8cC42DA487d1116D26687856e9FB684817c52',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 0,
    farm: true,
    ribbon: true,
    ribbonText: 'Stake Here',
  },
  {
    pid: 1,
    lpSymbol: 'BNB-RASTA RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0xe84413e4d2ce15dd89141c88e5f8e46eeb0de10c',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: {
      97: '0xeE14CBfAaD3BADa6fc9886bf2BA11D1c5F373DF2',
      56: '0xE3e8cC42DA487d1116D26687856e9FB684817c52',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 0,
    farm: true,
    ribbon: false,
    ribbonText: 'Expiring',
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-RASTA RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x2865ea117ab8c6ccdb2ebf016a931d5d261bfafd',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: contracts.rasta,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFee: 0,
    farm: true,
    ribbon: false,
    ribbonText: 'Expiring',
  },
  {
    pid: 22,
    lpSymbol: 'RASTA-MRASTA RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0xBEa61686D11aed2D078885D77CCaeDA352Bb1fE4',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: contracts.rasta,
    quoteTokenSymbol: QuoteToken.RASTA,
    quoteTokenAdresses: contracts.rasta,
    depositFee: 0,
    farm: true,
  },
  {
    pid: 0,
    lpSymbol: 'RASTA',
    lpAddresses: contracts.rasta,
    tokenSymbol: 'RASTA',
    tokenAddresses: contracts.rasta,
    quoteTokenSymbol: QuoteToken.RASTA,
    quoteTokenAdresses: contracts.rasta,
    depositFee: 0,
    farm: false,
  },
  {
    pid: 23,
    lpSymbol: 'MRASTA',
    lpAddresses: contracts.mrasta,
    tokenSymbol: 'MRASTA',
    tokenAddresses: contracts.mrasta,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 0,
    farm: false,
  },
]

export default farms
