import React from 'react'
import { Image } from 'rasta-uikit'

export interface ExpandableSectionProps {
  pool?: any
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const CardHeading: React.FC<ExpandableSectionProps> = ({ pool, farmImage, tokenSymbol }) => {
  return (
    <>
      <div className="w-full items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1">
        <div className="w-full items-detail flex flex-row justify-between">
          <h2 className="text-2xl font-bold text-left">${pool?.from}</h2>
          <h2 className="text-2xl font-bold text-left">{'-->'}</h2>
          <h2 className="text-2xl font-bold text-left">${pool?.to}</h2>
        </div>
        <div className="coin-info flex  items-center">
          <div className="core py-2 text-left">
            <div className="rounded-full w-12 h-12  ">
              <div className="rounded-full w-12 h-12  ">
                <span className="text-white text-3xl flex flex-col pt-2 items-center justify-center">
                  <Image
                    src={`/images/farms/${farmImage}.png`}
                    alt={tokenSymbol}
                    width={64}
                    marginTop={-2}
                    height={48}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardHeading
