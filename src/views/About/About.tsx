// import React, { useState } from 'react'
import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as Io5Icons from 'react-icons/io5'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Header from './components/HeroSection'
// import Card from './components/CardSection'
import Dsc from './components/DescriptionSection'
// import CardButton from './components/CardButton'
import TeamSlide from './components/TeamSlide'
// import LetsConnect from './components/LetsConnect'
import Accordion from './components/Accordion'
// import LeafBg from '../../assets/leaf-bg.jpg'
// import NFTsBackground from '../../assets/hero-new-background-zion.jpg'
// import AboutHeader from '../../assets/lion-statue.jpg'
// import AboutHeader from '../../assets/bg-withoutlogo.jpg'
// import BurdyProfile from '../../assets/senor-burdy.jpeg'
// import EvoProfile from '../../assets/senor-evo.jpeg'
// import MiguelProfile from '../../assets/rastalorean.jpeg'
// import VechainProfile from '../../assets/vechain.jpeg'
// import VesxoneProfile from '../../assets/vesxone.jpeg'
// import StarbinnaProfile from '../../assets/rastabinna.png'
// import TyphnoProfile from '../../assets/typhno.jpeg'
// import TheMonkProfile from '../../assets/themonk.jpeg'
// import BugBusterProfile from '../../assets/bugbuster.jpeg'
// import Senorsatsrofile from '../../assets/senorsats.jpeg'
// import RaslogicProfile from '../../assets/ras-logic.jpeg'
// import ChicagoProfile from '../../assets/chicago.jpeg'
import BurdyProfile from '../../assets/Zion-Rasta-SenorBurdy.png'
import BinnaProfile from '../../assets/Zion-Rasta-Binna.png'
import BioTechProfile from '../../assets/Zion-Rasta-BioTech.png'
import ChicagoProfile from '../../assets/Zion-Rasta-ChicagoDOne.png'
import BadgerProfile from '../../assets/Zion-Rasta-DrBadger.png'
import LoreanProfile from '../../assets/Zion-Rasta-Lorean.png'
import LionAbout from '../../assets/Ganyah22.png'
import AboutBackground from '../../assets/about-background.jpg'

export default function About() {
  const cardSection = [
    {
      icon: <AiIcons.AiFillQuestionCircle />,
      title: 'Big Fat Mr Rasta',
      desc: `Rasta is our tax free currency. Our platform and community fuels its eco-system from artistic creations such as Zion NFTs. From every NFT sale, we feed "Big Fat Mr Rasta" with BNB buy backs, so the currency its self grows in value, helping increase the price floor and value of the token while maintaining tax-free trading. `,
    },
    {
      icon: <FaIcons.FaLink />,
      title: 'Miss Rasta',
      desc: `Ms Rasta can only be bought with $Rasta and has a smaller supply (read docs). Ms Rasta is used to support the Zion Launchpad, helping musicians in their careers through airdrops and NFT sales. $MRasta holders will be part of the Ms Rasta prize pool for VIP events, quests and airdrops.`,
    },
    {
      icon: <FaIcons.FaUsers />,
      title: 'Seamless dApp',
      desc: `Built upon the principles of Web3.0, Rasta uses advanced, secure and decentralized block-chain technology to connect directly to your wallet (MetaMask, TrustWallet, SafePal and more). Our audited platform allows users to stake, earn and buy NFTs and Tokens seamlessly throughout the Zion Labs dApp.`,
    },
  ]
  const cardBtnItem = [
    { label: 'Rasta<br>Token', link: 'https://bscscan.com/address/0xe3e8cc42da487d1116d26687856e9fb684817c52' },
    { label: 'MRasta<br>Token', link: 'https://bscscan.com/address/0xeaa4a2469a8471bd8314b2ff63c1d113fe8114ba' },
    { label: 'Factory<br>Address', link: 'https://bscscan.com/address/0x3cC0Fc3B82AF5Ea222D3545249F81644159EEc8A' },
    { label: 'Router<br>Address', link: 'https://bscscan.com/address/0x0f1700cEc9781740a832B370467cbBBcdAf75AD1' },
    {
      label: 'Bouyancy<br>Fund Address',
      link: 'https://bscscan.com/address/0xf2A92c2d85C1A5e4F5A6d4B99C4C8F74D85fBD06',
    },
    {
      label: 'Rasta <br>Trust Fund <br>Address',
      link: 'https://bscscan.com/address/0x437326807aAA8be7C0E3d89ab8C9072BC7614131',
    },
  ]

  const AccordionData = [
    {
      title: 'The NFT Sale Tokenomics are:',
      content: `<ul class="italic mt-4"><li>25% to Artist</li><li>25% to Creator</li><li>20% to Rare NFT Pool</li><li>15% to Genesis Prize Pool</li><li>15% to Future Pool (Stored)</li></ul>`,
    },
    {
      title: 'Benefits for MRASTA NFT Holders:',
      content: `<p className='mt-4'>All Zion Launchpad NFT holders will have governance vote over interaction of the Genesis Pool and all community voting power.</p>`,
    },
    {
      title: 'The Launchpad NFT staking Tokenomics are:',
      content: `<ul class="italic mt-4 space-y-3"><li>Harvest is locked for 30 days (for both artists and users)</li><li>User receives 65% of Harvest (2 years)</li><li>Artist receives 25% of Harvest (90 days)</li><li>10% of all Harvest rewards are put into liquidity for MRASTA/RASTA LP</li></ul>`,
    },
  ]

  // const team = [
  //   {
  //     name: '@SeñorBurdy',
  //     position: 'Founder & CEO',
  //     avatar: BurdyProfile,
  //   },
  //   {
  //     name: '@RasLogic',
  //     position: 'Founder and Vice President',
  //     avatar: RaslogicProfile,
  //   },
  //   {
  //     name: '@SeñorEVO',
  //     position: 'Founder & RastaOperations',
  //     avatar: EvoProfile,
  //   },
  //   {
  //     name: '@Badger',
  //     position: 'Founder and RastaDesign Team',
  //     avatar: VesxoneProfile,
  //   },
  //   {
  //     name: '@VechainVendetta',
  //     position: 'Founder and RastaMedia Team',
  //     avatar: VechainProfile,
  //   },
  //   {
  //     name: '@Monzon403',
  //     position: 'Rasta Ambassador to Mars Colony',
  //     avatar: MiguelProfile,
  //   },
  //   {
  //     name: '@RastaBinna',
  //     position: 'Head of Development Team',
  //     avatar: StarbinnaProfile,
  //   },
  //   {
  //     name: "@ChicagoD'One",
  //     position: 'Head Graphic Designer',
  //     avatar: ChicagoProfile,
  //   },
  //   {
  //     name: '@Typhoncrypto',
  //     position: 'Development Team',
  //     avatar: TyphnoProfile,
  //   },
  //   {
  //     name: '@TheMonk',
  //     position: 'Development Team',
  //     avatar: TheMonkProfile,
  //   },
  //   {
  //     name: '@BugBuster',
  //     position: 'Partnerships Team',
  //     avatar: BugBusterProfile,
  //   },
  //   {
  //     name: '@SenorSats',
  //     position: 'RastaFund & Merchandise Team',
  //     avatar: Senorsatsrofile,
  //   },
  // ]

  const team = [
    {
      name: '@Lorean',
      position: 'NFTNOMICS',
      avatar: LoreanProfile,
    },
    {
      name: '@BioTech',
      position: 'Co-Founder',
      avatar: BioTechProfile,
    },
    
    {
      name: '@Dr. Badger',
      position: 'Co-Founder',
      avatar: BadgerProfile,
    },
    {
      name: '@SeñorBurdy',
      position: 'Co-Founder',
      avatar: BurdyProfile,
    },
    // {
    //   name: "@ChicagoD'One",
    //   position: 'Graphics',
    //   avatar: ChicagoProfile,
    // },
    // {
    //   name: '@RastaBinna',
    //   position: 'Development',
    //   avatar: BinnaProfile,
    // },
  ]

  const letsConnect = {
    heading: 'zionlabs.info',
    subHeading: "Let's connect and get to know each other",
    listContent: ['Decentralized', 'Community Driven', 'For The People.', 'By The People.'],
    textContent: `Best way to get in touch with us is to join the Telegram community, our admins are from all over the world and we are ready to answer any questions you may have.`,
    link: {
      btn: {
        joinNowLink: 'https://t.me/zionlabscommunity',
        farmRastaLink: '/liquidity',
      },
      social: [
        {
          icon: <FaIcons.FaTwitter />,
          link: 'https://www.twitter.com/RastaFinance',
        },
        {
          icon: <FaIcons.FaTelegramPlane />,
          link: 'https://t.me/zionlabscommunity',
        },
        {
          icon: <Io5Icons.IoLogoTiktok />,
          link: 'https://www.tiktok.com/@zionlabs.info',
        },
        {
          icon: <FaIcons.FaMediumM />,
          link: 'https:///rastafinance.medium.com',
        },
        { icon: <FaIcons.FaInstagram />, link: 'https://instagram.com/zionlabs_info?igshid=YmMyMTA2M2Y=' },
      ],
    },
  }
  return (
    <div>
      <Header
        images={AboutBackground}
        // title="Art is our asset,
        // RASTA is our currency. Building something
        // dope on blockchain"
        desc=""
        // btn={{ link: 'https://docs.zionlabs.info', label: 'Read The Docs' }}
      />
      {/* <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row  pb-8">
        <Card items={cardSection} />
      </section> */}
      <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row py-8 md:py-16">
        <Dsc />
      </section>

      <section className=" w-full grid md:grid-cols-2 bg-white md:mx-auto items-center px-8 md:px-12 md:flex-row py-8 md:py-24">
        <div data-aos="fade-right" data-aos-duration="1000" className="mx-auto text-black space-y-6">
          <LazyLoadImage src={LionAbout} alt="" className="w-auto" effect="blur" />
        </div>

        <div data-aos="fade-left" data-aos-duration="1000" className="mx-auto text-black space-y-6">
          <div className="card flex flex-col space-y-5 shadow-lg rounded-lg py-8 px-10">
            <div className="card-title">
              <h2 className="text-3xl font-bold pr-0">What is the Zion Launchpad</h2>
            </div>
            <div className="card-content flex flex-col space-y-5">
              <div className="card-content-1">
                <p>
                  The Zion Launchpad is a reggae artist music profile hub, selected artists can upload their music to
                  their own launchpad playlist for the community to listen to. Each artist has exclusive NFTs for sale
                  on Zion Labs for the artist which can be furthermore staked for MRASTA both profiting for the
                  artists&lsquo; future careers as well as fans and community supporters of the launchpad artists.
                </p>
              </div>
              <div className="card-content-2 flex flex-col space-y-5">
                <h3 className="text-xl font-bold pr-0">Launchpad NFTs</h3>
                <p>
                  The Zion Launchpad is an NFT-based utility minting/launchpad for artists. Artists that come to the
                  launchpad are able to earn revenue from NFT sales which the user can furthermore stake on the artist
                  profile.
                </p>

                {AccordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row py-8 md:py-16">
        <CardButton items={cardBtnItem} />
      </section> */}

      <section
        className=" w-full bg-black md:mx-auto items-center pt-32 pb-32 md:pt-16 md:pb-16"
        style={{
          backgroundImage: `url(${AboutBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <TeamSlide items={team} />
      </section>

      {/* <section className=" w-full flex bg-white md:mx-auto items-center md:flex-row -mt-48 md:-mt-64 ">
        <LetsConnect items={letsConnect} bg={NFTsBackground} />
      </section> */}
    </div>
  )
}
