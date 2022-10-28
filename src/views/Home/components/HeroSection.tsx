import React from 'react'
import { Link } from 'react-router-dom'
// import HeroImage from '../../../assets/home-header.jpg'
// import HeroImage from '../../../assets/hero-new-background-zion.jpg'

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
        className="flex w-full bg-opacity-50 py-0 md:py-0 md:justify-between text-white flex-col h-screen"
        style={{
          backgroundColor: '#000',
          // backgroundImage: `url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      >
        <video autoPlay muted loop id="myVideo" className="absolute invisible md:visible w-auto h-screen md:left-48">
          {/* <source src='/hero-video.mp4' type="video/mp4"/> */}
          <source src="/new-hero-video.mp4" type="video/mp4" />
        </video>

        <div className="flex w-full px-8 md:px-0 md:max-w-screen-xl md:mx-auto items-center flex-col md:flex-row justify-center h-full z-20 md:mt-48">
          <div className="leftSection w-full md:w-6/12 md:pl-16">
            <h1
              className="text-4xl font-bold text-center md:text-left md:pr-48 leading-tight"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <span className="text-blue-zion_cyan">Zion Labs</span>
              <br /> <span className='hidden md:block'>#ZionArmy #ZionLions #ZionArmyTakeover</span>
            </h1>
            <p className="mt-8 text-center md:text-left" data-aos="fade-right" data-aos-duration="2000">
              For a sustainable future and longevity of our Zion Labs ecosystem, we will always be tax-free. Our
              currency grows value from NFT art sales which we believe will play a big role in the future of blockchain
              adoption.
            </p>
            <div className="cta flex-row mt-8 space-x-8 hidden md:flex" data-aos="fade-right" data-aos-duration="2500">
              <Link
                to="/liquidity"
                className="bg-gradient-to-b font-bold w-1/3 from-blue-zion to-blue-zion_cyan text-center py-3 rounded-xl"
              >
                <button type="button">Stake Rasta</button>
              </Link>

              <a
                href="https://docs.zionlabs.info/introduction/master"
                target="_blank"
                rel="noreferrer"
                className="border-2 font-bold border-blue-zion_cyan w-1/3 to-blue-zion_cyan text-center py-3 rounded-xl text-blue-zion_cyan"
              >
                <button type="button">Docs</button>
              </a>
            </div>
          </div>
          <div className="images hidden md:block md:w-6/12 text-right">
            {/* <LazyLoadImage src={HeroImage} alt="Logo" className="w-full mx-auto" effect="blur" /> */}
          </div>
        </div>
        <div className=" w-full hidden md:flex md:max-w-screen-xl md:mx-auto items-center md:flex-row space-x-8 my-32 md:my-20 invisible">
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
    </div>
  )
}
