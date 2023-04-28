import React from 'react'
import { getAddressByName } from 'utils/addressHelpers'
import { useUserAmountConverted } from 'hooks/useConvert'

type Props = {  
  pool?: any
}

export default function FarmHarvest({ pool }: Props) {
  const amount = useUserAmountConverted(
    getAddressByName(pool.from),
    getAddressByName(pool.to)
  )
  return (
    <div>
      <div className="row flex flex-col md:flex-col gap-5 w-full border-b-2 border-black pb-4 mb-6">
        <div className="items-detail flex flex-col pb-2 ">
          <h2 className="text-3xl font-bold text-left">{amount}</h2>
          <span className="text-newpurple-400 text-left">${pool?.from || 'RASTA'} Converted</span>
        </div>
      </div>
    </div>
  )
}
