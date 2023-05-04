import React from 'react'
import { Image } from 'rasta-uikit'
import * as FaIcons from 'react-icons/fa'
import MrRastaImage from '../../assets/newimage/BEATS.jpg'
import MetaMask from '../../assets/wallet/meta-mask.png'

const NewPools: React.FC = () => {

  return (
    
    <div>
        <div className="flex w-full flex-col bg-blend-overlay bg-black bg-opacity-50 bg-left-center-small md:bg-center text-white py-40 items-center"
            style={{
          backgroundImage: `url(${MrRastaImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed'
        }}>
            <h1 className="text-4xl font-bold">Stake Rasta</h1>
        </div>
        <div className='pt-8 py-0 md:pt-8 md:py-8 w-full bg-gradient-to-br from-red-rasta to-blue-zion text-black'>
            <div className=" flex flex-col text-white items-center w-10/12 mx-auto">
                <h2 className="font-bold text-xl">Stake Tokens</h2>
                <p className="text-white">Earn Brand New Rasta Tokens</p>
                <div className="card items-center text-center w-full mt-3 md:mt-16 mb-12">
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 space-4">

                            {/* New Pools Card */}
                            <div className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8" style={{
                                    background: '#3d38467a',
                                    color: '#fff',
                                    backgroundSize: '100% 580px',
                                    boxShadow: '6px 6px 24px -9px #000000',
                                }}>
                                {/* header */}
                                <div className="row flex flex-col gap-4 mb-12">
                                    <div
                                        className='w-full items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1'>
                                        <h2 className="text-2xl font-bold text-left">$ZION</h2>
                                        <div className='coin-info flex items-center'>
                                            <div className="core p-1 lg:p-2 text-left">
                                                <div className="rounded-full w-12 h-12">
                                                    <div className="rounded-full w-12 h-12  ">
                                                        <span
                                                            className="text-white text-3xl flex flex-col pt-2 items-center justify-center">
                                                            <Image src="/images/farms/rasta.png" alt="lorem" width={64}
                                                                marginTop={-2} height={48} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end header */}
                                {/* body */}
                                <div className="expanded md:block pb-6 border-b-2 border-black">
                                    <div className="w-full apr bg-gray-300 flex flex-col rounded-lg justify-center text-center mt-4 md:mt-0 py-3" style={{background: 'rgb(36, 31, 49)'}}>
                                        <span className="apr-value text-2xl w-full text-white ">1:1</span>
                                        <span className="apr-label text-newpurple-400 text-md">Ratio</span>
                                    </div>

                                    <div className="items-detail flex flex-col pb-2  xl:pr-5 ml-0 md:ml-2">
                                        <h2 className="text-3xl font-bold text-left">0</h2>
                                        <span className="text-newpurple-400 text-left">$ZION Converted</span>
                                        <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
                                            <button type="button" disabled className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer">
                                                <span>Convert Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* end body */}
                                {/* footer */}
                                <div className='flex flex-col'>
                                    <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
                                            <button type="button" disabled className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer">
                                                <FaIcons.FaWallet />
                                                <span>Unlock Wallet</span>
                                            </button>
                                    </div>

                                    <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
                                            <button type="button" disabled className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer">
                                                <img src={MetaMask} alt="" className='w-8'/>
                                                <span>Add Token to Wallet</span>
                                            </button>
                                    </div>
                                </div>
                                {/* end footer */}
                            </div>
                            {/* End New Pools Card */}

                            {/* New Pools Card */}
                            <div className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8" style={{
                                    background: '#3d38467a',
                                    color: '#fff',
                                    backgroundSize: '100% 580px',
                                    boxShadow: '6px 6px 24px -9px #000000',
                                }}>
                                {/* header */}
                                <div className="row flex flex-col gap-4 mb-12">
                                    <div
                                        className='w-full items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1'>
                                        <h2 className="text-2xl font-bold text-left">$SOUND</h2>
                                        <div className='coin-info flex items-center'>
                                            <div className="core p-1 lg:p-2 text-left">
                                                <div className="rounded-full w-12 h-12">
                                                    <div className="rounded-full w-12 h-12  ">
                                                        <span
                                                            className="text-white text-3xl flex flex-col pt-2 items-center justify-center">
                                                            <Image src="/images/farms/rasta.png" alt="lorem" width={64}
                                                                marginTop={-2} height={48} />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end header */}
                                {/* body */}
                                <div className="expanded md:block pb-6 border-b-2 border-black">
                                    <div className="w-full apr bg-gray-300 flex flex-col rounded-lg justify-center text-center mt-4 md:mt-0 py-3" style={{background: 'rgb(36, 31, 49)'}}>
                                        <span className="apr-value text-2xl w-full text-white ">1:1</span>
                                        <span className="apr-label text-newpurple-400 text-md">Ratio</span>
                                    </div>

                                    <div className="items-detail flex flex-col pb-2  xl:pr-5 ml-0 md:ml-2">
                                        <h2 className="text-3xl font-bold text-left">0</h2>
                                        <span className="text-newpurple-400 text-left">$SOUND Converted</span>
                                        <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
                                            <button type="button" disabled className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer">
                                                <span>Convert Now</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* end body */}
                                {/* footer */}
                                <div className='flex flex-col'>
                                    <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
                                            <button type="button" disabled className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer">
                                                <FaIcons.FaWallet />
                                                <span>Unlock Wallet</span>
                                            </button>
                                    </div>

                                    <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
                                            <button type="button" disabled className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer">
                                                <img src={MetaMask} alt="" className='w-8'/>
                                                <span>Add Token to Wallet</span>
                                            </button>
                                    </div>
                                </div>
                                {/* end footer */}
                            </div>
                            {/* End New Pools Card */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewPools
