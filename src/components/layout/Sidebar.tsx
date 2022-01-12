import React, { useState } from 'react'
import useMRastaPrice from 'hooks/useMRastaPrice'
import { usePriceRastaBusd } from 'state/hooks'

import {
  FaHome,
  RiErrorWarningFill,
  IoIosSwap,
  RiCoinLine,
  GiTwoCoins,
  IoChatboxEllipsesOutline,
  FaTelegramPlane,
  FaTwitter,
  FaMediumM,
  FaReddit,
  FaDonate,
  FaBars,
  FaRegWindowClose,
  GoMail,
  RiMoneyDollarCircleLine,
  FaShoppingBag,
} from 'react-icons/all'
import MenuItem from './MenuItem'
import RastaIcon from '../../assets/menu_coin2.jpg'
import MRastaIcon from '../../assets/menu_coin1.jpg'

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  const rastaPriceUsd = usePriceRastaBusd()
  const mRastaPriceUsd = useMRastaPrice()

  const menu = [
    {
      label: 'Home',
      path: '/',
      icon: <FaHome className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    {
      label: 'About',
      path: '/about',
      icon: <RiErrorWarningFill className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    {
      label: 'Trade',
      path: '#',
      icon: <IoIosSwap className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: true,
      child: [
        {
          path: 'https://rastadex.croxswap.com',
          label: 'PancakeSwap by CROX ★',
        },
        {
          path: 'https://exchange.rasta.finance',
          label: 'RastaDexchange (RLP)',
        },
      ],
    },
    {
      label: 'RastaDividend NFT',
      sublabel: 'Buy now on AirNFTs',
      path: 'https://app.airnfts.com/creators/0x21C8B8069f7B9950cbdA2EF4Af12Aa98c9D97A61',
      icon: <FaShoppingBag className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    // {
    //  label: 'Rasino',
    //  sublabel:'(coming soon)',
    //  plusLabel: '(Coming Soon)',
    //  path: '#',
    //  icon: <RiMoneyDollarCircleLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
    //  parent: false,
    //  child: [],
    // },
    {
      label: 'Farms',
      path: '#',
      icon: <RiCoinLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: true,
      child: [
        {
          path: '/farms',
          label: 'Mr. Rasta',
        },
      ],
    },
    {
      label: 'Pools',
      path: '#',
      icon: <GiTwoCoins className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: true,
      child: [
        {
          path: '/pools',
          label: 'Mr. Rasta',
        },
      ],
    },
    {
      label: 'StakeRasta',
      path: '/stake',
      icon: <RiMoneyDollarCircleLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
    {
      label: 'StakeAirNFT',
      sublabel:'(coming soon)',
      path: '/stakenft',
      icon: <FaDonate className="inline-block" style={{ width: '32px', height: '28px' }} />,
      parent: false,
      child: [],
    },
    // {
    //  label: 'TOP LAUNCH PAD',
    //  sublabel:'(coming soon)',
    //  path: '#',
    //  icon: <AiFillStar className="inline-block" style={{ width: '32px', height: '32px' }} />,
    //  parent: false,
    //  child: [],
    // },
    // {
    //   label: 'TECHRATE AUDIT',
    //   path: 'https://rasta.finance/files/RastaAudit.pdf',
    //  icon: <FaBook className="inline-block" style={{ width: '32px', height: '32px' }} />,
    //  parent: false,
    //  child: [],
    // },
    {
      label: 'View More...',
      path: '#',
      icon: <IoChatboxEllipsesOutline className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: true,
      child: [
        {
          path: 'https://rasta.finance/files/RastaAudit.pdf',
          label: 'Audit',
        },
        {
          path: 'https://coinmarketcap.com/currencies/rasta-finance/',
          label: 'CoinMarketCap',
        },
        {
          path: 'https://docs.rasta.finance',
          label: 'Whitepaper',
        },
        // {
        //   path: 'https://rastafinance.medium.com',
        //   label: 'Medium',
        // },
        {
          path: 'https://dappradar.com/binance-smart-chain/defi/rasta-finance',
          label: 'Dapp Radar',
        },
        {
          path: 'https://dex.guru/token/0xe3e8cc42da487d1116d26687856e9fb684817c52-bsc',
          label: 'Chart',
        },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
      icon: <GoMail className="inline-block" style={{ width: '32px', height: '32px' }} />,
      parent: false,
      child: [],
    },
  ]
  const socialMedia = [
    { name: 'Telegram', icon: <FaTelegramPlane />, link: 'https://www.t.me/rastafinance' },
    { name: 'Twitter', icon: <FaTwitter />, link: 'https://www.twitter.com/RastaFinance' },
    { name: 'Medium', icon: <FaMediumM />, link: 'https:///rastafinance.medium.com' },
    { name: 'Reddit', icon: <FaReddit />, link: 'https://www.reddit.com/r/rastafinance' },
  ]

  return (
    <div className="navbar text-white">
      <span className="menu-bars text-2xl cursor-pointer">
        <FaBars onClick={showSidebar} />
      </span>
      <nav
        className={`h-full w-auto top-0 py-6 px-8 bg-gray-rasta z-50 fixed transition duration-1000 flex flex-col justify-between overflow-x-auto ${sidebar ? 'left-0 ml-0' : '-left-full -ml-16'
          }`}
      >
        <span className="menu-bars absolute right-4 text-3xl text-white cursor-pointer">
          <FaRegWindowClose onClick={showSidebar} />
        </span>
        <ul className="menu-items text-white mt-12 text-2xl space-y-6 font-bold">
          {menu.map((item, index) => {
            return <MenuItem key={index} menu={item} showSidebar={showSidebar} />
          })}
        </ul>

        <div>
          <div className="social-media text-center justify-items-end p-4">
            <div className="md:flex md:flex-row md:space-x-4 gap-4 md:gap-0 mt-4 justify-center">
              {socialMedia.map((item, index) => {
                return (
                  <a
                    className=" inline-block md:block mr-5 last:mr-0 md:mr-0 text-md w-50 h-50 border-1 border-white rounded-full p-2 hover:bg-yellow-rasta hover:text-green-rasta"
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </div>
          <div className="flex items-center">
            <img src={RastaIcon} alt="token icon" width="20" className="mr-2 rounded-full" />
            <span className="font-bold">${Math.round(rastaPriceUsd.toNumber() * 1000) / 1000}</span>
          </div>
          <div className="flex items-center mt-2">
            <img src={MRastaIcon} alt="token icon" width="20" className="mr-2 rounded-full" />
            <span className="font-bold">${Math.round(mRastaPriceUsd * 1000) / 1000}</span>
          </div>
        </div>
      </nav>
    </div>
  )
}
