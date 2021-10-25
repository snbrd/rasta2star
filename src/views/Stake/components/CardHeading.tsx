import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from 'rasta-uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import * as FaIcons from 'react-icons/fa'
import * as SiIcons from 'react-icons/si'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier = '30X',
  isCommunityFarm,
  farmImage = 'dot',
  tokenSymbol = 'farm.tokenSymbol',
}) => {
  return (
    <>
      <div className="items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1">
        <h2 className="text-2xl font-bold text-left">{lpLabel}</h2>
        <div className="coin-info flex  items-center">
          <div className="core p-0 lg:p-1 flex-grow-1 text-left md:text-center">
            <span className="px-4 py-3 border-2 flex flex-row items-center border-orange-rasta text-orange-rasta bg-white rounded-full whitespace-nowrap">
              <FaIcons.FaCheckCircle />
              &nbsp;<span className="text-black">CORE</span>
            </span>
          </div>
          <div className="core p-0 lg:p-1 flex-grow-1 text-left md:text-center">
            <span className="px-4 py-2 bg-orange-rasta text-white rounded-full whitespace-nowrap">{multiplier}</span>
          </div>
          <div className="core p-1 lg:p-2 text-left">
            <div className="bg-orange-rasta rounded-full w-12 h-12  ">
              <span className="text-white text-3xl flex flex-col pt-2 items-center justify-center">
                <Image src={`/images/farms/${farmImage}.svg`} alt={tokenSymbol} width={64} height={64} />
              </span>
            </div>
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
