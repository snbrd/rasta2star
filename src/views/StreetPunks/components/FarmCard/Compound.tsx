import React from 'react'
import BigNumber from 'bignumber.js'
import { FaShoppingBag } from 'react-icons/fa'

interface FarmCardActionsProps {
  earnings?: BigNumber
  type?: boolean
}

const CompoundAction: React.FC<FarmCardActionsProps> = () => {

  const buttonClass = "px-2 py-2 flex-row space-x-2 flex w-full xl:w-32 items-center justify-center cursor-pointer"
  return (
    <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full xl:w-26 from-green-rasta to-yellow-rasta  rounded-md justify-center">
      <a href='https://app.airnfts.com/creators/0x21C8B8069f7B9950cbdA2EF4Af12Aa98c9D97A61' target="_blank" rel='noreferrer'>
        <span
          className={buttonClass}
        >
          <FaShoppingBag />
          <span>Buy More</span>
        </span>
      </a>
    </div>
  )
}

export default CompoundAction
