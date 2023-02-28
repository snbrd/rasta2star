import React from 'react'
import BigNumber from 'bignumber.js'
import { getAddress } from 'utils/addressHelpers'
import HarvestAction from '../FarmCard/HarvestAction'

import CompoundAction from '../FarmCard/Compound'

type Props = {
  pool?: any
  depositTime?: any
  type: boolean
}

export default function FarmHarvest({ pool, depositTime, type }: Props) {
  const { id, pendingReward, stakedBalance, contractAddress, projectLink, rewardTokenSymbol } = pool;

  const handleTime = (d) => {
    let delta = Math.abs(d) / 1000;
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    const seconds = delta % 60;
    return { days, hours, minutes, seconds };
  }

  const lockDate = handleTime(new Date(depositTime * 1000 + 2592000000) as any - new Date().getTime());

  return (
    <div>
      <div className="gap-4 md:gap-4 row flex flex-col md:flex-row xl:flex-row w-full border-b-2 border-black pb-4 md:pb-12 mb-6">
        <div className="w-full items-detail flex flex-col pb-4 md:pb-0 ml-0">
          <h2 className="text-3xl font-bold text-left">
            {!pendingReward || Number(pendingReward) === 0
              ? '0.0000'
              : Number(new BigNumber(pendingReward).div(new BigNumber(10).pow(18))).toFixed(4)}
          </h2>
          {/* <span className="text-red-rasta text-left text-sm">{rewardTokenSymbol} earned</span> */}
          {/* <span className="text-blue-zion_cyan text-left text-sm">{rewardTokenSymbol} earned</span> */}
          <span className="text-newpurple-400 text-left text-sm">{rewardTokenSymbol} earned</span>
          <div className="flex flex-row space-x-3 xl:flex-col xl:space-x-0">
            <HarvestAction
              earnings={pendingReward ? new BigNumber(pendingReward) : new BigNumber('0x00')}
              type={type}
              poolAddress={getAddress(contractAddress)}
            />
            <CompoundAction earnings={new BigNumber(pendingReward)} url={projectLink} type={type} />
          </div>
        </div>
        <div className='w-full flex flex-col gap-3'>
          {
            id === 10 && Number(depositTime) > 0 && Number(stakedBalance) > 0 && (
              <span className="text-newpurple-400 text-left text-sm">
                {
                  lockDate.days === 0 ? `Locked for ${lockDate.hours} Hours` : `Locked for ${lockDate.days} Days`
                }
              </span>
            )
          }
          <div
            className="apr py-4 px-6 bg-gray-300 w-full text-center flex flex-col rounded-lg justify-center h-full"
            style={{
              background: '#241f31',
            }}
          >
            <span className="apr-value text-2xl w-full text-white ">0%</span>
            {/* <span className="apr-label text-red-rasta text-sm">Deposit Fee</span> */}
            {/* <span className="apr-label text-blue-zion_cyan text-sm">Deposit Fee</span> */}
            <span className="apr-label text-newpurple-400 text-sm">Deposit Fee</span>
          </div>
        </div>
      </div>
    </div>
  )
}
