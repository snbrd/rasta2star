import React from 'react'

// type Props = {
//   images: any
//   title: string
//   desc: string
//   btn: any
// }
type Props = {
  images: any
  desc: string
}

export default function HeroSection({ images, desc }: Props) {
  return (
    <div>
      <div
        className="flex w-full flex-col bg-cover bg-center bg-blend-overlay text-white py-16 px-6 md:px-0 items-center md:pt-40 md:pb-40"
        style={{
          background: `url(${images}) rgb(0 0 0 / 22%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-4xl font-bold text-center">
          Art is our asset, RASTA is our currency.
          <br />
          Building something dope on blockchain
        </h1>
        <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="100" className="mt-4 hidden">
          {desc}
        </p>
        {/* <a
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="200"
          href={btn.link}
          className="bg-gradient-to-b from-blue-zion to-blue-zion_cyan mt-12 px-4 w-64 text-center py-2 rounded-xl"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="">
            {btn.label}
          </button>
        </a> */}
      </div>
    </div>
  )
}
