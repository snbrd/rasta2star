import React from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import useI18n from 'hooks/useI18n'
import converts from 'config/constants/convert'
import FarmCard from './components/FarmCard/FarmCard'
import MrRastaImage from '../../assets/newimage/BEATS.jpg'
import MrsRastaImage from '../../assets/lion-mrs-rasta.jpg'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()

  const stackedOnly = false

  return (
    // <AnimatedPage>
    <div>
      <div
        className="flex w-full flex-col bg-blend-overlay bg-black bg-opacity-50 bg-left-center-small md:bg-center text-white py-40 items-center"
        style={{
          backgroundImage: `url(${stackedOnly ? MrsRastaImage : MrRastaImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* <h1 className="text-4xl font-bold">{stackedOnly ? 'Mrs. Rasta Pools' : 'Mr. Rasta Pools'}</h1> */}
        <h1 className="text-4xl font-bold">Convert Your Tokens</h1>
      </div>
      <div className="pt-8 py-0 md:pt-8 md:py-8 w-full bg-black text-white">
        <div className=" flex flex-col text-white items-center w-10/12 mx-auto">
          <h2 className="font-bold text-xl">{TranslateString(696, 'Use the Terminals below to Convert your $RASTA & $MRASTA Tokens')}</h2>
          {/* <p className="text-white">{TranslateString(696, 'Conversion will take place between XX/XX/XXXX and YY/YY/YYYY')}</p> */}
   
          <div className="card items-center text-center w-full mt-3 md:mt-16 mb-12">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 space-4">
                <Route exact path={`${path}`}>
                  {
                    converts.map((pool, index) => (
                      <FarmCard
                        key={index}
                        pool={pool}
                        account={account}
                        ethereum={ethereum}
                      />
                    ))
                  }
                </Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </AnimatedPage>
  )
}

export default Farms
