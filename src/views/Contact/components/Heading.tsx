import React from 'react'
// import images from '../../../assets/contact-header.jpg'
import images from '../../../assets/Contact-Info.jpg'
import ArtistsImages from '../../../assets/nft-artits.png'

export default function Heading() {
  return (
    <div
      className="w-full pb-32 md:bg-blend-soft-light"
      style={{
        backgroundImage: `url(${images}), url(${ArtistsImages})`,
        backgroundSize: 'cover, 90%',
        backgroundPosition: 'center center, center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-screen-xl text-white flex flex-col mx-auto pt-8 pb-16 px-4 md:px-0 md:py-56">
        {/* <h1 className="text-4xl font-bold text-center">{title}</h1> */}
        {/* <p className="mt-8 leading-loose  text-center">{desc}</p> */}
      </div>
    </div>
  )
}
