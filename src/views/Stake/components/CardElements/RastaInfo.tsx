import React from 'react'
import * as FaIcons from 'react-icons/fa'

type Props = {
  farmName: string
  farmLeverage: string
  farmWallet: any
  farmApr: string
}
export default function RastaInfo({ farmName, farmLeverage, farmWallet, farmApr }: Props) {
  return (
    <div>
      <div className="row flex flex-col md:flex-row gap-2 mb-12">
        <div className="items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1">
          <h2 className="text-3xl font-bold text-left">{farmName}</h2>
          <div className="coin-info flex  items-center">
            <div className="core text-center items-center flex-grow-1 flex flex-row space-x-2 border-2 border-orange-rasta rounded-full py-2 px-4">
              <FaIcons.FaCheckCircle className="fill-current text-orange-rasta mx-auto my-auto text-2xl" />
              <span className="text">CORE</span>
            </div>
            <div className="core p-2 flex-grow-1 text-center ">
              <span className="px-4 py-2 bg-orange-rasta text-white rounded-full">{farmLeverage}</span>
            </div>
            <div className="core p-2 text-left">
              <div className="bg-orange-rasta rounded-full w-12 h-12  ">
                <img src={farmWallet} className="h-12" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        <div className="apr bg-gray-300 w-full px-6 py-2 text-left flex flex-col rounded-lg justify-center">
          <span className="apr-value text-2xl w-full text-gray-700 ">{farmApr}%</span>
          <span className="apr-label text-red-rasta text-md">APR</span>
        </div>
      </div>
    </div>
  )
}
