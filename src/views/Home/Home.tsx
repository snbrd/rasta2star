import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import AnimatedPage from 'components/AnimatedPage'
import HeroSection from './components/HeroSection'
// import Community from './components/Community'
import FavCreator from './components/FavoriteCreator'
// import ZIONLIONImage from '../../assets/zionlion-nft.jpg'
import ZIONLIONImage from '../../assets/zionlion-nfts.jpg'
// import NFTNomicsImage from '../../assets/NFTNomics-n.png'
import Mint from './components/Mint'
import CarouselSlider from './components/CarouselSlider'

const Home: React.FC = () => {
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
          <CarouselSlider/>
          {/* <Mint /> */}
          {/* <Community /> */}

          <div className="flex w-full bg-white text-black flex-col py-12 md:py-16">
            <div className="container mx-auto">
                <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl text-center md:text-5xl font-bold leading-tight">
                ZION LION NFTs
                </h2>

                <div className='flex flex-col gap-y-5 mt-10 lg:px-24'>
                  <p className='text-center'>
                  Welcome to Zion Labs&apos; Novel Collection of Zion Lions - the ultimate NFT collection for collectors and enthusiasts looking for unique and valuable digital assets.
                  </p>
                  <p className='text-center'>
                  The Zion Lions are a one-of-a-kind collection of 6200 randomly minted NFTs, each with its own rarity class and corresponding rewards. As a collector, you have the opportunity to acquire one or more of these rare and valuable digital assets and stake them on our platform to earn high APR rewards.
                  </p>
                  <p className='text-center'>
                  What sets the Zion Lions apart from other NFT collections is their set BNB value, which provides a transparent and reliable way to evaluate their worth. Whether you&apos;re a seasoned collector or just getting started, the Zion Lions offer a unique and exciting opportunity to participate in the rapidly growing world of NFTs.
                  </p>
                  <p className='text-center'>
                  To acquire your own Zion Lion, simply visit our minting page and purchase a randomly generated NFT from our collection. With affordable minting fees and the potential for high rewards, the Zion Lions are the perfect addition to any NFT collection.
                  </p>
                  <p className='text-center'>
                  Join our community of collectors and enthusiasts today and start minting your Zion Lions on Zion Labs&apos; platform!
                  </p>

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
                        <li>10% Liquidity for Rasta/BNB locked pool</li>
                        <li>35% Rasta buy back</li>
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
                          Farmer Upto 15% APR
                        </li>
                        <li>
                          {/* User receives 70% of Harvest (2 years) */}
                          Explorer Upto 122%APY
                        </li>
                        <li>
                          {/* 20% for Marketing */}
                          Builder Upto 128% APR
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
        </section>
      </div>
    // </AnimatedPage>
  )
}

export default Home
