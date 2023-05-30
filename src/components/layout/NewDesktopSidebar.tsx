import React, { useState } from 'react'
import { usePriceZionBusd } from 'state/hooks'

import { Link } from 'react-router-dom'

import {
  FaBars,
  FaRegWindowClose,
} from 'react-icons/fa'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import MenuItem from './MenuItem'
import ZionLogo from '../../assets/newimage/zion.jpg'
import Logo from '../../assets/newimage/ZION-logo-white.png'

export default function NewDesktopSidebar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
  }
  const zionPriceUsd = usePriceZionBusd()

  const menu = [
    {
      label: 'Home',
      path: '/',
      parent: false,
      child: [],
    },
    {
      label: 'About',
      path: '#',
      parent: true,
      child: [
        {
          path: '/about',
          label: 'Zion Labs',
        },
        {
          path: '/win-big',
          label: 'Win Big',
        },
      ]
    },
    {
      label: 'NFT Transporter',
      path: 'https://send.zionlabs.info/',
      parent: false,
      child: [],
    },
    {
      label: 'Mint',
      path: '#',
      parent: true,
      child: [
        {
          path: '/mint',
          label: 'Zion Lions',
        },
      ],
    },
    {
      label: 'Staking',
      path: '#',
      parent: true,
      child: [
        {
          path: 'https://www.zionlp.com/RaggadatCris/Melody_1',
          label: 'Raggadat Cris',
        },
      ],
    },
    {
      label: 'Staking',
      path: '#',
      parent: true,
      child: [
        {
          path: '/stake-zionlions',
          label: 'Zion Lion Staking',
        },
        {
          path: '/stakenft',
          label: 'DividendNFT',
        },
        {
          path: '/liquidity',
          label: 'Liquidity',
        },
        {
          path: '/pools',
          label: 'Rasta',
        },
      ],
    },
    {
      label: 'Farmers Flip',
      path: 'https://flip.zionlabs.info/',
      parent: false,
      child: [],
    },
    {
      label: 'Launchpad',
      path: '#',
      parent: true,
      child: [
        {
          path: 'https://www.zionlp.com/launchpad-artists',
          label: 'Home',
        },
        {
          path: 'https://www.zionlp.com/',
          label: 'Marketplace',
        },
        {
          path: 'https://www.zionlp.com/RaggadatCris/Melody_1/stake',
          label: 'Raggadat Cris',
        },
      ],
    },
    {
      // label: 'Dex',
      label: 'Buy',
      path: 'https://swap.zionlabs.info/',
      parent: false,
      child: [],
    },
    {
      label: 'View More...',
      path: '#',
      parent: true,
      child: [
        {
          path: 'https://docs.zionlabs.info',
          label: 'Whitepaper',
        },
        {
          path: 'https://docs.zionlabs.info/faq/rasta-audit',
          label: 'Audit',
        },
        {
          path: 'https://coinmarketcap.com/currencies/rasta-finance/',
          label: 'CoinMarketCap',
        },
          {
            label: 'Docs',
            path: 'https://docs.zionlabs.info',
          },
          {
            label: 'Education',
            path: '/educations',
          }
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
      parent: false,
      child: [],
    },
  ]

  // const menu = [
  //   {
  //     label: 'Home',
  //     path: '/',
  //     // icon: <FaHome className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: false,
  //     child: [],
  //   },
  //   {
  //     label: 'About',
  //     path: '/about',
  //     // icon: <RiErrorWarningFill className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: false,
  //     child: [],
  //   },
  //   {
  //     // label: 'Batch NFT Transporter',
  //     // label: 'NFT Swap',
  //     // label: 'NFT Center',
  //     // label: 'NFT Sender',
  //     label: 'NFT Transporter',
  //     path: 'https://send.zionlabs.info/',
  //     // icon: <FaHome className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: false,
  //     child: [],
  //   },
  //   {
  //     label: 'NFT Staking',
  //     // label: 'Zion Lion NFTs',
  //     path: '#',
  //     // icon: <FaDonate className="inline-block" style={{ width: '32px', height: '28px' }} />,
  //     parent: true,
  //     child: [
  //       // {
  //       //   path: '/stakenft',
  //       //   label: 'DividendNFT',
  //       // },
  //       // {
  //       //   path: '/stake-zionlions',
  //       //   label: 'ZionBuilders',
  //       // },
  //       // {
  //       //   path: '/stake-zionlions',
  //       //   label: 'ZionLion NFT',
  //       // },
  //       {
  //         path: '/mint',
  //         label: 'Mint',
  //       },
  //       {
  //         path: '/stake-zionlions',
  //         label: 'NFT Staking',
  //       },
  //       // {
  //       //   path: '/#mintstation',
  //       //   label: 'NFT Staking',
  //       // },
  //       {
  //         path: '/stakenft',
  //         label: 'DividendNFT',
  //       },
  //     ],
  //   },
  //   {
  //     // label: 'Batch NFT Transporter',
  //     // label: 'NFT Swap',
  //     // label: 'NFT Center',
  //     label: 'Farmers Flip',
  //     path: 'https://flip.zionlabs.info/',
  //     // icon: <FaHome className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: false,
  //     child: [],
  //   },
  //   {
  //     label: 'Launchpad',
  //     path: 'https://zionlp.com/launchpad-artists',
  //     parent: false,
  //     child: [],
  //   },
  //   {
  //     label: 'Win Big',
  //     path: '/win-big',
  //     parent: false,
  //     child: [],
  //   },
  //   // {
  //   //   label: 'About',
  //   //   path: '/about',
  //   //   // icon: <RiErrorWarningFill className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //   parent: false,
  //   //   child: [],
  //   // },
  //   // {
  //   //   label: 'Docs',
  //   //   path: 'https://docs.zionlabs.info',
  //   //   parent: false,
  //   //   child: [],
  //   // },
  //   {
  //     label: 'RastaSwap ★',
  //     path: 'https://swap.zionlabs.info/',
  //     parent: false,
  //     child: [],
  //   },
  //   // {
  //   //   label: 'Trade',
  //   //   path: '#',
  //   //   // icon: <IoIosSwap className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //   parent: true,
  //   //   child: [
  //   //     {
  //   //       path: 'https://swap.zionlabs.info/',
  //   //       label: 'RastaSwap ★',
  //   //     },
  //   //     {
  //   //       path: 'https://exchange.zionlabs.info',
  //   //       label: 'Old RastaDex',
  //   //     },
  //   //   ],
  //   // },
  //   {
  //     label: 'Stake Rasta',
  //     path: '/pools',
  //     // icon: <GiTwoCoins className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: false,
  //     child: [],
  //   },
  //   {
  //     label: 'Stake Liquidity',
  //     path: '/liquidity',
  //     // icon: <RiCoinLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: false,
  //     child: [],
  //   },
    
  //   // {
  //   //   label: 'Launchpad',
  //   //   path: 'https://zionlp.com/launchpad-artists',
  //   //   parent: false,
  //   //   child: [],
  //   // },
  //   // blog
   
  //   // end blog
  //   // {
  //   //   label: 'Zion Launchpad',
  //   //   path: '#',
  //   //   // icon: <GiLion className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //   parent: true,
  //   //   child: [
  //   //     {
  //   //       path: 'https://zionlp.com/launchpad-artists',
  //   //       label: 'Launchpad Artists',
  //   //       blank: true,
  //   //     },
  //   //     {
  //   //       path: 'https://zionlp.com',
  //   //       label: 'Launchpad NFTs',
  //   //     },
  //   //   ],
  //   // },
  //   // {
  //   //   label: 'NFT Staking',
  //   //   path: '#',
  //   //   // icon: <FaDonate className="inline-block" style={{ width: '32px', height: '28px' }} />,
  //   //   parent: true,
  //   //   child: [
  //   //     {
  //   //       path: '/stakenft',
  //   //       label: 'DividendNFT',
  //   //     },
  //   //     // {
  //   //     //   path: '/stake-zionlions',
  //   //     //   label: 'ZionBuilders',
  //   //     // },
  //   //     {
  //   //       path: '/stake-zionlions',
  //   //       label: 'ZionLion NFT',
  //   //     },
  //   //     // {
  //   //     //   path: '/streetpunksnft',
  //   //     //   label: 'Streetpunk NFT',
  //   //     // },
  //   //   ],
  //   // },
  //   // {
  //   //  label: 'Rasino',
  //   //  sublabel:'(coming soon)',
  //   //  plusLabel: '(Coming Soon)',
  //   //  path: '#',
  //   //  icon: <RiMoneyDollarCircleLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //  parent: false,
  //   //  child: [],
  //   // },
  //   // {
  //   //   label: 'Stake Liquidity',
  //   //   path: '/liquidity',
  //   //   // icon: <RiCoinLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //   parent: false,
  //   //   child: [],
  //   // },
  //   // {
  //   //   label: 'Stake Rasta',
  //   //   path: '/pools',
  //   //   // icon: <GiTwoCoins className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //   parent: false,
  //   //   child: [],
  //   // },
  //   // {
  //   //   label: 'StakeRasta',
  //   //   path: '/stake',
  //   //   // icon: <RiMoneyDollarCircleLine className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //   parent: false,
  //   //   child: [],
  //   // },
  //   // {
  //   //  label: 'TOP LAUNCH PAD',
  //   //  sublabel:'(coming soon)',
  //   //  path: '#',
  //   //  icon: <AiFillStar className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //  parent: false,
  //   //  child: [],
  //   // },
  //   // {
  //   //   label: 'TECHRATE AUDIT',
  //   //   path: 'https://zionlabs.info/files/RastaAudit.pdf',
  //   //  icon: <FaBook className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //   //  parent: false,
  //   //  child: [],
  //   // },
  //   {
  //     label: 'View More...',
  //     path: '#',
  //     // icon: <IoChatboxEllipsesOutline className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: true,
  //     child: [
  //       {
  //         path: 'https://docs.zionlabs.info',
  //         label: 'Whitepaper',
  //       },
  //       {
  //         path: 'https://docs.zionlabs.info/faq/rasta-audit',
  //         label: 'Audit',
  //       },
  //       {
  //         path: 'https://coinmarketcap.com/currencies/rasta-finance/',
  //         label: 'CoinMarketCap',
  //       },
  //        {
  //           label: 'Docs',
  //           path: 'https://docs.zionlabs.info',
  //         },
  //         {
  //           label: 'Education',
  //           path: '/educations',
  //         }

  //       // {
  //       //   path: 'https://rastafinance.medium.com',
  //       //   label: 'Medium',
  //       // },
  //       // {
  //       //   path: 'https://dappradar.com/binance-smart-chain/defi/rasta-finance',
  //       //   label: 'Dapp Radar',
  //       // },
  //       // {
  //       //   path: 'https://dex.guru/token/0xe3e8cc42da487d1116d26687856e9fb684817c52-bsc',
  //       //   label: 'Chart',
  //       // },
  //     ],
  //   },
  //   {
  //     label: 'Contact',
  //     path: '/contact',
  //     // icon: <GoMail className="inline-block" style={{ width: '32px', height: '32px' }} />,
  //     parent: false,
  //     child: [],
  //   },
  // ]
  // const socialMedia = [
  //   { name: 'Telegram', icon: <FaTelegramPlane />, link: 'https://t.me/zionlabscommunity' },
  //   { name: 'Twitter', icon: <FaTwitter />, link: 'https://www.twitter.com/zionlabs_info' },
  //   { name: 'Medium', icon: <FaMediumM />, link: 'https:///zionlabs.medium.com' },
  //   // { name: 'Reddit', icon: <FaReddit />, link: 'https://www.reddit.com/r/rastafinance' },
  //   { name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com/zionlabs_info?igshid=YmMyMTA2M2Y=' },
  // ]

  return (
    <div className="navbar text-white hidden md:block">
      <span className="menu-bars text-2xl cursor-pointer">
        <FaBars onClick={showSidebar} className="hidden s" />
      </span>
      {/* <nav
        className={`h-full w-auto top-0 py-6 px-8 bg-black z-50 fixed transition duration-1000 flex flex-col justify-between overflow-x-auto ${
          sidebar ? 'left-0 ml-0' : '-left-full -ml-16'
        }`}
      > */}
      <nav
        className={`h-full w-48 top-0 py-6 px-8 bg-black z-50 fixed transition duration-1000 flex flex-col justify-between overflow-x-auto ${
          sidebar ? 'left-0 ml-0' : ''
        }`}

        // data-aos="fade-right"
        // data-aos-duration="1000"
      >
        <span className="menu-bars absolute right-4 text-3xl text-white a cursor-pointer">
          <FaRegWindowClose onClick={showSidebar} className="hidden" />
        </span>

        <div className="text-center">
          <Link to="/">
            <LazyLoadImage src={Logo} alt="Logo" className="w-32 mx-auto d-block px-4" effect="blur" />
            {/* <span className='text-heading uppercase font-bold text-3xl'>Zion Labs</span> */}
          </Link>
        </div>

        <ul className="menu-items text-white mt-0 text-2xl space-y-5 font-sans font-light">
          {menu.map((item, index) => {
            return <MenuItem key={index} menu={item} showSidebar={showSidebar} />
          })}
        </ul>

        <a href='https://www.zionlp.com/RaggadatCris/Melody_1/stake' rel='nofollow'>
            <div className='my-2'>
              <span className='font-bold'>Featured Artist</span>
            </div>

            <div className='border-1 mb-5 w-full' style={{
              boxShadow: '4px 4px 0px #F9B262',
              borderColor: '#E94D75'
            }}>

              <img src="https://api.zionlabs.info/profile/ktliwtnl17aunve_profile.jpeg" width='150px' alt='raggadat'/>

              <div className='w-full p-3'>
                <span className='text-center w-full'>Raggadat Cris</span>
              </div>
            </div>
          </a>

        <div>
          {/* <div className="social-media text-center justify-items-end p-4">
            <div className="md:flex md:flex-row md:space-x-4 gap-4 md:gap-0 mt-4 justify-center">
              {socialMedia.map((item, index) => {
                return (
                  <a
                    className=" inline-block md:block mr-5 last:mr-0 md:mr-0 text-md w-50 h-50 p-2 md:p-0 hover:text-green-rasta"
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
          </div> */}
        

          <div className="flex items-center">
            <img src={ZionLogo} alt="token icon" width="20" className="mr-2 rounded-full" />
            <span className="font-bold">${Math.round(zionPriceUsd.toNumber() * 1000) / 1000}</span>
          </div>
          {/* <div className="flex items-center mt-2">
            <img src={MRastaIcon} alt="token icon" width="20" className="mr-2 rounded-full" />
            <span className="font-bold">${Math.round(mRastaPriceUsd * 1000) / 1000}</span>
          </div> */}
        </div>
      </nav>
    </div>
  )
}
