import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'

// import BgImage from '../../../assets/favCreator-bg-leafs.jpg'
import StakingCard from './FarmStakingCard'
import CakeStats from './CakeStats'
import TotalValueLockedCard from './TotalValueLockedCard'
import SpaceBackground from '../../../assets/Interact-with-your-favorit-creators.jpg'

export default function FavoriteCreator() {
  const { account } = useWallet()

  return (
    <div>
      <div
        className="flex w-full flex-col text-white py-12 md:py-16"
        style={{
          // backgroundImage: `url(${BgImage})`,
          backgroundImage: `url(${SpaceBackground})`,
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex mb-2 w-full md:max-w-screen-xl md:mx-auto items-center md:flex-row text-center">
          <div className="leftSection w-full">
            <h2 data-aos="fade-up" data-aos-duration="1000" className="text-2xl md:text-5xl font-bold leading-tight">
              Interact with Your Favorite Creators.
              <br />
              {/* <span className="text-yellow-rasta">Completely Decentralized.</span> */}
              <span className="text-newpurple-400">with ZION Labs Launchpad</span>
            </h2>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="desc max-w-full md:max-w-xl mx-auto"
            >
              <p className="mt-4 px-8">
                We are bridging creators with their fans, using the latest in blockchain technology. Interact with your
                favorite artist, pledge support, and earn rewards. All through your own private screen and wallet.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="cta flex flex-row mt-4 mb-2 space-x-8 items-center text-center"
            >
              <Router>
                {/* <a
                  href="https://zionlp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r font-bold text-white mx-auto from-yellow-rasta to-green-rasta_cta text-center py-3 px-8 rounded-xl"
                >
                  <button type="button" className="uppercase">
                    GO TO ZIONLP
                  </button>
                </a> */}
                <a
                  href="https://www.zionlp.com/launchpad-artists"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-b font-bold text-white mx-auto from-newpurple-400 to-newpurple-900 text-center py-3 px-8 rounded-xl"
                >
                  <button type="button" className="uppercase ">
                    Launchpad
                  </button>
                </a>
              </Router>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-6 pb-6  w-full bg-white text-black md:pt-4 md:pb-4">
        <div className="cus-mx grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center my-8 md:my-16 px-5 gap-10 xl:mx-20 lg:mx-20">
          {account ? (
            <StakingCard />
          ) : (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="cus-h rounded-md"
              style={{
                backgroundColor: '#fff',
                backgroundImage: `url(/images/lion1.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              <div className="pb-5 row flex flex-col justify-end items-center h-full text-white rounded-lg shadow-2xl">
                <div
                  className="flex flex-col text-center w-full py-4 rounded-md"
                  style={{
                    backgroundColor: '#000000cf',
                  }}
                >
                  <span className="text-2xl">Staking</span>
                  <span className="text-sm">Please Connect Wallet to Unlock</span>
                </div>
              </div>
            </div>
          )}
          {account ? (
            <CakeStats />
          ) : (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="cus-h rounded-md"
              style={{
                backgroundColor: '#fff',
                backgroundImage: `url(/images/lion2.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              <div className="pb-5 row flex flex-col justify-end items-center h-full text-white rounded-lg shadow-2xl">
                <div
                  className="flex flex-col text-center w-full py-4 rounded-md"
                  style={{
                    backgroundColor: '#000000cf',
                  }}
                >
                  <span className="text-2xl">RASTA Stats</span>
                  <span className="text-sm">Please Connect Wallet to Unlock</span>
                </div>
              </div>
            </div>
          )}
          {account ? (
            <TotalValueLockedCard />
          ) : (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              className="cus-h rounded-md"
              style={{
                backgroundColor: '#fff',
                backgroundImage: `url(/images/lion3.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              <div className="pb-5 row flex flex-col justify-end items-center h-full text-white rounded-lg shadow-2xl">
                <div
                  className="flex flex-col text-center w-full py-4 rounded-md"
                  style={{
                    backgroundColor: '#000000cf',
                  }}
                >
                  <span className="text-2xl">Total Value Locked (TVL)</span>
                  <span className="text-sm">Please Connect Wallet to Unlock</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className="bg-gradient-to-r text-white from-red-rasta to-yellow-rasta py-16">
        <div className="flex flex-col mx-auto md:flex-row w-full px-4 space-y-6 mb-1 md:space-y-0 md:px-0 md:w-10/12 md:mb-0 mx-autoitems-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text w-full md:w-8/12 text-center md:text-left"
          >
            <span className="text-2xl font-bold block">REQUEST A LAUNCH:</span>
            <span className="block">
              Sign up to join the community as an artist, and receive direct financial benefit from your fan-base and
              the entire RastaCommunity.
            </span>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="text w-full md:w-4/12 text-center md:mt-8">
            <Router>
              <Link
                to="/"
                className="bg-red-rasta w-6/12 md:w-full font-bold text-white mx-auto text-center py-4 px-8 mb-0 md:mb-0 rounded-xl flex items-center"
              >
                <button type="button" className="w-full ">
                  COMING SOON
                </button>
              </Link>
            </Router>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-gradient-to-b text-white from-blue-zion to-blue-zion_cyan py-12 md:py-16">
        <div className="flex flex-col mx-auto md:flex-row w-full px-4 space-y-6 mb-1 md:space-y-0 md:px-0 md:w-10/12 md:mb-0 mx-autoitems-center">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text w-full md:w-8/12 text-center md:text-left"
          >
            <span className="text-2xl font-bold block">REQUEST A LAUNCH:</span>
            <span className="block">
              Sign up to join the community as an artist, and receive direct financial benefit from your fan-base and
              the entire RastaCommunity.
            </span>
          </div>
          <div className="text w-full md:w-2/12 text-center hidden md:block md:mt-8">&nbsp;</div>
          <div data-aos="fade-left" data-aos-duration="1000" className="text w-full md:w-2/12 text-center md:mt-8">
            <Router>
              <Link
                to="/"
                className="w-6/12 md:w-full font-bold text-white mx-auto text-center py-2 px-6 mb-0 md:mb-0 rounded-xl flex items-center border-2 mt-4"
              >
                <button type="button" className="w-full ">
                  COMING SOON
                </button>
              </Link>
            </Router>
          </div>
        </div>
      </div> */}
    </div>
  )
}
