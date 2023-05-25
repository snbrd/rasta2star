import React from 'react'
import { Link } from 'react-router-dom'
// import PotionImage from '../../../assets/potion-bottle.png'
import PotionImage from '../../../assets/newimage/potion-bottle.png'
// import HeroImage from '../../../assets/Banner-Twitter-Zionlab-new.jpg'
// import HeroImage from '../../../assets/home-header.jpg'
// import HeroImage from '../../../assets/hero-new-background-zion.jpg'
import HeroImage from '../../../assets/new-hero-image.jpg'
// import CarouselSlider from './CarouselSlider'

export default function HeroSection() {
  const counter = [
    { label: 'Months Active', numbers: '15' },
    { label: 'Holders', numbers: '3,600+' },
    { label: 'Transfers', numbers: '257,613' },
    { label: 'Network', numbers: 'BSC (BEP20)' },
  ]
  return (
    <div>
      <div
      className="flex w-full bg-opacity-50 py-24 md:py-10 lg:py-40 md:justify-between text-white flex-col h-auto badger-screen:h-full"
        // className="flex w-full bg-opacity-50 py-24 md:py-0 md:justify-between text-white flex-col h-auto md:h-screen"
        
        // className="flex w-full bg-opacity-50 py-24 md:py-0 md:justify-between text-white flex-col h-auto"
        style={{
          backgroundColor: '#0000008c',
          backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
          backgroundBlendMode: 'multiply',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* <img src={HeroImage} alt='' className="absolute invisible md:visible h-screen w-full object-cover" /> */}
        {/* video background */}
        {/* <video autoPlay muted loop id="myVideo" className="absolute invisible md:visible w-auto h-screen md:left-48"> */}
        {/* <source src='/hero-video.mp4' type="video/mp4"/> */}
        {/* <source src="/new-hero-video.mp4" type="video/mp4" />
        </video> */}

        <div className="flex w-full px-8 md:px-0 md:max-w-screen-xl md:mx-auto items-center flex-col md:flex-row justify-center h-full z-20 md:mt-24">
          {/* <div className="leftSection w-full md:w-6/12 md:pl-16"> */}
          <div className="leftSection w-full md:w-3/4 md:pl-16">
            <img
              src={PotionImage}
              className="w-32 text-center block md:hidden m-auto"
              alt="potion bottle"
              data-aos="fade-right"
              data-aos-duration="1000"
            />
            <h1
              className="text-4xl font-bold text-center md:text-left md:pr-48 leading-tight"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-blue-zion_cyan text-heading font-bold uppercase">Zion Labs</span>
              <br /> 
              <span className="hidden md:block">
                Enjoy your Zion <br/> Experience on Web 3
                {/* Welcomes You to Web3.0 */}
                </span>
              {/* <span style={{fontSize: '20px'}}>We Build Decentralized Applications (dApps) on the Blockchain</span> */}
              <span style={{fontSize: '20px'}}>Now Stake $RASTA to earn upto 125% APR</span>
            </h1>
            <p className="mt-4 md:mt-8 text-center md:text-left" data-aos="fade-right" data-aos-duration="2000">
            {/* We are a creative tech-collective developing innovative technologies on the blockchain; with a core focus on augmenting the music industry with artist-centered DeFi tools.  */}
            ZionLabs is a creative-tech collective developing novel technologies on the blockchain; to be used within the music industry and beyond. Powered by the Binance Blockchain.
            </p>

            <p className="mt-4 md:mt-8 text-center md:text-left  break-words" data-aos="fade-right" data-aos-duration="2000">
              <a href='https://bscscan.com/token/0xe3e8cc42da487d1116d26687856e9fb684817c52' target="_blank" rel="noreferrer">
              $RASTA Token Contract: 0xE3e8cC42DA487d1116D26687856e9FB684817c52
              </a>
              </p>            
            
            <div className="cta flex flex-col md:flex-row justify-center items-center mt-8 space-y-8 md:space-y-0 md:space-x-8 md:flex" data-aos="fade-right" data-aos-duration="2500">
              <Link
                to="/liquidity"
                // className="bg-gradient-to-b font-bold w-full md:w-1/3 from-blue-zion to-blue-zion_cyan text-center py-3 rounded-xl"
                className='border-white border-1 p-3 md:w-1/3 text-center hover:bg-white hover:text-black'
              >
                <button type="button">Your earnings</button>
              </Link>

              <Link
                to="/stake-zionlions-v2"
                // className="bg-gradient-to-b font-bold w-full md:w-1/3 from-blue-zion to-blue-zion_cyan text-center py-3 rounded-xl"
                className='border-white border-1 p-3 md:w-1/3 text-center hover:bg-white hover:text-black'
              >
                <button type="button">Your NFT rewards</button>
              </Link>

              <a
                href="https://send.zionlabs.info/"
                target="_blank"
                rel="noreferrer"
                // className="bg-gradient-to-b font-bold w-full md:w-1/3 from-newpurple-400 to-newpurple-900 text-center py-3 rounded-xl"
                className='border-white border-1 p-3 md:w-1/3 text-center hover:bg-white hover:text-black'
              >
                <button type="button">NFT Transporter</button>
              </a>
            </div>
          </div>
          {/* <div className="images hidden md:block md:w-6/12 text-right"> */}
          <div className="images hidden md:block md:w-1/4 text-right">
            {/* <LazyLoadImage src={HeroImage} alt="Logo" className="w-full mx-auto" effect="blur" /> */}
          </div>
        </div>
        <div className=" w-full md:flex md:max-w-screen-xl md:mx-auto items-center md:flex-row space-x-8 my-32 md:my-20" style={{display
        :'none'}}>
          {counter.map((item, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={150 * index}
                className="w-1/4 bg-red-rasta rounded-xl text-center py-6 shadow-inset"
                key={index}
              >
                <div className="number text-3xl font-bold">{item.numbers}</div>
                <div className="desc">{item.label}</div>
              </div>
            )
          })}
        </div>
      </div>
      {/* <CarouselSlider/> */}
    </div>
  )
}
