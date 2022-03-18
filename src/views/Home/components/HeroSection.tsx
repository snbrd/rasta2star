import React from 'react'
import { Link } from 'react-router-dom'
import HeroImage from '../../../assets/home-header.jpg'

export default function HeroSection() {
  const counter = [
    { label: 'Months Active', numbers: '11' },
    { label: 'Holders', numbers: '3,618' },
    { label: 'Transfers', numbers: '257,613' },
    { label: 'Network', numbers: 'BSC (BEP20)' },
  ]
  return (
    <div>
      <div className="flex w-full  py-16 text-white flex-col" style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left center',
      }}>
        <div data-aos="fade-up" data-aos-duration="1000" className="flex w-full px-8 md:px-0 md:max-w-screen-xl md:mx-auto items-center flex-col md:flex-row">
          <div className="leftSection w-full md:w-6/12">
            <h1 className="text-4xl font-bold text-center md:text-left md:pr-48 leading-tight">
              <span className="text-yellow-rasta">Empowering Artists</span>
              <br /> ZION LaunchPad
            </h1>
            <p className="mt-8 text-center md:text-left">
              ZION LP by Rasta, unites artists with their fanbase, offering a revolutionary suite of tools that empowers creators.
              Built upon the foundation of Web3.0, Rasta utilizes latest in blockchain technology to earn more income for those that deserve it.
            </p>
            <div className="cta flex-row mt-8 space-x-8 hidden md:flex">
              <Link
                to="/farms"
                className="bg-gradient-to-r font-bold w-1/3 from-yellow-rasta to-green-rasta_cta text-center py-3 rounded-xl"
              >
                <button type="button">Farm Rasta Now</button>
              </Link>
              <a
                href="https://rastadex.croxswap.com"
                className="bg-gradient-to-r border-2 font-bold border-yellow w-1/3 from-green-rasta to-yellow-rasta_cta text-center py-3 rounded-xl"
              >
                <button type="button">Buy Rasta</button>
              </a>
            </div>
          </div>
          <div className="images hidden md:block md:w-6/12 text-right">
            {/* <LazyLoadImage src={HeroImage} alt="Logo" className="w-full mx-auto" effect="blur" /> */}
          </div>
        </div>
        <div className=" w-full hidden md:flex md:max-w-screen-xl md:mx-auto items-center md:flex-row space-x-8 my-32">
          {counter.map((item, index) => {
            return (
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay={150 * index} className="w-1/4 bg-red-rasta rounded-xl text-center py-6 shadow-inset" key={index}>
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
