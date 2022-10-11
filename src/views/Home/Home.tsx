import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import HeroSection from './components/HeroSection'
import Community from './components/Community'
import FavCreator from './components/FavoriteCreator'
import ZIONLIONImage from '../../assets/zionlion-nft.jpg'
import NFTNomicsImage from '../../assets/NFTNomics.png'
import MinterImage from '../../assets/minterbg.jpg'

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
    <div>
      <section>
        <HeroSection />
        <iframe src="https://zionlions.vercel.app/" className="w-full minting-app hidden md:block" title="minting"/>
        <div style={{
          backgroundImage: `url(${MinterImage})`,
          backgroundSize: 'cover'
        }} className="w-full py-32 flex flex-col gap-y-5 px-10 block md:hidden">
            <h2 className="text-4xl font-bold pr-0 md:pr-48 text-center leading-tight flex-1 justify-center items-center">
                      ZionLion NFTs
            </h2>

            <a className='bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 px-8 rounded-md w-fit' href='https://mint.zionlabs.info/'>Mobile Mint</a>
        </div>
        <Community />
        <div className="flex w-full  py-16 bg-white text-black flex-col">
          <div className="container mx-auto">
            <div className="mx-auto mb-8">
              <LazyLoadImage
                src={NFTNomicsImage}
                alt="nftnomics"
                className="md:w-1/3 mx-auto px-10 md:px-0"
                effect="blur"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>

            <div className="flex flex-col md:flex-row">
              <div
                className="items-center flex justify-center flex-1 pb-4 md:pb-0"
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

                    <a
                      className="bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 px-8 rounded-xl"
                      href="https://docs.zionlabs.info/introduction/zion-lions-of-zion-island-nfts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
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
                      Launchpad NFTs - MRASTA
                    </h2>

                    <a
                      className="bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 items-center px-8 rounded-xl"
                      href="https://docs.zionlabs.info/zion-launchpad/zion-launchpad-nfts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </div>

                  <div className="card-body">
                    <ul className="space-y-2">
                      <li>25% to Artist</li>
                      <li>25% to Creator</li>
                      <li>20% to Rare NFT Pool</li>
                      <li>15% to Genesis Prize Pool</li>
                      <li>15% to Future Pool (Stored)</li>
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
                      Launchpad Staking Tokenomics
                    </h2>

                    <a
                      className="bg-gradient-to-b font-bold text-white from-blue-zion to-blue-zion_cyan text-center py-2 px-8 rounded-xl"
                      href="https://docs.zionlabs.info/zion-launchpad/zion-launchpad-nfts"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read More
                    </a>
                  </div>

                  <div className="card-body">
                    <ul className="space-y-2">
                      <li>Harvest is locked for 30 days (for both artists and users)</li>
                      <li>User receives 65% of Harvest (2 years)</li>
                      <li>Artist receives 25% of Harvest (90 days)</li>
                      <li>10% of all Harvest rewards are put into liquidity for MRASTA/RASTA LP</li>
                    </ul>
                  </div>

                  {/* <div className="card-footer text-center md:text-left">
                    
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <FavCreator />
      </section>
    </div>
  )
}

export default Home
