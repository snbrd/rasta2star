import React from 'react'
import BigNumber from 'bignumber.js'
import { getAddress } from 'utils/addressHelpers'
import HarvestAction from '../FarmCard/HarvestAction'

import CompoundAction from '../FarmCard/Compound'

type Props = {
  pool?: any
  type: boolean
}

export default function FarmHarvest({ pool, type }: Props) {
  const { pendingReward, contractAddress, projectLink, rewardTokenSymbol } = pool

  return (
    <div>
      <div className="gap-4 md:gap-4 row flex flex-col md:flex-row xl:flex-row w-full border-b-2 border-black pb-4 md:pb-12 mb-6">
        <div className="w-full items-detail flex flex-col pb-4 md:pb-0 ml-0">
          <h2 className="text-3xl font-bold text-left">
            {!pendingReward || Number(pendingReward) === 0
              ? '0.0000'
              : Number(new BigNumber(pendingReward).div(new BigNumber(10).pow(18))).toFixed(4)}
          </h2>
          {/* <span className="text-red-rasta text-left text-sm">{rewardTokenSymbol} earned</span>
          <span className="text-red-rasta text-left text-sm">Reward locked for a week</span> */}
          <span className="text-blue-zion_cyan text-left text-sm">{rewardTokenSymbol} earned</span>
          <span className="text-blue-zion_cyan text-left text-sm">Reward locked for a week</span>
          <div className="flex flex-row space-x-3">
            <HarvestAction
              earnings={pendingReward ? new BigNumber(pendingReward) : new BigNumber('0x00')}
              type={type}
              poolAddress={getAddress(contractAddress)}
            />
            <CompoundAction earnings={new BigNumber(pendingReward)} url={projectLink} type={type} />
          </div>
        </div>
        <div className="apr py-4 px-6 bg-gray-300 w-full text-center flex flex-col rounded-lg justify-center" style={{
          background:'#241f31'
        }}>
          <span className="apr-value text-2xl w-full text-white ">0%</span>
          {/* <span className="apr-label text-red-rasta text-sm">Deposit Fee</span> */}
          <span className="apr-label text-blue-zion_cyan text-sm">Deposit Fee</span>
        </div>
      </div>
    </div>
  )
}
