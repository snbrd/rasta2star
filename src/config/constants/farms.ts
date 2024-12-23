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
    ribbonText: "Stake Here"
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
    ribbonText: "Expiring"
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
    ribbonText: "Expiring"
  },
  {
    pid: 26,
    lpSymbol: 'RASTA-CROX RLP',
    lpAddresses: {
      97: '',
      56: '0x2Db7b274cddC1A81Cb4eCFBCAd99D6bb359d7aC8',
    },
    tokenSymbol: 'CROX',
    tokenAddresses: contracts.crox,
    quoteTokenSymbol: QuoteToken.RASTA,
    quoteTokenAdresses: contracts.rasta,
    depositFee: 0,
    farm: true
  },
  {
    pid: 25,
    lpSymbol: 'RASTA-CNS RLP',
    lpAddresses: {
      97: '',
      56: '0x21edd9bccaee664bb4df9ad10d43212acf9924d3',
    },
    tokenSymbol: 'CNS',
    tokenAddresses: contracts.cns,
    quoteTokenSymbol: QuoteToken.RASTA,
    quoteTokenAdresses: contracts.rasta,
    depositFee: 0,
    farm: true
  },
  {
    pid: 3,
    lpSymbol: 'ETH-RASTA RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x3f5C3F8F19F072b678Ad6C6910d824D384b634BC',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: contracts.rasta,
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
    depositFee: 0,
    farm: true
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
    farm: true
  },
  {
    pid: 19,
    lpSymbol: 'USDT-RASTA RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x5899980BD54F8b2366a24f279E572Ab99f0cb460',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: contracts.usdt,
    quoteTokenSymbol: QuoteToken.RASTA,
    quoteTokenAdresses: contracts.rasta,
    depositFee: 0,
    farm: true
  },
  {
    pid: 20,
    lpSymbol: 'CAKE-RASTA RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x21a3e3C607FfB9E2881e84A70a4f02faBAFAf6fc',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: contracts.cake,
    quoteTokenSymbol: QuoteToken.RASTA,
    quoteTokenAdresses: contracts.rasta,
    depositFee: 0,
    farm: true
  },
  {
    pid: 21,
    lpSymbol: 'DOT-RASTA RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x9E708Fa6EC4e3C15Fc1aa72d0600791Caa8fb8C4',
    },
    tokenSymbol: 'RASTA',
    tokenAddresses: contracts.dot,
    quoteTokenSymbol: QuoteToken.RASTA,
    quoteTokenAdresses: contracts.rasta,
    depositFee: 0,
    farm: true
  },
  {
    pid: 4,
    lpSymbol: 'BNB-BUSD RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x28cD92ED2bf6A5B665DFFB66c70572Ea58Ff8846',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: contracts.busd,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: true
  },
  {
    pid: 5,
    lpSymbol: 'USDT-BUSD RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0x82eD5822C551C6d001Ed0077F5156F570544478a',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: contracts.busd,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFee: 4,
    farm: true
  },
  {
    pid: 6,
    lpSymbol: 'BTCB-BNB RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0xA099fc1Ad5D8C19A227016bA6Bb30bD3e6409CBc',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: contracts.btcb,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: true
  },
  {
    pid: 7,
    lpSymbol: 'ETH-BNB RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0xa8591F567B58BD87DD3E2A7632129423DBF7D5F6',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: contracts.eth,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: true
  },
  {
    pid: 8,
    lpSymbol: 'DAI-BUSD RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0xCB534acF73010bFF1507ad419d4B56b630EE12E7',
    },
    tokenSymbol: 'DAI',
    tokenAddresses: contracts.dai,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFee: 4,
    farm: true
  },
  {
    pid: 9,
    lpSymbol: 'CAKE-BUSD RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0xAa91f33fE0ef6694d363D8f52C010ea3709d17c9',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: contracts.cake,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFee: 4,
    farm: true
  },
  {
    pid: 10,
    lpSymbol: 'CAKE-BNB RLP',
    lpAddresses: {
      97: '0x57E1bf28D3438002Dc64cc6a98Be2fC5A1302fCD',
      56: '0xE10f4fe1Adb779154D42E0fa7b07909A81913bA2',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: contracts.cake,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: true
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
    farm: false
  },
  {
    pid: 27,
    lpSymbol: 'CNR',
    lpAddresses: contracts.cnr,
    tokenSymbol: 'CNR',
    tokenAddresses: contracts.cnr,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: false
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
    farm: false
  },
  {
    pid: 11,
    lpSymbol: 'BUSD',
    lpAddresses: contracts.busd,
    tokenSymbol: 'BUSD',
    tokenAddresses: contracts.busd,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFee: 4,
    farm: false
  },
  {
    pid: 12,
    lpSymbol: 'WBNB',
    lpAddresses: contracts.wbnb,
    tokenSymbol: 'WBNB',
    tokenAddresses: contracts.wbnb,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: false
  },
  {
    pid: 13,
    lpSymbol: 'BTCB',
    lpAddresses: contracts.btcb,
    tokenSymbol: 'BTCB',
    tokenAddresses: contracts.btcb,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: false
  },
  {
    pid: 14,
    lpSymbol: 'USDT',
    lpAddresses: contracts.usdt,
    tokenSymbol: 'USDT',
    tokenAddresses: contracts.usdt,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFee: 4,
    farm: false
  },
  {
    pid: 15,
    lpSymbol: 'ETH',
    lpAddresses: contracts.eth,
    tokenSymbol: 'ETH',
    tokenAddresses: contracts.eth,
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
    depositFee: 4,
    farm: false
  },
  {
    pid: 16,
    lpSymbol: 'DAI',
    lpAddresses: contracts.dai,
    tokenSymbol: 'DAI',
    tokenAddresses: contracts.dai,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    depositFee: 4,
    farm: false
  },
  {
    pid: 17,
    lpSymbol: 'DOT',
    lpAddresses: contracts.dot,
    tokenSymbol: 'DOT',
    tokenAddresses: contracts.dot,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: false
  },
  {
    pid: 18,
    lpSymbol: 'CAKE',
    lpAddresses: contracts.cake,
    tokenSymbol: 'CAKE',
    tokenAddresses: contracts.cake,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    depositFee: 4,
    farm: false
  },
]

export default farms
