import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

type Props = {
  farmStake?: string
  farmValue: string
  farmBscLink?: string
  addLPurl?: string
}




export default function FooterCardFarms({
  farmValue,
  farmBscLink
}: Props) {

  const [show, setShow] = useState(false)
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="space-y-8">
      {show && (
        <div>
          <div className="flex justify-between w-full mt-8">
            <span className="text-black-rasta font-bold">Total NFTs Staked</span>
            <span className="text-black-rasta font-bold"> </span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className='text-black-rasta font-bold'>{numberWithCommas(farmValue)}</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <div>
          <span className="text-red-rasta"><a href={farmBscLink} target="_blank" rel='noreferrer'>View on BscScan</a></span>
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
