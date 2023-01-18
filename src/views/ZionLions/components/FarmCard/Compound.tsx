import React from 'react'
import BigNumber from 'bignumber.js'
import { FaShoppingBag } from 'react-icons/fa'

interface FarmCardActionsProps {
  earnings?: BigNumber
  type?: boolean
  url?: string
}

const CompoundAction: React.FC<FarmCardActionsProps> = ({ url }) => {
  const buttonClass = 'px-2 py-2 flex-row space-x-2 flex w-full xl:w-32 items-center justify-center cursor-pointer'
  return (
    // <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full xl:w-26 from-green-rasta to-yellow-rasta  rounded-md justify-center">
    // <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full xl:w-26 from-blue-zion to-blue-zion_cyan rounded-md justify-center">
    <div className="harvest flex mt-4 bg-gradient-to-l text-white w-full xl:w-26 from-newpurple-400 to-newpurple-900 rounded-md justify-center">
      <a href={url} target="_blank" rel="noreferrer">
        <span className={buttonClass}>
          <FaShoppingBag />
          <span>Buy More</span>
        </span>
      </a>
    </div>
  )
}

export default CompoundAction
