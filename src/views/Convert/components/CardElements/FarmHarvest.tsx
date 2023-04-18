import React from 'react'
import HarvestAction from '../FarmCard/HarvestAction'

type Props = {
  farmEarned: any
  earning: any
  pool?: any
}

export default function FarmHarvest({ pool, farmEarned, earning }: Props) {
  return (
    <div>
      <div className="row flex flex-col md:flex-col gap-5 w-full border-b-2 border-black pb-4 mb-6">
        <div className="items-detail flex flex-col pb-2 ">
          <h2 className="text-3xl font-bold text-left">{farmEarned}</h2>
          <span className="text-newpurple-400 text-left">${pool?.from.name || 'RASTA'} Converted</span>
          <HarvestAction earnings={earning} />
        </div>
      </div>
    </div>
  )
}
