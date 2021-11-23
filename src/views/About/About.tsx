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
import BurdyProfile from '../../assets/senor-burdy.png'
import EvoProfile from '../../assets/senor-evo.png'
import MorenzProfile from '../../assets/drmoorenz.jpg'
import VechainProfile from '../../assets/vendetta.jpg'
import VesxoneProfile from '../../assets/vexone.jpg'
import StarbinnaProfile from '../../assets/starbinna.png'
import TyphnoProfile from '../../assets/typhno.png'
import TheMonkProfile from '../../assets/the-monk.jpg'
import BugBusterProfile from '../../assets/bug-buster.png'
import Senorsatsrofile from '../../assets/senorsats.png'
import RaslogicProfile from '../../assets/raslogic.png'

export default function About() {
  const cardSection = [
    {
      icon: <AiIcons.AiFillQuestionCircle />,
      title: 'What’s Rasta?',
      desc: `The precious $RASTA token is the official Token of the RastaFinance eco-system.
        Through its decentralized exchange (DEX) and architecture, RastaFinance is putting the people's money, back into the people's hands `,
    },
    {
      icon: <FaIcons.FaLink />,
      title: 'Connect Directly to Your Wallet',
      desc: `The Rasta.Finance platform connects straight to your smart chain wallet,
        in order to ensure swift interaction with our DeFi protocols. Please find the guide on connecting your Binance Smart Chain (BSC) enabled wallet. `,
    },
    {
      icon: <FaIcons.FaUsers />,
      title: 'Join a Community that Cares',
      desc: `Farming the $RASTA token involves staking your coins to provide liquidity for the
        RastaDEX. By a whole community doing this together, we grow the community and make it easier for new Rastas to join`,
    },
  ]
  const cardBtnItem = [
    { label: 'Rasta<br>Token', link: 'https://bscscan.com/address/0xe3e8cc42da487d1116d26687856e9fb684817c52' },
    { label: 'MRasta<br>Token', link: 'https://bscscan.com/address/0xeaa4a2469a8471bd8314b2ff63c1d113fe8114ba' },
    { label: 'Factory<br>Address', link: 'https://bscscan.com/address/0x3cC0Fc3B82AF5Ea222D3545249F81644159EEc8A' },
    { label: 'Router<br>Address', link: 'https://bscscan.com/address/0x0f1700cEc9781740a832B370467cbBBcdAf75AD1' },
    { label: 'Bouyancy<br>Fund Address', link: 'https://bscscan.com/address/0xf2A92c2d85C1A5e4F5A6d4B99C4C8F74D85fBD06' },
    { label: 'Rasta <br>Trust Fund <br>Address', link: 'https://bscscan.com/address/0x437326807aAA8be7C0E3d89ab8C9072BC7614131' },
  ]

  const team = [
    {
      name: '@SeñorBurdy',
      position: 'Founder & CEO',
      avatar: BurdyProfile,
    },
    {
      name: '@SeñorEVO',
      position: 'Rasta Operations',
      avatar: EvoProfile,
    },
    {
      name: '@typhnocrypto',
      position: 'Development Team',
      avatar: TyphnoProfile,
    },
    {
      name: '@drmoorenz',
      position: 'Development Team',
      avatar: MorenzProfile,
    },
    {
      name: '@vechainvendeta',
      position: 'Development Team',
      avatar: VechainProfile,
    },
    {
      name: '@vesxone',
      position: 'Development Team',
      avatar: VesxoneProfile,
    },
    {
      name: '@starbinna',
      position: 'Development Team',
      avatar: StarbinnaProfile,
    },
    {
      name: '@themonk',
      position: 'Development Team',
      avatar: TheMonkProfile,
    },
    {
      name: '@bugbuster',
      position: 'Development Team',
      avatar: BugBusterProfile,
    },
    {
      name: '@senorsats',
      position: 'Development Team',
      avatar: Senorsatsrofile,
    },
    {
      name: '@raslogic',
      position: 'Development Team',
      avatar: RaslogicProfile,
    },
  ]
  const letsConnect = {
    heading: 'Rasta.Finance',
    subHeading: "Let's connect and get to know each other",
    listContent: ['Decentralized', 'Community Driven', 'For The People.', 'By The People.'],
    textContent: `Best way to get in touch with us is to join the Telegram community, our admins are from all over the world and we are ready to answer any questions you may have.`,
    link: {
      btn: {
        joinNowLink: 'https://t.me/rastafinance',
        farmRastaLink: '/',
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
          link: 'https://www.tiktok.com/@rasta.finance',
        },
        {
          icon: <FaIcons.FaMediumM />,
          link: 'https:///rastafinance.medium.com',
        },
      ],
    },
  }
  return (
    <div>
      <Header
        images={AboutHeader}
        title="About Us"
        desc="We are a big team with an even bigger heart."
        btn={{ link: 'https://docs.rasta.finance', label: 'Read The Docs' }}
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
      <section className=" w-full flex bg-white md:mx-auto items-center md:flex-row -mt-64 ">
        <LetsConnect items={letsConnect} bg={LeafBg} />
      </section>
    </div>
  )
}
