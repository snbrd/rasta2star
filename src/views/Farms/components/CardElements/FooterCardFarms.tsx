import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

type Props = {
  farmStake: string
  // farmName?: string,
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
            <span className="text-orange-rasta">Stake:</span>
            <div className="flex flex-row space-x-4">
              <span className="text-orange-rasta">{farmStake}</span>
              <a href={addLPurl} target="_blank" rel="noreferrer">
                <FaIcons.FaShareSquare className="text-red-rasta" />
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full mt-3">
            <span className="text-orange-rasta">Total Liquidity:</span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-orange-rasta">{parseFloat(farmValue).toFixed(3)}</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <a href={farmBscLink} rel="noreferrer" target="_blank" className="text-red-rasta">
          View on BscScan
        </a>
        <div
          className="flex flex-row space-x-4 items-center text-red cursor-pointer"
          style={{ color: 'red' }}
          onClick={() => setShow(!show)}
        >
          <span className="font-bold text-md">DETAILS</span>
          {show && <FaIcons.FaChevronCircleUp />}
          {!show && <FaIcons.FaChevronCircleDown />}
        </div>
      </div>
    </div>
  )
}
