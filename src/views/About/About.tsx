import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as Io5Icons from 'react-icons/io5'
import Header from './components/HeroSection'
import Card from './components/CardSection'
import Dsc from './components/DescriptionSection'
import CardButton from './components/CardButton'
import TeamSlide from './components/TeamSlide'
import LetsConnect from './components/LetsConnect'
import LeafBg from '../../assets/leaf-bg.jpg'
import AboutHeader from '../../assets/lion-statue.jpg'
import BurdyProfile from '../../assets/senor-burdy.jpeg'
import EvoProfile from '../../assets/senor-evo.jpeg'
import MiguelProfile from '../../assets/rastalorean.jpeg'
import VechainProfile from '../../assets/vechain.jpeg'
import VesxoneProfile from '../../assets/vesxone.jpeg'
import StarbinnaProfile from '../../assets/rastabinna.png'
import TyphnoProfile from '../../assets/typhno.jpeg'
import TheMonkProfile from '../../assets/themonk.jpeg'
import BugBusterProfile from '../../assets/bugbuster.jpeg'
import Senorsatsrofile from '../../assets/senorsats.jpeg'
import RaslogicProfile from '../../assets/ras-logic.jpeg'

export default function About() {
  const cardSection = [
    {
      icon: <AiIcons.AiFillQuestionCircle />,
      title: 'What is Rasta?',
      desc: `Founded in 2020, RastaFinance is a decentralized crypto community, building unique tools that bridge the crypto-world to real-world projects `,
    },
    {
      icon: <FaIcons.FaLink />,
      title: 'Connect Directly to Your Wallet',
      desc: `Built upon the principles of Web3.0, Rasta uses advanced, secure and decentralized block-chain technology to connect directly to your wallet (MetaMask, TrustWallet, SafePal and more)`,
    },
    {
      icon: <FaIcons.FaUsers />,
      title: 'Join a Community that Cares',
      desc: `As we grow the Rasta Eco-System, join the community and farm for more $RASTA tokens, that way you can grow your crypto portfolio`,
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

  const team = [
    {
      name: '@SeñorBurdy',
      position: 'Founder & CEO',
      avatar: BurdyProfile,
    },
    {
      name: '@RasLogic',
      position: 'Founder and Vice President',
      avatar: RaslogicProfile,
    },
    {
      name: '@SeñorEVO',
      position: 'Founder & RastaOperations',
      avatar: EvoProfile,
    },
    {
      name: '@Badger',
      position: 'Founder and RastaDesign Team',
      avatar: VesxoneProfile,
    },
    {
      name: '@VechainVendetta',
      position: 'Founder and RastaMedia Team',
      avatar: VechainProfile,
    },
    {
      name: '@Monzon403',
      position: 'Rasta Ambassador to Mars Colony',
      avatar: MiguelProfile,
    },
    {
      name: '@RastaBinna',
      position: 'Head of Development Team',
      avatar: StarbinnaProfile,
    },
    {
      name: '@Typhoncrypto',
      position: 'Development Team',
      avatar: TyphnoProfile,
    },
    {
      name: '@TheMonk',
      position: 'Development Team',
      avatar: TheMonkProfile,
    },
    {
      name: '@BugBuster',
      position: 'Partnerships Team',
      avatar: BugBusterProfile,
    },
    {
      name: '@SenorSats',
      position: 'RastaFund & Merchandise Team',
      avatar: Senorsatsrofile,
    },
  ]
  const letsConnect = {
    heading: 'zionlabs.info',
    subHeading: "Let's connect and get to know each other",
    listContent: ['Decentralized', 'Community Driven', 'For The People.', 'By The People.'],
    textContent: `Best way to get in touch with us is to join the Telegram community, our admins are from all over the world and we are ready to answer any questions you may have.`,
    link: {
      btn: {
        joinNowLink: 'https://t.me/rastafinance',
        farmRastaLink: '/liquidity',
      },
      social: [
        {
          icon: <FaIcons.FaTwitter />,
          link: 'https://www.twitter.com/RastaFinance',
        },
        {
          icon: <FaIcons.FaTelegramPlane />,
          link: 'https://www.t.me/rastafinance',
        },
        {
          icon: <Io5Icons.IoLogoTiktok />,
          link: 'https://www.tiktok.com/@zionlabs.info',
        },
        {
          icon: <FaIcons.FaMediumM />,
          link: 'https:///rastafinance.medium.com',
        },
        { icon: <FaIcons.FaDiscord />, link: 'https://discord.gg/JgMKca38' },
      ],
    },
  }
  return (
    <div>
      <Header
        images={AboutHeader}
        title="About Us"
        desc="We are a big team with an even bigger heart."
        btn={{ link: 'https://docs.zionlabs.info', label: 'Read The Docs' }}
      />
      <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row  pb-8">
        <Card items={cardSection} />
      </section>
      <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row py-8 md:py-16">
        <Dsc />
      </section>
      <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row py-8 md:py-16">
        <CardButton items={cardBtnItem} />
      </section>
      <section className=" w-full bg-white md:mx-auto items-center  md:pt-16">
        <TeamSlide items={team} />
      </section>
      <section className=" w-full flex bg-white md:mx-auto items-center md:flex-row -mt-56 md:-mt-64 ">
        <LetsConnect items={letsConnect} bg={LeafBg} />
      </section>
    </div>
  )
}
