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
              <div className="mx-auto mb-8">
              <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl text-center md:text-5xl font-bold leading-tight">
             NFTNOMICS
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
                  className="items-center flex justify-center flex-1 pb-4 px-5 md:px-0 md:pb-0"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <LazyLoadImage src={ZIONLIONImage} alt="t4-professor" className="w-auto" effect="blur" />
                </div>

                <div className="flex flex-col px-3 md:px-12 space-y-6">
                  <div
                    className="h-full shadow-xl p-8 rounded-lg flex flex-col justify-between space-y-5"
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
                    className="h-full shadow-xl p-8 rounded-lgg flex flex-col justify-between space-y-5"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    <div className="card-title flex justify-between">
                      <h2 className="md:text-xl font-bold pr-0 md:pr-48 text-left md:text-left leading-tight flex-1">
                        {/* Launchpad NFTs - MRASTA */}
                        STAKING TOKENOMICS
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
                          Harvest is locked for 30 days
                        </li>
                        <li>
                          User receives 70% of Harvest (2 years)
                        </li>
                        <li>
                          20% for Marketing
                        </li>
                        <li>
                          10% of all Harvest rewards are put into liquidity for MRASTA/RASTA LP
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

                  <div
                    className="h-full shadow-xl p-8 rounded-lg flex flex-col justify-between space-y-5"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="300"
                  >
                    <div className="card-title flex justify-between items-center">
                      <h2 className="md:text-xl font-bold pr-0 md:pr-48 text-left md:text-left leading-tight flex-1">
                        {/* Launchpad Staking Tokenomics */}
                        SALE TOKENOMICS
                      </h2>

                      {/* <a
                        className="bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 px-8 rounded-xl"
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
                        </li>
                        {/* <li>Harvest is locked for 30 days (for both artists and users)</li>
                        <li>User receives 65% of Harvest (2 years)</li>
                        <li>Artist receives 25% of Harvest (90 days)</li>
                        <li>10% of all Harvest rewards are put into liquidity for MRASTA/RASTA LP</li> */}
                      </ul>
                    </div>

                    {/* <div className="card-footer text-center md:text-left">
                      
                    </div> */}
                  </div>
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
