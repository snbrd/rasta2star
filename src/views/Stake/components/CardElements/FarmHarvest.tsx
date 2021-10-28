import React from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HarvestAction from '../FarmCard/HarvestAction'

import CompoundAction from '../FarmCard/Compound'

type Props = {
  farmEarned?: any
  depositFee?: number
  pid?: any
  earning?: any
  lpLabel?: any
}

export default function FarmHarvest({ farmEarned, depositFee, pid = 'pid', earning = 'earnings', lpLabel }: Props) {
  return (
    <div>
      <div className="row flex flex-col md:flex-row xl:flex-row w-full border-b-2 border-black pb-12 mb-6">
        <div className="items-detail flex flex-col pb-2  xl:pr-4 ml-0 md:ml-2">
          <h2 className="text-3xl font-bold text-left">{farmEarned === 0 ? "0.0000" : farmEarned}</h2>
          <span className="text-red-rasta text-left text-sm">{lpLabel} EARNED</span>
          <div className="flex flex-row gap-3">
            <HarvestAction pid={pid} earnings={earning} />
            <CompoundAction pid={pid} earnings={earning} />
          </div>
        </div>
        <div className="apr py-4 px-6 bg-gray-300 w-full text-center flex flex-col rounded-lg justify-center">
          <span className="apr-value text-2xl w-full text-left text-gray-700 ">{depositFee}%</span>
          <span className="apr-label text-red-rasta text-left text-sm">Deposit Fee</span>
        </div>
      </div>
    </div>
  )
}
