import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import { useModal } from 'rasta-uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import { useSousStake } from 'hooks/useStake'
import { useSousUnstake } from 'hooks/useUnstake'
import { getBalanceNumber } from 'utils/formatBalance'
import { useSousDepositFee } from 'hooks/useHarvest'
import { QuoteToken, PoolCategory } from 'config/constants/types'
import { Pool } from 'state/types'
import { useFarms } from 'state/hooks'

import * as FaIcons from 'react-icons/fa'
import DepositModal from './DepositModal'
import WithdrawModal from './WithdrawModal'
import CardHeading from './CardHeading'
import FarmHarvest from './CardElements/FarmHarvest'
import FooterCardFarms from './CardElements/FooterCardFarms'
import Wallet from './CardElements/Wallet'

interface PoolWithApy extends Pool {
  apy: BigNumber
}

interface HarvestProps {
  pool: PoolWithApy
  removed?: boolean
  type?: boolean
}

const PoolCard: React.FC<HarvestProps> = ({ pool, type, removed = false }) => {
  const {
    sousId,
    tokenName,
    stakingTokenName,
    apy,
    tokenDecimals,
    poolCategory,
    totalStaked,
    isFinished,
    userData,
    stakingLimit,
  } = pool

  // Pools using native BNB behave differently than pools using a token
  const isBnbPool = poolCategory === PoolCategory.BINANCE
  const TranslateString = useI18n()
  const { account } = useWallet()
  const { onStake } = useSousStake(sousId, isBnbPool)
  const { onUnstake } = useSousUnstake(sousId)
  const depositFee = useSousDepositFee(sousId)
  const farmList = useFarms()
  const farms = farmList.filter((farm) => farm.lpSymbol === tokenName)
  const requestedApproval = false;

  const allowance = new BigNumber(userData?.allowance || 0)
  const stakingTokenBalance = new BigNumber(userData?.stakingTokenBalance || 0)
  const stakedBalance = new BigNumber(userData?.stakedBalance || 0)
  const earnings = new BigNumber(userData?.pendingReward || 0)

  const isOldSyrup = stakingTokenName === QuoteToken.SYRUP
  const accountHasStakedBalance = stakedBalance?.toNumber() > 0
  const needsApproval = !accountHasStakedBalance && !allowance.toNumber() && !isBnbPool
  const buttonClass = "w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl cursor-pointer"

  const [isApproval, SETisApproval] = useState(needsApproval)

  useEffect(() => {
    SETisApproval(needsApproval)
  }, [needsApproval])

  const convertedLimit = new BigNumber(stakingLimit).multipliedBy(new BigNumber(10).pow(tokenDecimals))

  const [onPresentDeposit] = useModal(
    <DepositModal
      max={stakingLimit && stakingTokenBalance.isGreaterThan(convertedLimit) ? convertedLimit : stakingTokenBalance}
      onConfirm={onStake}
      tokenName={stakingLimit ? `${stakingTokenName} (${stakingLimit} max)` : stakingTokenName}
    />,
  )

  // const [onPresentCompound] = useModal(
  //   <CompoundModal earnings={earnings} onConfirm={onStake} tokenName={stakingTokenName} />,
  // )

  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={onUnstake} tokenName={stakingTokenName} />,
  )

  return (
    <>
      <div className="shadow-2xl p-5 pt-8 pb-8 rounded-lg">
        <div className="row mb-4 flex flex-col md:flex-row gap-4 md:gap-8 md:mb-12">
          <CardHeading
            lpLabel={tokenName}
            multiplier="60 X"
            isCommunityFarm={false}
            farmImage="binance"
            tokenSymbol="farm.tokenSymbol"
          />
          {!removed && (
            <div className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center text-left py-4 px-6">
              <span className="apr-value text-2xl w-full text-gray-700 ">
                {isFinished || isOldSyrup || !apy || apy?.isNaN() || !apy?.isFinite() ? (
                  '-'
                ) : (
                  // <Balance fontSize="14px" isDisabled={isFinished} value={} decimals={2} unit="%" />
                  <span className="apr-value text-2xl w-full text-gray-700 ">
                    {apy?.times(new BigNumber(1)).toNumber().toLocaleString('en-US').slice(0, -1)}%
                  </span>
                )}
              </span>
              <span className="apr-label text-red-rasta text-sm">APR</span>
            </div>
          )}
        </div>
        <div className={` expanded md:block`}>
          <FarmHarvest
            lpLabel={tokenName}
            farmEarned={getBalanceNumber(stakedBalance)}
            depositFee={depositFee}
            pid={farms.length ? farms[0].pid : 0}
            type={type}
            pool={pool}
            earning={earnings}
          />
        </div>
        {!account && <Wallet />}
        {account && isApproval && (
          <span
            className={(type === false ? "disabled " : "") + buttonClass}
            onClick={() => type === false ? null : SETisApproval(!isApproval)}
          >
            <FaIcons.FaCheck />
            <span>APPROVE RASTA</span>
          </span>
        )}
        {account && !isApproval && (
          // <StakeAction
          //   stakedBalance={stakedBalance}
          //   tokenBalance={tokenBalance}
          //   tokenName={lpName}
          //   pid={pid}
          //   addLiquidityUrl={addLiquidityUrl}
          // />
          <div className="flex justify-between">
            <button
              type="button"
              disabled={requestedApproval}
              onClick={onPresentWithdraw}
              className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl cursor-pointer"
            >
              <span>{TranslateString(758, 'Unstake RASTA')}</span>
            </button>
            <button
              type="button"
              className="text-gray-800 border-2 border-gray-800 rounded-md w-16 p-0 text-2xl mx-2"
              onClick={onPresentDeposit}
            >
              +
            </button>
          </div>
        )}

        {/* <CardActionsContainer farm={farm} ethereum={ethereum} account={account} addLiquidityUrl={addLiquidityUrl} /> */}
        {totalStaked && (
          <FooterCardFarms
            farmBscLink="https://bscscan.com/address/"
            farmValue={getBalanceNumber(totalStaked).toString()}
            farmStake="lpLabel"
            addLPurl="addLiquidityUrl"
          />
        )}
      </div>
      {/* <Card isActive={isCardActive} isFinished={isFinished && sousId !== 0}>
        {isFinished && sousId !== 0 && <PoolFinishedSash />}
        <div style={{ padding: '24px' }}>
          <CardTitle isFinished={isFinished && sousId !== 0}>
            {isOldSyrup && '[OLD]'} {tokenName} {TranslateString(348, 'Pool')}
          </CardTitle>
          <div style={{ marginBottom: '8px', display: 'flex', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <Image src={`/images/tokens/${image || tokenName}.png`} width={64} height={64} alt={tokenName} />
            </div>
            {account && harvest && !isOldSyrup && (
              <HarvestButton
                disabled={!earnings.toNumber() || pendingTx}
                text={pendingTx ? 'Collecting' : 'Harvest'}
                onClick={async () => {
                  setPendingTx(true)
                  await onReward()
                  setPendingTx(false)
                }}
              />
            )}
          </div>
          {!isOldSyrup ? (
            <BalanceAndCompound>
              <Balance value={getBalanceNumber(earnings, tokenDecimals)} isDisabled={isFinished} />
              {sousId === 0 && account && harvest && (
                <HarvestButton
                  disabled={!earnings.toNumber() || pendingTx}
                  text={pendingTx ? TranslateString(999, 'Compounding') : TranslateString(704, 'Compound')}
                  onClick={onPresentCompound}
                />
              )}
            </BalanceAndCompound>
          ) : (
            <OldSyrupTitle hasBalance={accountHasStakedBalance} />
          )}
          <Label isFinished={isFinished && sousId !== 0} text={TranslateString(330, `${tokenName} earned`)} />
          <StyledCardActions>
            {!account && <UnlockButton />}
            {account &&
              (needsApproval && !isOldSyrup ? (
                <div style={{ flex: 1 }}>
                  <Button disabled={isFinished || requestedApproval} onClick={handleApprove} fullWidth>
                    {`Approve ${stakingTokenName}`}
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    disabled={stakedBalance.eq(new BigNumber(0)) || pendingTx}
                    onClick={
                      isOldSyrup
                        ? async () => {
                            setPendingTx(true)
                            await onUnstake('0')
                            setPendingTx(false)
                          }
                        : onPresentWithdraw
                    }
                  >
                    {`Unstake ${stakingTokenName}`}
                  </Button>
                  <StyledActionSpacer />
                  {!isOldSyrup && (
                    <IconButton disabled={isFinished && sousId !== 0} onClick={onPresentDeposit}>
                      <AddIcon color="background" />
                    </IconButton>
                  )}
                </>
              ))}
          </StyledCardActions>
          <StyledDetails>
            <Text color="textRedYellow" style={{ flex: 1 }}>
              {TranslateString(736, 'APR')}:
            </Text>
            {isFinished || isOldSyrup || !apy || apy?.isNaN() || !apy?.isFinite() ? (
              '-'
            ) : (
              <Balance fontSize="14px" isDisabled={isFinished} value={apy?.toNumber()} decimals={2} unit="%" />
            )}
          </StyledDetails>
          <StyledDetails>
            <Text color="textRedYellow" style={{ flex: 1 }}>
              {TranslateString(384, 'Your Stake')}:
            </Text>
            <Balance fontSize="14px" isDisabled={isFinished} value={getBalanceNumber(stakedBalance)} />
          </StyledDetails>
          <Flex justifyContent="space-between">
            <Text color="textRedYellow">{TranslateString(318, 'Deposit Fee')}:</Text>
            <Text bold>{depositFee}%</Text>
          </Flex>
        </div>
        <CardFooter
          projectLink={projectLink}
          totalStaked={totalStaked}
          blocksRemaining={blocksRemaining}
          isFinished={isFinished}
          blocksUntilStart={blocksUntilStart}
          poolCategory={poolCategory}
        />
      </Card> */}
    </>
  )
}

// const PoolFinishedSash = styled.div`
//   background-image: url('/images/pool-finished-sash.svg');
//   background-position: top right;
//   background-repeat: not-repeat;
//   height: 135px;
//   position: absolute;
//   right: -24px;
//   top: -24px;
//   width: 135px;
// `

// const StyledCardActions = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 16px 0;
//   width: 100%;
//   box-sizing: border-box;
// `

// const BalanceAndCompound = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   flex-direction: row;
// `

// const StyledActionSpacer = styled.div`
//   height: ${(props) => props.theme.spacing[4]}px;
//   width: ${(props) => props.theme.spacing[4]}px;
// `

// const StyledDetails = styled.div`
//   display: flex;
//   font-size: 14px;
// `

export default PoolCard
