import React from 'react'
import BigNumber from 'bignumber.js'
import { communityFarms } from 'config/constants'
import { Farm } from 'state/types'
import { provider } from 'web3-core'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
// import { QuoteToken } from 'config/constants/types'
import { BASE_EXCHANGE_URL } from 'config'
// import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import CardHeading from './CardHeading'
import CardActionsContainer from './CardActionsContainer'
import FarmHarvest from '../CardElements/FarmHarvest'
import FooterCardFarms from '../CardElements/FooterCardFarms'

export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardProps {
  pool: any
  account?: string
}

const FarmCard: React.FC<FarmCardProps> = ({ pool, account }) => {
  const farmImage = pool.poolImage.split(' ')[0].toLocaleLowerCase()

  return (
    <div
      className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8"
      style={{
        background: '#3d38467a',
        color: '#fff',
        backgroundSize: '100% 580px',
        boxShadow: '6px 6px 24px -9px #000000',
      }}
    >
      <div className="row flex flex-col gap-4 mb-4">
        <CardHeading
          pool={pool}
          farmImage={farmImage}
        />
        <div
          className="w-full apr bg-gray-300 flex flex-col rounded-lg justify-center text-center mt-4 md:mt-0 py-3"
          style={{
            background: '#241f31',
          }}
        >
          <span className="apr-value text-2xl w-full text-white ">{pool?.ratio || '-'}</span>
          <span className="apr-label text-newpurple-400 text-md">Ratio</span>
        </div>
      </div>
      <div className={` expanded md:block`}>
        <FarmHarvest pool={pool} farmEarned={0} earning={0} />
      </div>
      <CardActionsContainer account={account} />
      <FooterCardFarms />
    </div>
  )
}

export default FarmCard
