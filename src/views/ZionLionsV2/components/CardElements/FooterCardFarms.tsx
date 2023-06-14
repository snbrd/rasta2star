import React, { useState } from 'react'
import { FaChevronCircleUp, FaChevronCircleDown } from 'react-icons/fa'

type Props = {
  farmStake?: string
  farmValue?: string
  farmBscLink?: string
  addLPurl?: string
  stackedValue?: number
  type?: boolean
  poolId?: number
}

export default function FooterCardFarms({ farmValue, farmBscLink, stackedValue, type }: Props) {
  const [show, setShow] = useState(false)
  const numberWithCommas = (x) => {
    if (x) return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return '0'
  }

  return (
    <div className="space-y-8">
      {show && (
        <div>
          <div className="flex justify-between w-full mt-5">
            <span className="text-black-rasta font-bold">Total NFTs staked</span>
            <span className="text-black-rasta font-bold"> </span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-newpurple-400 font-bold">{farmValue} NFTs</span>
            </div>
          </div>
          <div className="flex justify-between w-full mt-5">
            <span className="text-black-rasta font-bold">BNB Value</span>
            <span className="text-black-rasta font-bold"> </span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-newpurple-400 font-bold">{numberWithCommas((Number(farmValue) * 0.18).toFixed(2))} BNB</span>
            </div>
          </div>
          {type && (
            <div className="flex justify-between w-full mt-5">
              <span className="text-black-rasta font-bold">My NFTs Staked</span>
              <span className="text-black-rasta font-bold"> </span>
              <div className="flex flex-col md:flex-row space-x-4">
                <span className="text-newpurple-400 font-bold">{numberWithCommas(stackedValue)} NFTs</span>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <div>
          <span className="text-newpurple-400">
            <a href={farmBscLink} target="_blank" rel="noreferrer">
              View on BscScan
            </a>
          </span>
        </div>
        <div
          className="flex flex-row space-x-4 items-center text-newpurple-400 cursor-pointer"
          onClick={() => setShow(!show)}
        >
          <span className="font-bold text-md">DETAILS</span>
          {show && <FaChevronCircleUp className="text-newpurple-400" />}
          {!show && <FaChevronCircleDown className="text-newpurple-400" />}
        </div>
      </div>
    </div>
  )
}
