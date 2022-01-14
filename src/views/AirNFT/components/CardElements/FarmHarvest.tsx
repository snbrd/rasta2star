import React from 'react'
import BigNumber from 'bignumber.js';
import HarvestAction from '../FarmCard/HarvestAction'

import CompoundAction from '../FarmCard/Compound'


type Props = {
  pool?: any
  type: boolean
}

export default function FarmHarvest({ pool, type }: Props) {
  const {
    pendingReword,
  } = pool;

  return (
    <div>
      <div className="gap-4 md:gap-4 row flex flex-col md:flex-row xl:flex-row w-full border-b-2 border-black pb-4 md:pb-12 mb-6">
        <div className="w-full items-detail flex flex-col pb-4 md:pb-0 ml-0">
          // <h2 className="text-3xl font-bold text-left">{Number(pendingReword) === 0 ? "0.0000" : Number(new BigNumber(pendingReword).div(new BigNumber(10).pow(18))).toFixed(4)}</h2>
          <h2 className="text-3xl font-bold text-left">0.0000</h2>
          <span className="text-red-rasta text-left text-sm">RASTA earned</span>
          <div className="flex flex-row gap-3">
            <HarvestAction earnings={new BigNumber(pendingReword)} type={type} />
            <CompoundAction earnings={new BigNumber(pendingReword)} type={type} />
          </div>
        </div>
        <div className="apr py-4 text-center px-6 bg-gray-300 w-full text-center flex flex-col rounded-lg justify-center">
          <span className="apr-value text-2xl w-full text-gray-700 ">0%</span>
          <span className="apr-label text-red-rasta text-sm">Deposit Fee</span>
        </div>
      </div>
    </div>
  )
}
