import React from 'react'
import { Pool } from 'state/types'
import BigNumber from 'bignumber.js'
import HarvestAction from '../FarmCard/HarvestAction'

import CompoundAction from '../FarmCard/Compound'

interface PoolWithApy extends Pool {
  apy: BigNumber
}

type Props = {
  farmEarned?: any
  depositFee?: number
  pid?: any
  earning?: any
  lpLabel?: any
  type?: boolean
  pool: PoolWithApy
}

export default function FarmHarvest({ farmEarned, type, depositFee, pid = 'pid', earning = 'earnings', lpLabel, pool }: Props) {
  return (
    <div>
      <div className="gap-4 md:gap-8 row flex flex-col md:flex-row xl:flex-row w-full border-b-2 border-black pb-4 md:pb-12 mb-6">
        <div className="w-full items-detail flex flex-col pb-4 md:pb-0 ml-0">
          <h2 className="text-3xl font-bold text-left">{farmEarned === 0 ? "0.0000" : (farmEarned * 1).toFixed(4)}</h2>
          <span className="text-red-rasta text-left text-sm">{lpLabel} EARNED</span>
          <div className="flex flex-row gap-3">
            <HarvestAction pid={pid} earnings={earning} type={type} />
            <CompoundAction pid={pid} earnings={earning} type={type} pool={pool} />
          </div>
        </div>
        <div className="apr py-4 text-center px-6 bg-gray-300 w-full text-center flex flex-col rounded-lg justify-center">
          <span className="apr-value text-2xl w-full text-gray-700 ">{depositFee}%</span>
          <span className="apr-label text-red-rasta text-sm">Deposit Fee</span>
        </div>
      </div>
    </div>
  )
}
