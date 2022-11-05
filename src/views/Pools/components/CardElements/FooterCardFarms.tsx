import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'

type Props = {
  farmStake: string
  // farmName?: string,
  farmValue: string
  farmBscLink: string
  addLPurl?: string
}
export default function FooterCardFarms({ farmStake, farmValue, addLPurl }: Props) {
  const [show, setShow] = useState(false)

  return (
    <div className="space-y-8">
      {show && (
        <div>
          <div className="flex justify-between w-full mt-8">
            <span className="text-black-rasta font-black">Get:</span>
            <div className="flex flex-row space-x-4">
              <span className="text-black-rasta font-bold">{farmStake}</span>
              <a href={addLPurl} target="_blank" rel="noreferrer">
                {/* <FaIcons.FaShareSquare className="text-red-rasta" /> */}
                <FaIcons.FaShareSquare className="text-blue-zion_cyan" />
              </a>
            </div>
          </div>
          <div className="flex justify-between w-full mt-3">
            <span className="text-black-rasta font-black">Total:</span>
            <div className="flex flex-col md:flex-row space-x-4">
              <span className="text-black-rasta font-bold">{farmValue}</span>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between w-full items-center mt-5">
        <div />
        <div
          className="flex flex-row space-x-4 items-center text-blue-zion_cyan cursor-pointer"
          onClick={() => setShow(!show)}
          // style={{ color: 'red' }}
        >
          <span className="font-bold text-md">DETAILS</span>
          {show && <FaIcons.FaChevronCircleUp className="text-blue-zion_cyan" />}
          {!show && <FaIcons.FaChevronCircleDown className="text-blue-zion_cyan" />}
        </div>
      </div>
    </div>
  )
}
