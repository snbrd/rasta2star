import React from 'react'
import { Image } from 'rasta-uikit'
import * as FaIcons from 'react-icons/fa'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, farmImage, tokenSymbol }) => {
  return (
    <>
      <div className="w-full items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1">
        <h2 className="text-2xl font-bold text-left">{lpLabel}</h2>
        <div className="coin-info flex  items-center">
          {lpLabel.includes('RASTA') && (
            <div className="core p-0 lg:p-1 flex-grow-1 text-left md:text-center">
              {/* <span className="px-3 py-2 border-2 flex flex-row items-center border-orange-rasta text-orange-rasta bg-white rounded-full whitespace-nowrap"> */}
              <span className="px-3 py-2 border-2 flex flex-row items-center border-none text-orange-rasta bg-white rounded-full whitespace-nowrap justify-center" style={{
                background:'#241f31'
              }}>
                <FaIcons.FaCheckCircle />
                &nbsp;<span className="text-white">CORE</span>
              </span>
            </div>
          )}
          <div className="core p-0 lg:p-1 flex-grow-1 md:text-center">
            <span className="px-2 py-1 bg-orange-rasta text-white rounded-full">{multiplier}</span>
          </div>
          <div className="core p-1 lg:p-2 text-left">
            <div className="rounded-full w-12 h-12  ">
              <div className="rounded-full w-12 h-12  ">
                <span className="text-white text-3xl flex flex-col pt-2 items-center justify-center">
                  <Image
                    src={`/images/farms/${farmImage}.png`}
                    alt={tokenSymbol}
                    marginTop={-2}
                    width={64}
                    height={47}
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
