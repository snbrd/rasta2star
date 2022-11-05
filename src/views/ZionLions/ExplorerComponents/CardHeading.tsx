import React from 'react'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
  description?: string
}

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, description, farmImage, tokenSymbol = 'farm.tokenSymbol' }) => {
  return (
    <>
      <div className="w-full items-detail flex flex-col flex-grow-1 justify-center">
        <div className="coin-info flex items-center gap-3">
          <div className="core p-1 text-right w-24 xl:w-32 h-28">
            <img
              src={`/images/tokens/${farmImage}`}
              alt={tokenSymbol}
              className="rounded-lg"
              width={100}
              style={{ maxWidth: 100 }}
              height={100}
            />
          </div>
          <div className='h-full flex justify-around flex-col'>
            <h2 className="text-xl font-bold text-left">{lpLabel}</h2>
            <h2 className="text-md text-left">{description}</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardHeading
