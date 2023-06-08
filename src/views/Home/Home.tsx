import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { Link } from 'react-router-dom'
// import AnimatedPage from 'components/AnimatedPage'
import HeroSection from './components/HeroSection'
// import Community from './components/Community'
import FavCreator from './components/FavoriteCreator'
// import ZIONLIONImage from '../../assets/zionlion-nft.jpg'
import ZIONLIONImage from '../../assets/zionlion-nfts.jpg'
// import NFTNomicsImage from '../../assets/NFTNomics-n.png'
// import Mint from './components/Mint'
import CarouselSlider from './components/CarouselSlider'
import nftimage from '../../assets/newimage/home-image.png'
import { CardsData } from './components/Data'
import FlippingCard from './components/Card'

const Home: React.FC = () => {

  const [count, setCount] = useState(6)

  const viewMore = () => {
    setCount(count+6)
  }

  const showLess = () => {
    setCount(6)
  }

  const visibleLions = CardsData.slice(0,count)

  return (
    // <Page>
    //   <Hero>
    //     <Heading as="h1" size="xl" mb="24px" color="#543212">
    //       {TranslateString(576, 'zionlabs.info')}
    //     </Heading>
    //     <Text color="black">{TranslateString(578, 'Community Driven High Yield AMM')}</Text>
    //   </Hero>
    //   <div>
    //     <Cards>
    //       <FarmStakingCard />
    //       <TwitterCard />
    //     </Cards>
    //     <CTACards>
    //       <CakeStats />
    //       <TotalValueLockedCard />
    //     </CTACards>
    //   </div>
    // </Page>
    // <AnimatedPage>
    <div>
      <section>
        <HeroSection />
        {/* <CarouselSlider/> */}
        {/* <Mint /> */}
        {/* <Community /> */}

        {/* card flip */}
        <div className="flex w-full bg-white text-black flex-col py-12 md:py-16 px-10 md:px-0 items-center s">
          <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl text-center md:text-5xl font-bold leading-tight">
          Big Win competition
          </h2>
          {/* <div className='px-4 md:px-64 text-center mt-5'>

          </div> */}

          <div className='px-4 md:px-64 text-center mt-10 flex flex-col items-center justify-center'>
            {/* <p>Are you ready to roar with the Zion Lion Mint Competition? Mint your own unique digital artwork and enter to win rare and valuable NFTs and cash prizes, and even two Pancake Squad NFT worth up to $3000 each! Hold your NFT and enter additional mini-competitions for even more chances to win big.</p> */}
            <div className='flex flex-col gap-y-3'>
              
            <p>
            Are you ready to roar with the Zion Lion Mint Competition? Mint your own unique digital artwork!
            </p>

            <p>
            Enter to win rare, valuable NFTs and cash prizes! 
            </p>

            <p>
            Even two Pancake Squad NFT worth up to $3000 each are at stake! Hold your NFT and enter additional mini-competitions for even more chances to win big.
            </p>
            </div>

            <Link className='w-1/3 flex mt-10 flex-row text-white py-2 bg-black items-center justify-center space-x-4 cursor-pointer' to="/win-big">Big Win</Link>
          </div>

          <div className='container mx-auto py-5 md:py-10 md:px-10 mt-5'>
          <div className='px-4 md:px-64 text-center'>
          <h3 data-aos="fade-up" data-aos-duration="1000" className="text-xl text-center md:text-3xl font-bold leading-tight mb-4">
          Current finalist for the big win
          </h3>
</div>
          <div className='grid grid-cols-2 md:grid-cols-6'>
            {/* {CardsData.map((card,index) => ( */}
            {visibleLions.map((card,index) =>(
              <FlippingCard key={index} card={card}/>
            ))}
              
          </div>

          {visibleLions.length < CardsData.length ? 
            <div className='w-full flex flex-col justify-center items-center'>
              <button className='w-1/3 flex mt-10 flex-row text-white py-2 bg-black items-center justify-center space-x-4 cursor-pointer' type='button' onClick={viewMore}>Load More</button> 

            </div>
            :
            <div className='w-full flex flex-col justify-center items-center'>
              <button className='w-1/3 flex mt-10 flex-row text-white py-2 bg-black items-center justify-center space-x-4 cursor-pointer' type='button' onClick={showLess}>Show Less</button>  
            </div>
            }
          </div>
        </div>
      {/* end */}

        {/* new section | later */}
        {/* <div className="zion-transporter flex w-full text-white flex-col py-12 md:py-16 px-10 md:px-0 items-center" style={{
          backgroundColor: '#00000059',
          backgroundImage: `url(${ZTPBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'multiply',
          backgroundAttachment: 'fixed',
        }}>
          <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl text-center md:text-5xl font-bold leading-tight">
            Zion Transporter
          </h2>

          <div className='px-4 md:px-64 text-center mt-10'>
            <p>Zion Transporter offers seamless and cost-effective NFT transactions on Binance Smart Chain. With our cutting-edge technology, you can bulk send up to 500 NFTs from multiple wallets to multiple recipients while saving on gas fees. Say goodbye to the hassle of individual transfers and hello to Zion Transporter. Try it now for the ultimate NFT transaction experience!</p>
          </div>

          <div className='px-10 md:px-64 text-center mt-10 mb-10 md:mb-0'>
            <a className='p-3 border-1 border-white mt-10' href='https://send.zionlabs.info/'>NFT Center</a>
          </div>

          <div>
            <img src={ZTPTable} alt="table" className='hidden md:block -mt-20' />
            <img src={ZTPTableMobile} alt="table" className='block md:hidden' />
          </div>
        </div> */}

        {/* end new section | later */}

        {/* <div className="flex w-full bg-white text-black flex-col py-12 md:py-16 px-10 md:px-0"> */}
        <div className="flex w-full bg-black text-white flex-col py-12 md:py-24 px-10 md:px-0">
          <div className="container mx-auto">
            <div className='grid md:grid-cols-2 gap-y-16'>
              <div>
                <img src={nftimage} alt='ppt' />
              </div>

              <div>
                <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl text-center md:text-5xl font-bold leading-tight">
                  ZION LION NFTs
                </h2>

                <div className='flex flex-col gap-y-5 mt-10 lg:px-24'>
                  <p className='text-center md:text-left'>
                    Zion Labs&apos; Novel Collection of Zion Lions is the ultimate NFT collection for collectors and enthusiasts seeking unique and valuable digital assets. This one-of-a-kind collection includes 6200 randomly minted NFTs, each with a rarity class and corresponding rewards.
                  </p>
                  <p className='text-center  md:text-left'>
                    You can acquire rare and valuable digital assets and earn high APR rewards by staking them on our platform. The Zion Lions stand out from other NFT collections with their set BNB value, making it easy to evaluate their worth. To acquire your own Zion Lion, simply visit our minting page and purchase a randomly generated NFT from our collection.
                  </p>
                  <p className='text-center  md:text-left'>
                    With affordable minting fees and the potential for high rewards, the Zion Lions are the perfect addition to any NFT collection. Join our community of collectors and enthusiasts today and start minting your Zion Lions on Zion Labs&apos; platform!
                  </p>

                  <div className='w-full text-center mt-10 mb-2 lg:mb-8'>
                    <Link className='border-white border-1 p-3 md:w-1/3 text-center hover:bg-white hover:text-black' to="/mint">Mint Collection</Link>
                  </div>
                </div>
              </div>


            </div>

          </div>
        </div>

        <div className="flex w-full bg-white text-black flex-col py-12 md:py-16">
          <div className="container mx-auto">
            <div className="mx-auto mb-8">
              <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl text-center md:text-5xl font-bold leading-tight">
                {/* NFTNOMICS */}

                ZION LION NFTNOMICS
              </h2>
              {/* <LazyLoadImage
                  src={NFTNomicsImage}
                  alt="nftnomics"
                  className="md:w-1/3 mx-auto px-10 md:px-0"
                  effect="blur"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                /> */}
            </div>

            <div className="flex flex-col md:flex-row">
              <div
                className="items-center flex justify-center flex-1 pb-4 px-5 md:px-16 md:pb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <LazyLoadImage src={ZIONLIONImage} alt="t4-professor" className="w-full" effect="blur" />
              </div>

              <div className="flex flex-col px-3 md:px-12 space-y-6">
                <div
                  className="h-full shadow-xl p-8 rounded-lg flex flex-col justify-center space-y-5"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <div className="card-title flex justify-between items-center">
                    <h2 className="md:text-xl font-bold pr-0 md:pr-48 text-left md:text-left leading-tight flex-1">
                      ZIONLION - BNB
                    </h2>

                    {/* <a
                        className="bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 px-8 rounded-xl"
                        href="https://docs.zionlabs.info/introduction/zion-lions-of-zion-island-nfts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a> */}
                  </div>

                  <div className="card-body">
                    <ul className="space-y-2">
                      <li>5% Sweep the floor</li>
                      <li>10% Liquidity for ZION/BNB locked pool</li>
                      {/* <li>10% Liquidity for Rasta/BNB locked pool</li> */}
                      {/* <li>35% Rasta buy back</li> */}
                      <li>35% ZION buy back</li>
                      <li>50% Creators</li>
                    </ul>
                  </div>

                  {/* <div className="card-footer text-center md:text-left">
                      
                    </div> */}
                </div>

                <div
                  className="h-full shadow-xl p-8 rounded-lgg flex flex-col justify-center space-y-5"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div className="card-title flex justify-between">
                    <h2 className="md:text-xl font-bold pr-0 md:pr-48 text-left md:text-left leading-tight flex-1">
                      {/* Launchpad NFTs - MRASTA */}
                      {/* STAKING TOKENOMICS */}
                      0.18BNB Stake Weight
                    </h2>

                    {/* <a
                        className="bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 items-center px-8 rounded-xl"
                        href="https://docs.zionlabs.info/zion-launchpad/zion-launchpad-nfts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a> */}
                  </div>

                  <div className="card-body">
                    <ul className="space-y-2">
                      <li>
                        {/* Harvest is locked for 30 days */}
                        Farmer Up to 15% APR
                      </li>
                      <li>
                        {/* User receives 70% of Harvest (2 years) */}
                        Explorer Up to 122%APY
                      </li>
                      <li>
                        {/* 20% for Marketing */}
                        Builder Up to 128% APR
                      </li>
                      <li>
                        {/* 10% of all Harvest rewards are put into liquidity for MRASTA/RASTA LP */}
                        Professor - Mega APR
                      </li>
                      {/* <li>25% to Artist</li>
                        <li>25% to Creator</li>
                        <li>20% to Rare NFT Pool</li>
                        <li>15% to Genesis Prize Pool</li>
                        <li>15% to Future Pool (Stored)</li> */}
                    </ul>
                  </div>

                  {/* <div className="card-footer text-center md:text-left">
                      
                    </div> */}
                </div>

                {/* <div
                    className="h-full shadow-xl p-8 rounded-lg flex flex-col justify-between space-y-5"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <div className="card-title flex justify-between items-center">
                      <h2 className="md:text-xl font-bold pr-0 md:pr-48 text-left md:text-left leading-tight flex-1"> */}
                {/* Launchpad Staking Tokenomics */}
                {/* SALE TOKENOMICS
                      </h2> */}

                {/* <a
                        className="bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 px-8 rounded-xl"
                        href="https://docs.zionlabs.info/zion-launchpad/zion-launchpad-nfts"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read More
                      </a> */}
                {/* </div>

                    <div className="card-body">
                      <ul className="space-y-2">
                        <li>
                          20% to Music Artist
                        </li>
                        <li>
                          10% to Artist Management / Label
                        </li>
                        <li>
                          15% to Music Artist Marketing Fund
                        </li>
                        <li>
                          25% to Zion Labs
                        </li>
                        <li>
                          25% T4 professor
                        </li>
                        <li>
                          5% to Rasta farms
                        </li> */}
                {/* <li>Harvest is locked for 30 days (for both artists and users)</li>
                        <li>User receives 65% of Harvest (2 years)</li>
                        <li>Artist receives 25% of Harvest (90 days)</li>
                        <li>10% of all Harvest rewards are put into liquidity for MRASTA/RASTA LP</li> */}
                {/* </ul>
                    </div> */}

                {/* <div className="card-footer text-center md:text-left">
                      
                    </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div style={{ height: '0.5rem' }}>&nbsp;</div>
        </div>
        <FavCreator />
        <CarouselSlider />
      </section>
    </div>
    // </AnimatedPage>
  )
}

export default Home
