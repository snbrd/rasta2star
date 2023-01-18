import React, { useCallback, useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { getAddress } from 'utils/addressHelpers'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import zionLionsABI from 'config/abi/zionlionsExplorerPool.json'
import { AbiItem } from 'web3-utils'
import { SEC_PER_YEAR } from 'config'
import useContract, { useCake } from 'hooks/useContract'
import { getAllowance } from 'utils/erc20'
import { useClaim } from 'hooks/useAirFarm'

import CardHeading from './CardHeading'
import FarmHarvest from './CardElements/FarmHarvest'

interface HarvestProps {
  pool?: any
  removed?: boolean
  apy?: any
}

const CustomTitle = styled.div`
  padding: 8px 40px;
  margin-top: -48px;
  margin-left: -40px;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  color: white;
  @media (max-width: 1280px) {
    margin-top: -40px;
    margin-left: -32px;
  }
  @media (max-width: 1024px) {
    margin-top: -32px;
    margin-left: -20px;
    padding: 4px 40px;
  }
`

// const buttonClass =
//   'w-full disabled font-bold flex flex-row text-white py-2 bg-gradient-to-b from-blue-zion to-blue-zion_cyan items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'

const buttonClass =
  'w-full disabled font-bold flex flex-row text-white py-2 bg-gradient-to-b from-newpurple-400 to-newpurple-900 items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'

const activeButtonClass2 =
  'w-full font-bold flex flex-row text-white py-2 bg-gradient-to-b from-yellow-rasta to-orange-zion items-center justify-center space-x-4 text-md md:text-xl rounded-md xl:rounded-xl cursor-pointer'

const ExplorerPoolCard: React.FC<HarvestProps> = ({ pool, removed = false }) => {
  const {
    icon,
    ribbon,
    approved,
    poolName,
    ribbonText,
    depositFee,
    isFinished,
    description,
    pendingReward,
    contractAddress,
    rewardTokenSymbol,
  } = pool

  const { account } = useWallet()
  const [isApproval, SETisApproval] = useState(approved)
  const [allowance, setAllowance] = useState('0')
  const [staked, setStaked] = useState(false)
  const [loading, setLoading] = useState(false)
  const [totalSupply, setTotalSupply] = useState(new BigNumber(0))
  const [rastaBalance, setRastaBalance] = useState(new BigNumber(0))
  const [stakedAmount, setStakedAmount] = useState(new BigNumber(0))

  const rastaContract = useCake()
  const poolContract = useContract(zionLionsABI as unknown as AbiItem, getAddress(contractAddress))
  const [rate, setRate] = useState(0)
  const { onClaim } = useClaim(getAddress(contractAddress))

  const handleFetch = useCallback(async () => {
    if (poolContract) {
      const _rate = await poolContract.methods.rewardRate().call()
      const _tvl = await poolContract.methods.totalSupply().call()
      setRate(_rate)
      setTotalSupply(new BigNumber(_tvl))

      if (account) {
        try {
          const userInfo = await poolContract.methods.userInfo(account).call()
          setStaked(userInfo.staked)
          setStakedAmount(new BigNumber(userInfo.amount))

          if (rastaContract) {
            const res = await getAllowance(rastaContract, poolContract, account)
            setAllowance(new BigNumber(res).toString())
            const _balance = await rastaContract.methods.balanceOf(account).call()
            setRastaBalance(new BigNumber(_balance))
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }, [account, poolContract, rastaContract])

  useEffect(() => {
    (async () => {
      await handleFetch()
    })()
  }, [handleFetch])

  useEffect(() => {
    SETisApproval(approved)
  }, [approved])

  const apy = (() => {
    return new BigNumber(rate)
      .times(SEC_PER_YEAR)
      .div(new BigNumber(totalSupply).toNumber() > 0 ? new BigNumber(totalSupply) : new BigNumber(10).pow(18))
      .times(100)
      .toFixed(0)
      .toString()
  })()

  return (
    <>
      <div
        className={`${ribbon ? 'pt-8 ' : ''}px-5 col-span-2 lg:px-8 xl:px-10 py-6 pb-8 lg:pt-10 xl:pt-12 rounded-2xl`}
        style={{
          background: '#3d38467a',
          color: '#fff',
          backgroundSize: '100% 580px',
          boxShadow: '6px 6px 24px -9px #000000',
        }}
      >
        {ribbon && (
          <CustomTitle
            className={`absolute text-md md:text-md xl:text-lg bg-gradient-to-r ${isFinished ? 'from-yellow-rasta to-orange-zion' : 'from-blue-zion to-blue-zion_cyan'}`}>
            {ribbonText}
          </CustomTitle>
        )}
        <div className="row flex flex-col lg:flex-row space-x-0 md:space-x-4 mb-4 md:mb-8 border-b-2 pb-4 border-black">
          <CardHeading
            lpLabel={poolName}
            description={description}
            isCommunityFarm={false}
            farmImage={icon}
            tokenSymbol="farm.tokenSymbol"
          />
          <div className="w-full flex flex-col md:flex-row gap:2 md:gap-4">
            <div
              className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-4 px-6  mt-4 md:mt-0"
              style={{
                background: '#241f31',
              }}
            >
              <span className="apr-value text-2xl w-full text-white ">
                {!pendingReward || Number(pendingReward) === 0
                  ? '0.0000'
                  : Number(new BigNumber(pendingReward).div(new BigNumber(10).pow(18))).toFixed(4)}
              </span>
              {/* <span className="apr-label text-blue-zion_cyan text-sm">{rewardTokenSymbol} earned</span> */}
              <span className="apr-label text-newpurple-400 text-sm">{rewardTokenSymbol} earned</span>
            </div>
            {!removed && (
              <div
                className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-4 px-6  mt-4 md:mt-0"
                style={{
                  background: '#241f31',
                }}
              >
                <span className="apr-value text-2xl w-full text-white ">
                  {Number(apy) > 0 && apy !== 'Infinity' && !isFinished ? `${apy}%` : '-'}
                </span>
                {/* <span className="apr-label text-blue-zion_cyan text-sm">APR</span> */}
                <span className="apr-label text-newpurple-400 text-sm">APR</span>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3 md:gap-6 flex-col md:flex-row">
          <FarmHarvest
            poolContract={poolContract}
            allowance={allowance}
            staked={staked}
            rastaContract={rastaContract}
            pool={pool}
            isApproval={isApproval}
            stakedAmount={stakedAmount}
            rastaBalance={rastaBalance}
            onFetch={handleFetch}
          />
          <div className="flex flex-col justify-between md:w-2/5">
            <div
              className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-6 px-6  mt-4 md:mt-0"
              style={{
                background: '#241f31',
              }}
            >
              <span className="apr-value text-2xl w-full text-white ">{depositFee}%</span>
              {/* <span className="apr-label text-blue-zion_cyan text-sm">Deposit Fee</span> */}
              <span className="apr-label text-newpurple-400 text-sm">Deposit Fee</span>
            </div>
            <div
              className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-6 px-6  mt-4 md:mt-0"
              style={{
                background: '#241f31',
              }}
            >
              <span className="apr-value text-2xl w-full text-white ">
                {!stakedAmount || Number(stakedAmount) === 0
                  ? '0.0000'
                  : Number(new BigNumber(stakedAmount).div(new BigNumber(10).pow(18))).toFixed(4)}
              </span>
              {/* <span className="apr-label text-blue-zion_cyan text-sm">$RASTA Staked</span> */}
              <span className="apr-label text-newpurple-400 text-sm">$RASTA Staked</span>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 md:mt-12 gap-4 flex flex-col md:flex-row items-center">
          <button
            type="button"
            disabled={loading}
            className={`${Number(pendingReward) > 0 ? activeButtonClass2 : buttonClass} ${loading && ' disabled'}`}
            style={{ maxWidth: 220 }}
            onClick={async () => {
              if (Number(pendingReward) > 0) {
                setLoading(true)
                await onClaim()
                setLoading(false)
              }
            }}
          >
            <span>Harvest</span>
          </button>
          <h2 className="text-md w-full text-center">
            Please note that unstaking your explorers will unstake your $RASTA
          </h2>
        </div>
      </div>
    </>
  )
}

export default ExplorerPoolCard
