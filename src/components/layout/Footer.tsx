import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
// import * as Io5Icons from 'react-icons/io5'
// import Logo from '../../assets/z1-rescaled.png'
import Logo from '../../assets/newimage/ZION-logo-white.png'

export default function Footer() {
  // const textUnderLogo = ['@zionlabs_info', 'www.zionlabs.info']
  // const textUnderLogo = ['Enjoy your Rasta experience on web 3']
  const textUnderLogo = ['Explore a new dimension of the Zion experience with Web 3.0 technology']
  const navigation = [
    {
      title: 'Useful Links',
      item: [
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Zion Launchpad', path: 'https://zionlp.com' },
      ],
    },
    {
      title: 'Stake',
      item: [
        { label: 'Rasta Token', path: '/liquidity' },
        { label: 'Stake Liquidity', path: '/liquidity' },
        { label: 'Mint', path: '/mint' },
        // { label: 'Mr. Rasta', path: '/liquidity' },
        // { label: 'Ms. Rasta', path: '/liquidity' },
      ],
    },
  ]

  const artistNavigation = [
    {
      title: "Beat by Zion",
      item: [
        { label: "Raggadat Cris", path: "https://www.zionlp.com/RaggadatCris/0xE98964c1E4Ff584E3fF44EF3599f0a84803Fa50e/stake" },
      ],
    },
  ];

  const artistNFTNavigation = [
    {
      title: "Artist NFT",
      item: [
        { label: "Raggadat Cris", path: "https://www.zionlp.com/list/artist/RaggadatCris" },
      ],
    },
  ];

const stakeOne = [
  {
    item: [
      { label: 'NFT Staking', path: '/stake-zionlions' },
        { label: 'Dividend NFT', path: '/stakenft' },
    ]
  }
]

const usefulLinks = [
  {item: [
    {
      label:'NFT Center',
      path: 'https://send.zionlabs.info/'
    },
    {
      label:'Launchpad',
      path: 'https://zionlp.com/launchpad-artists'
    },
    {
      label:'RastaSwap ★',
      path: 'https://swap.zionlabs.info/'
    },
    
  ]}
]

// const usefulLinksTwo = [
//   {item: [
    // {
    //   label:'Stake Rasta',
    //   path: '/pools'
    // },
    // {
    //   label:'Stake Liquidity',
    //   path: '/liquidity'
    // },
    // {
    //   label:'Docs',
    //   path: 'https://docs.zionlabs.info/'
    // },
//   ]}
// ]

const usefulLinksThree = [
  {item: [
    {
      label:'Educations',
      path: '/educations'
    },
    {
      label:'Whitepaper',
      path: 'https://docs.zionlabs.info/'
    },
    // {
    //   label:'CoinMarketCap',
    //   path: 'https://coinmarketcap.com/currencies/rasta-finance/'
    // },
    {
      label:'Docs',
      path: 'https://docs.zionlabs.info/'
    },
  ]}
]

  const socialMedia = [
    { name: 'Twitter', icon: <FaIcons.FaTwitter />, link: 'https://www.twitter.com/zionlabs_info' },
    { name: 'Telegram', icon: <FaIcons.FaTelegramPlane />, link: 'https://t.me/zionlabscommunity' },
    // { name: 'Tik Tok', icon: <Io5Icons.IoLogoTiktok />, link: 'https://www.tiktok.com/@zionlabs.info' },
    { name: 'Medium', icon: <FaIcons.FaMediumM />, link: 'https:///zionlabs.medium.com' },
    { name: 'Instagram', icon: <FaIcons.FaInstagram />, link: 'https://instagram.com/zionlabs_info' },
  ]
  function ShowLinks(props) {
    return props.items.map((item, index) => {
      return (
        <li key={index}>
          {item.path.includes('http') ? (
            <a href={item.path}>{item.label}</a>
          ) : (
            <Link to={item.path}>
              <span className="">{item.label}</span>
            </Link>
          )}
        </li>
      )
    })
  }
  return (
    <div className="w-full bg-black text-white py-10 md:py-12">
      <div className="mx-auto w-10/12">
        <div className="flex flex-col md:flex-row space-between border-b-0 pb-8 mb-4">
          <div className="flex-grow-1 flex flex-col lg:w-1/4">
            <LazyLoadImage
              data-aos="fade-up"
              data-aos-duration="1000"
              src={Logo}
              alt="Logo"
              className="w-32 pb-4 pl-0 md:pl-0 md:px-4"
              effect="blur"
            />
            {/* <span className='text-heading uppercase font-bold text-3xl'>Zion Labs</span> */}
            {textUnderLogo.map((item, index) => {
              return (
                <span data-aos="fade-up" data-aos-duration="1000" key={index} className="pl-0 md:pl-0 lg:w-3/4">
                  {item}
                </span>
              )
            })}
          </div>

          <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col mr-4 last:mr-0 pl-0 md:pl-0 mt-4"
              >
              Useful Links

              {usefulLinks.map((item) => {
                return (
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item}/>
                </ul>
              
                )
              })}
              </div>

              {/* <div data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col mr-4 last:mr-0 pl-0 md:pl-0 mt-4">
                   <p>&nbsp;</p>
              {usefulLinksTwo.map((item) => {
                return (
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item}/>
                </ul>
              
                )
              })}
              </div> */}

              <div data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col mr-4 last:mr-0 pl-0 md:pl-0 mt-4">
                   <p>&nbsp;</p>
              {usefulLinksThree.map((item) => {
                return (
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item}/>
                </ul>
              
                )
              })}
              </div>

          {navigation.map((item, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col mr-4 last:mr-0 pl-0 md:pl-0 mt-4"
                key={index}
              >
                {item.title === 'Useful Links' ? <p>&nbsp;</p> : item.title}
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item} />
                </ul>
              </div>
            )
          })}

<div
                data-aos="fade-up"
                data-aos-duration="1000"
                className="flex flex-col mr-4 last:mr-0 pl-0 md:pl-0 mt-4"
              >
 <p>&nbsp;</p> 

 {stakeOne.map((item) => {
                return (
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item}/>
                </ul>
              
                )
              })}
                </div>

                {artistNavigation.map((item, index) => {
            return (
              <div
                className="flex flex-col mr-4 last:mr-0 pl-0 md:pl-0 mt-4"
                key={index}
              >
                {item.title === 'Useful Links' ? <p>&nbsp;</p> : item.title }
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item} />
                </ul>
              </div>
            );
          })}

{artistNFTNavigation.map((item, index) => {
            return (
              <div
                className="flex flex-col mr-4 last:mr-0 pl-0 md:pl-0 mt-4"
                key={index}
              >
                {item.title === 'Useful Links' ? <p>&nbsp;</p> : item.title }
                <ul className="list-none mt-0 md:mt-6 text-yellow-rasta">
                  <ShowLinks items={item.item} />
                </ul>
              </div>
            );
          })}

        </div>

       

        <div className="bottom-footer flex space-between pl-0 md:pl-0 pr-6 md:pr-0 flex-col md:flex-row w-full space-between mx-auto">
          <div className="copyright flex-grow-1">
            <span>
              <a href="/" className="text-yellow-rasta">
                Zion Labs
              </a>{' '}
              2022 // All Rights Reserved
            </span>
          </div>
          <div className="social-media text-left md:text-right justify-items-end">
            <div className="md:flex md:flex-row md:space-x-4 gap-4 md:gap-0 mt-4">
              {socialMedia.map((item, index) => {
                return (
                  <a
                    className=" inline-block md:block mr-5 last:mr-0 md:mr-0 text-md w-50 h-50 rounded-full p-2 hover:bg-yellow-rasta hover:text-green-rasta"
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
        </div>
      </div>
    </div>
  )
}
