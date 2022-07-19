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
  farmImage = 'dot',
  tokenSymbol = 'farm.tokenSymbol',
}) => {
  return (
    <>
      <div className="w-full items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1">
        <div className="coin-info flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-left">{lpLabel}</h2>
          <div className="core p-1 text-left w-12 md:w-16 h-12 md:h-16">
            <img src={`/images/tokens/${farmImage}.png`} alt={tokenSymbol} width={64} height={64} />
            {/* <div className="bg-orange-rasta rounded-full w-10 h-10  ">
              <span className="text-white text-3xl flex flex-col items-center justify-center">
              </span>
            </div> */}
          </div>
        </div>
      </div>
      {/* <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <div className="bg-orange-rasta rounded-full w-12 h-12  ">
              <span className="text-white text-3xl flex flex-col pt-2 items-center justify-center">
                <SiIcons.SiBinance />
              </span>
            </div>
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading color="yellow" mb="4px">
          {lpLabel}
        </Heading>
        <Flex justifyContent="center">
          <MultiplierTag variant="yellow">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper> */}
    </>
  )
}

export default CardHeading
