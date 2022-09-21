import React from 'react'
import Background from '../../../assets/education-background.jpg'

export default function Hero() {
  return (
    <>
      <div
        className="py-32 md:py-0 md:h-screen flex items-center justify-center"
        style={{
          backgroundColor: '#00000059',
          backgroundImage: `url(${Background})`,
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
          backgroundAttachment: 'fixed',
        }}
      >
        <h1 className="text-white text-2xl" data-aos="fade-up" data-aos-duration="1000">
          Zion Education Hub
        </h1>
      </div>
    </>
  )
}
