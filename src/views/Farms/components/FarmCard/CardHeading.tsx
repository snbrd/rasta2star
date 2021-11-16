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
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
}) => {
  return (
    <>
      <div className="w-full items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1">
        <h2 className="text-2xl font-bold text-left">{lpLabel}</h2>
        <div className="coin-info flex  items-center">
          {lpLabel.includes('RASTA') && (
            <div className="core p-0 lg:p-1 flex-grow-1 text-left md:text-center">
              <span className="px-3 py-2 border-2 flex flex-row items-center border-orange-rasta text-orange-rasta bg-white rounded-full whitespace-nowrap">
                <FaIcons.FaCheckCircle />
                &nbsp;<span className="text-black">CORE</span>
              </span>
            </div>
          )}
          <div className="core p-0 lg:p-1 flex-grow-1 md:text-center">
            <span className="px-2 py-1 bg-orange-rasta text-white rounded-full">{multiplier}</span>
          </div>
          <div className="core p-1 lg:p-2 text-left">
            <div className="bg-orange-rasta rounded-full w-12 h-12  ">
              <div className="bg-orange-rasta rounded-full w-12 h-12  ">
                <span className="text-white text-3xl flex flex-col pt-2 items-center justify-center">
                  <Image src={`/images/farms/${farmImage}.svg`} alt={tokenSymbol} marginTop={-17} width={64} height={64} />
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
