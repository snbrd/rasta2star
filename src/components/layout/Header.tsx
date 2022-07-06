import React, { useState, useEffect } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import WalletConnect from '../../assets/wallet/wallet-connect.png'
import Sidebar from './Sidebar'
import Logo from '../../assets/z1-rescaled.png'
import BinanceWallet from '../../assets/wallet/binance-wallet.png'
import MathWallet from '../../assets/wallet/math-wallet.png'
import MetaMask from '../../assets/wallet/meta-mask.png'
import TokenPocket from '../../assets/wallet/token-pocket.png'
import TrustWallet from '../../assets/wallet/trust-wallet.png'

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const { connect, account, reset } = useWallet()
  const [triger, setTriger] = useState(false)
  const connectWallet = (what) => {
    setShowModal(false)
    if (what !== '') connect(what)
    else connect('injected')
  }

  useEffect(() => {
    if (account) setShowModal(false)
  }, [account])

  useEffect(() => {
    if (!triger) {
      setTriger(true)
      connect("injected")
    }
  }, [connect, triger])

  const wallet = [
    {
      name: 'Metamask',
      icon: MetaMask,
      link: 'injected',
    },
    {
      name: 'TrustWallet',
      icon: TrustWallet,
      link: 'injected',
    },
    {
      name: 'MathWallet',
      icon: MathWallet,
      link: 'injected',
    },
    {
      name: 'TokenPocket',
      icon: TokenPocket,
      link: 'injected',
    },
    {
      name: 'WalletConnect',
      icon: WalletConnect,
      link: 'walletconnect',
    },
    {
      name: 'Binance Chain',
      icon: BinanceWallet,
      link: 'bsc',
    },
  ]

  const displayAddress = (address) => {
    return `${address.substr(0, 4)}...${address.substr(39, 42)}`
  }

  const logout = () => {
    reset()
    setShowInfo(false)
  }
  return (
    <>
      <div>
        <header className="border-b-default border-white border-opacity-50">
          <div className="flex  items-center justify-between w-10/12 mx-auto">
            <Sidebar />
            <div className="logo flex-grow-1 text-center">
              <Link to="/">
                <LazyLoadImage src={Logo} alt="Logo" className="w-64 mx-auto d-block" effect="blur" />
              </Link>
            </div>
            <div className="right-cta items-center flex flex-row">
              {!account ? (
                <button
                  type="button"
                  className="text-white border-1 px-8 py-1 rounded-xl border-green-rasta"
                  onClick={() => setShowModal(true)}
                >
                  Connect
                </button>
              ) : (
                <button
                  type="button"
                  className="text-white border-1 px-8 py-1 rounded-xl border-green-rasta"
                  onClick={() => setShowInfo(true)}
                >
                  {displayAddress(account)}
                </button>
              )}
            </div>
          </div>
        </header>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full md:w-auto my-6 mx-auto max-w-3xl">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-rasta pb-8 outline-none focus:outline-none">
                  {/* header */}
                  <div className="flex items-start justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t ">
                    <h3 className="text-3xl font-semibold">Connect to a Wallet</h3>
                    <button
                      type="button"
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/* body */}
                  <div className="relative p-6 flex">
                    <div className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4">
                      {wallet.map((item, index) => {
                        return (
                          <span
                            className="wallet-wrap flex flex-col space-y-3 bg-gray-inBlack px-2 py-4 rounded-xl items-center cursor-pointer"
                            onClick={() => connectWallet(item.link)}
                            key={index}
                          >
                            <span>
                              <img src={item.icon} alt="icon" />
                            </span>
                            <span>{item.name}</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        ) : null}
        {showInfo && (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-full md:w-auto my-6 mx-auto max-w-3xl">
                {/* content */}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-rasta pb-3 outline-none focus:outline-none">
                  {/* header */}
                  <div className="flex items-start justify-between p-5 border-b-1 border-solid border-gray-100 rounded-t ">
                    <h3 className="text-3xl font-semibold">Your Wallet</h3>
                    <button
                      type="button"
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowInfo(false)}
                    >
                      <span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/* body */}
                  <div className="relative p-6 flex justify-center font-bold text-xl">{account}</div>
                  <div className="relative flex px-4 text-red-rasta">
                    <a
                      className="flex items-center flex-row hover:underline font-bold text-md"
                      href={`https://bscscan.com/address/${account}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on BscScan&nbsp;
                      <FaIcons.FaShareSquare className="text-red-rasta" />
                    </a>
                  </div>
                  <div className="relative p-3 flex justify-center font-bold">
                    <button
                      type="button"
                      className="px-8 py-2 rounded-xl border-red-rasta border-2  font-bold text-red-rasta"
                      onClick={() => logout()}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black" />
          </>
        )}
      </div>
    </>
  )
}
