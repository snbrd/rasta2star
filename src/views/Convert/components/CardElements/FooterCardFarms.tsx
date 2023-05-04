/* eslint-disable react/destructuring-assignment */
import React from 'react'
import MetamaskImage from 'assets/wallet/meta-mask.png';
import registerToken from 'utils/wallet';
import { getAddressByName } from 'utils/addressHelpers'

interface FooterCardFarmsProps {
  pool: any
}

const FooterCardFarms: React.FC<FooterCardFarmsProps> = ({ pool }) => {
  const tokenAddress = getAddressByName(pool.to);

  return (
    <div className="space-y-8">
      <div className="harvest flex mt-4 bg-gradient-to-b text-white w-full from-newpurple-400 to-newpurple-900 rounded-xl">
        <button
          type="button"
          className="px-12 py-2 flex-row space-x-2 flex w-full items-center justify-center cursor-pointer"
          onClick={() => registerToken(
            tokenAddress,
            pool.to,
            18,
            pool.logo,
          )}
        >
          <img src={MetamaskImage} alt="icon" width="20px" height="20px" />
          <span>Add Token to Wallet</span>
        </button>
      </div>
    </div>
  )
}

export default FooterCardFarms;