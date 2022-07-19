import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

type Props = {
  farmStake?: string
  // farmName?: string,
  farmValue: string
  farmBscLink?: string
  addLPurl?: string
}

export default function FooterCardFarms({ farmStake = 'GET RASTA', farmValue, addLPurl = 'addLiquidityUrl' }: Props) {
  const [show, setShow] = useState(false)
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <div className="space-y-6">
      {show && (
        <div>
          <div className="flex justify-between w-full mt-8">
            <span className="text-black-rasta font-bold">Stake:Total Liquidity</span>
            <div className="flex flex-row space-x-4">
              <span className="text-black-rasta font-bold">{farmStake}</span>
              <a href={addLPurl} target="_blank" rel="noreferrer">
                <FaIcons.FaShareSquare className="text-red-rasta" />
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full mt-3">
            <span className="text-black-rasta font-bold"> </span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-black-rasta font-bold">
                {numberWithCommas(parseFloat(farmValue).toFixed(3))} $RASTA
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <div>
          <span className="text-red-rasta">View on BscScan</span>
        </div>
        <div
          className="flex flex-row space-x-4 items-center text-red-rasta cursor-pointer"
          onClick={() => setShow(!show)}
          style={{ color: 'red' }}
        >
          <span className="font-bold text-md">DETAILS</span>
          {show && <FaIcons.FaChevronCircleUp />}
          {!show && <FaIcons.FaChevronCircleDown />}
        </div>
      </div>
    </div>
  )
}
