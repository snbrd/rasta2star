import React from 'react'
import HarvestAction from '../FarmCard/HarvestAction'

type Props = {
  farmEarned: any
  depositFee: number
  pid: any
  earning: any
}

export default function FarmHarvest({ farmEarned, depositFee, pid, earning }: Props) {
  return (
    <div>
      <div className="row flex flex-col md:flex-row xl:flex-row gap-5 w-full border-b-2 border-black pb-12 mb-6">
        <div className="items-detail flex flex-col pb-2  xl:pr-5 ml-0 md:ml-2">
          <h2 className="text-3xl font-bold text-left">{farmEarned}</h2>
          <span className="text-red-rasta text-left">Rasta Earned</span>
          <HarvestAction pid={pid} earnings={earning} />
        </div>

        <div className="apr bg-gray-300 w-full text-center flex flex-col rounded-lg justify-center">
          <span className="apr-value text-2xl w-full text-gray-700 ">{depositFee}%</span>
          <span className="apr-label text-red-rasta text-md">Deposit Fee</span>
        </div>
      </div>
    </div>
  )
}
