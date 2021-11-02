import React from 'react'
import RastaInfo from './CardElements/RastaInfo'
import FarmHarvest from './CardElements/FarmHarvest'
import Wallet from './CardElements/Wallet'
import FooterCardFarms from './CardElements/FooterCardFarms'

const items = ({ itemsToRender }: { itemsToRender: any[] }) => {

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {itemsToRender.map((item, index) => (
          <div className="shadow-md p-8 border-1 border-green-rasta" key={index}>
            <RastaInfo
              farmName={item.name}
              farmLeverage={item.detail.multiple}
              farmWallet={item.detail.wallet}
              farmApr={item.detail.apr}
            />
            <div className={`${index} expanded md:block`}>
              <FarmHarvest
                farmEarned={item.detail.rastaEarned}
                depositFee={item.detail.depositFee}
                pid="ds"
                earning="ad"
              />
              <Wallet />
              <FooterCardFarms
                farmStake={item.detail.stake}
                farmValue={item.detail.value}
                farmBscLink={item.detail.bscLink}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default items
