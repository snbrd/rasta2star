import React from 'react'

export default function Hero() {
  return (
    <>
      <div
        className="py-32 md:py-0 md:h-screen flex items-center justify-center"
        style={{
          backgroundColor: '#00000059',
          backgroundImage: `url(https://i.ibb.co/NsvjBXN/1-Gxj-Ed8-O2-K9-Bc1-Z-2f273-Mg.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
          backgroundAttachment: 'fixed',
        }}
      >
        <h1 className="text-white text-4xl font-bold" data-aos="fade-up" data-aos-duration="1000">
          Zion Education Hub
        </h1>
      </div>
    </>
  )
}
