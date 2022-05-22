import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import CommunityImage from '../../../assets/community-lion.png'

export default function Community() {
  return (
    <div>
      <div className="flex w-full  py-16 bg-white text-black flex-col">
        <div className="flex w-full mb-1 md:max-w-screen-xl md:mx-auto items-center px-4 md:px-0 md:flex-row md:mb-0">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50" className="images md:w-6/12 text-center hidden md:block">
            <LazyLoadImage src={CommunityImage} alt="Logo" className="w-full mx-auto" effect="blur" />
          </div>
          <div className="leftSection md:w-6/12">
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-4xl md:text-5xl font-bold pr-0 md:pr-48 text-center md:text-left leading-tight">
              Join The Community That Cares
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="mt-8 text-center md:text-left">
              Built by the very same people that <br />
              make up this loving community. <br />
              Powered by the People!
            </p>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" className="cta flex flex-col px-4 md:px-0 md:flex-row mt-8 space-y-3 md:space-y-0 space-x-0 md:space-x-8">
              <a
                href="https://docs.zionlabs.info"
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r font-bold text-white w-full md:w-1/3 from-yellow-rasta to-green-rasta_cta text-center py-3  rounded-xl"
              >
                <button type="button">Whitepaper</button>
              </a>
              <a
                href="https://t.me/rastafinance"
                target="_blank"
                rel="noreferrer"
                className="border-2 font-bold border-green-rasta_cta text-green-rasta_cta py-3 rounded-xl w-full md:w-1/3 text-center"
              >
                <button type="button">Join The Community</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
