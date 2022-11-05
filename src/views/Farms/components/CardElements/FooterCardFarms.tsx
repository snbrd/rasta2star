import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

type Props = {
  farmStake: string
  farmValue: string
  farmBscLink: string
  addLPurl?: string
}

export default function FooterCardFarms({ farmStake, farmValue, farmBscLink, addLPurl }: Props) {
  const [show, setShow] = useState(false)
  return (
    <div className="space-y-8">
      {show && (
        <div>
          <div className="flex justify-between w-full mt-8">
            <span className="text-black-rasta font-bold">Stake:</span>
            <div className="flex flex-row space-x-4">
              <span className="text-black-rasta font-bold">{farmStake}</span>
              <a href={addLPurl} target="_blank" rel="noreferrer">
                {/* <FaIcons.FaShareSquare className="text-red-rasta" /> */}
                <FaIcons.FaShareSquare className="text-blue-zion_cyan" />
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full mt-3">
            <span className="text-black-rasta font-bold">Total Liquidity:</span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-black-rasta font-bold">{farmValue}</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        {/* <a href={farmBscLink} rel="noreferrer" target="_blank" className="text-red-rasta"> */}
        <a href={farmBscLink} rel="noreferrer" target="_blank" className="text-blue-zion_cyan">
          View on BscScan
        </a>
        <div
          className="flex flex-row space-x-4 items-center text-blue-zion_cyan cursor-pointer"
          // style={{ color: 'red' }}
          onClick={() => setShow(!show)}
        >
          <span className="font-bold text-md">DETAILS</span>
          {show && <FaIcons.FaChevronCircleUp className="text-blue-zion_cyan" />}
          {!show && <FaIcons.FaChevronCircleDown className="text-blue-zion_cyan" />}
        </div>
      </div>
    </div>
  )
}
