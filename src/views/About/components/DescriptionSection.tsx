import React from 'react'

export default function DescriptionSection() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-screen-xl mx-auto text-center text-black space-y-6"
    >
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold pr-0">What is RASTA?</h2>
        <hr className="w-1/2 md:w-1/6 mx-auto border-2 border-blue-zion_cyan" />
      </div>
      <p>
        RASTA is our tax-free currency for the Zion Labs artistic ecosystem. Our art and launchpad creation is our
        stored value.
      </p>

      <p>
        35% of all ZIONLION BNB Art Sales are used to store in the Big Fat Rasta treasury, creating an everlasting
        increase of value through art.
      </p>

      <p>10% of all Rasta staking rewards are put into liquidity to maintain effective trading.</p>

      <p>
        For a sustainable future and longevity of our Zion Labs ecosystem, we will always be tax-free. We believe art
        has a big future in blockchain adoption.
      </p>
      {/* <p>
      Conceptualized in 2020, Zion Labs is a decentralized community project that helps music artists and creatives gain funding to further their careers via the Zion Launchpad.
      </p>
      <p>
      A crowdfunding platform designed to encourage entertainment engagement and investment opportunity for it&apos;s community.
      </p> */}
      {/* <p>So connect your browser-based wallet, and join the Decentralized REVOLUTION!</p> */}
    </div>
  )
}
