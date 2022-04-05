import React from 'react'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}


const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  farmImage = 'airnft',
  tokenSymbol = 'farm.tokenSymbol',
}) => {
  return (
    <>
      <div className="w-full items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1 justify-center">
        <div className="coin-info flex  items-center justify-between">
          <h2 className="text-xl font-bold text-left">{lpLabel}</h2>
          <div className="core p-1 text-left w-12 xl:w-16 h-12">
            <img src={`/images/tokens/${farmImage}.svg`} alt={tokenSymbol} width={64} style={{ maxWidth: 42 }} height={64} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardHeading
