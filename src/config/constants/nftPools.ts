import { getCakeAddress } from 'utils/addressHelpers'

const nftPools = [
  {
    id: 234,
    poolName: 'RastaDividend AirNFT',
    rewardTokenAddress: getCakeAddress(),
    rewardTokenSymbol: "RASTA",
    nftContractAddress: '0xF5db804101d8600c26598A1Ba465166c33CdAA4b',
    contractAddress: {
      97: '',
      56: '0xcc406fdA6ea668ca89C0F7a6c70658a875Af082C',
    },
    rewardRate: '100000000000000',
    projectLink: 'https://app.airnfts.com/creators/0x21C8B8069f7B9950cbdA2EF4Af12Aa98c9D97A61',
    type: 'airnft',
    icon: 'airnft.svg',
    harvest: true,
    isFinished: false,
    tokenDecimals: 18,
    ribbon: false,
    ribbonText: "New"
  },
  {
    id: 123,
    poolName: 'StreetPunks NFT',
    rewardTokenAddress: '0x3ca35c4f8bc33D44d10d379F3fE601bA67bBbE7f',
    rewardTokenSymbol: "PUNKS",
    nftContractAddress: '0xB6b545Ac637aec4EC6599258F7CDe70261676333',
    contractAddress: {
      97: '',
      56: '0x2709f5D9a35d89B2Ca7930bb10165300F169E42E',
    },
    rewardRate: '93339307048984470000000',
    projectLink: 'https://tofunft.com/collection/street-punks/items',
    type: 'spnft',
    icon: 'streetpunk.png',
    harvest: true,
    isFinished: false,
    tokenDecimals: 18,
    ribbon: false,
    ribbonText: "New"
  }
]


export const RastaNftIds = [
  222912,
  222905,
  221411,
  221414,
  222910,
  222906,
  222914,
  222908,
  222915,
  222918,
  222916,
  222907,
  221401,
  221406,
  221418,
  221417,
  221404,
  221407,
  221413,
  221402,
  221371,
  221369,
  221366,
  221373,
  221375,
  221374,
  221382,
  221385,
  221370,
  221378,
  241086,
  241043,
  241047,
  241049,
  241054,
  241057,
  241060,
  241080,
  241064,
  241106,
  243117,
  243102,
  243104,
  243105,
  243106,
  243116,
  243115,
  243113,
  243111,
  243110,
  245257,
  248313,
  248302,
  248303,
  248307,
  248310,
  248312,
  248309,
  248306,
  248305,
  248311,
  251901,
  251900,
  251907,
  251906,
  251905,
  251904,
  251903,
  251902,
  251899,
  251898,
  263164,
  263165,
  263166,
  263167,
  263168,
  263169,
  263170,
  263171,
  263172,
  263175
];

export default nftPools
