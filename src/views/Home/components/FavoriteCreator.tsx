import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import BgImage from '../../../assets/favCreator-bg-leafs.jpg'
import StakingCard from './FarmStakingCard'
import CakeStats from './CakeStats'
import TotalValueLockedCard from './TotalValueLockedCard'

export default function FavoriteCreator() {
  const { account } = useWallet()

  return (
    <div>
      <div
        className="flex w-full flex-col text-white py-16 md:py-32"
        style={{
          backgroundImage: `url(${BgImage})`,
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
              <span className="text-yellow-rasta">Completely Decentralized.</span>
            </h2>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="desc max-w-full md:max-w-xl mx-auto">
              <p className="mt-4 px-8">
                We are bridging creators with their fans, using the latest in blockchain technology. Interact with your
                favorite artist, pledge support, and earn money. All through your own private screen and wallet.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100" className="cta flex flex-row mt-4 space-x-8 items-center text-center">
              <Router>
                <a
                  href="https://zionlp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gradient-to-r font-bold text-white mx-auto from-yellow-rasta to-green-rasta_cta text-center py-3 px-8 rounded-xl"
                >
                  <button type="button" className="uppercase">
                    GO TO ZIONLP
                  </button>
                </a>
              </Router>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-3  w-full bg-white text-black md:pt-8 md:pb-8">
        <div className="cus-mx grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center my-8 md:my-16 px-5 gap-10 xl:mx-20 lg:mx-20">
          {account ? (
            <StakingCard />
          ) : (
            <div
              data-aos="fade-up" data-aos-duration="1000"
              className="cus-h"
              style={{
                backgroundImage: `url(/images/Background.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              <div className="pb-5 row flex flex-col justify-center items-center h-full text-white">
                <span className="text-2xl">Farms & Staking</span>
                <span className="text-sm">Please Connect Wallet to Unlock</span>
              </div>
            </div>
          )}
          {account ? (
            <CakeStats />
          ) : (
            <div
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
              className="cus-h"
              style={{
                backgroundImage: `url(/images/Background.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              <div className="pb-5 row flex flex-col justify-center items-center h-full text-white">
                <span className="text-2xl">RASTA Stats</span>
                <span className="text-sm">Please Connect Wallet to Unlock</span>
              </div>
            </div>
          )}
          {account ? (
            <TotalValueLockedCard />
          ) : (
            <div
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
              className="cus-h"
              style={{
                backgroundImage: `url(/images/Background.png)`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            >
              <div className="pb-5 row flex flex-col justify-center items-center h-full text-white">
                <span className="text-2xl">Total Value Locked (TVL)</span>
                <span className="text-sm">Please Connect Wallet to Unlock</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gradient-to-r text-white from-red-rasta to-yellow-rasta py-16">
        <div className="flex flex-col mx-auto md:flex-row w-full px-4 space-y-6 mb-1 md:space-y-0 md:px-0 md:w-10/12 md:mb-0 mx-autoitems-center">
          <div data-aos="fade-right" data-aos-duration="1000" className="text w-full md:w-8/12 text-center md:text-left">
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
      </div>
    </div>
  )
}
