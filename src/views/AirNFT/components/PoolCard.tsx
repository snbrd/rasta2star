import React, { useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
// import { getBalanceNumber } from 'utils/formatBalance'
// import { useSousDepositFee } from 'hooks/useHarvest'
// import { QuoteToken } from 'config/constants/types'

import CardHeading from './CardHeading'
import FarmHarvest from './CardElements/FarmHarvest'
import FooterCardFarms from './CardElements/FooterCardFarms'
import Wallet from './CardElements/Wallet'

// interface PoolWithApy extends Pool {
//   apy: BigNumber
// }

interface HarvestProps {
  pool?: any
  removed?: boolean
  type?: boolean
}

const PoolCard: React.FC<HarvestProps> = ({ pool, type, removed = false }) => {

  // Pools using native BNB behave differently than pools using a token
  const TranslateString = useI18n()
  const { account } = useWallet()
  const requestedApproval = false;


  const [isStaked, setIsStaked] = useState(false)

  return (
    <>
      <div className="px-5 lg:px-8 xl:px-10 py-6 lg:py-10 xl:py-12 rounded-2xl mt-8" style={{ backgroundImage: "url('images/cardbg.png')", backgroundSize: "100% 580px", boxShadow: "6px 6px 24px -9px" }}>
        <div className="row flex flex-col lg:flex-row gap-0 md:gap-10 mb-12">
          <CardHeading
            lpLabel='AIRNFT'
            isCommunityFarm={false}
            farmImage='airnft'
            tokenSymbol="farm.tokenSymbol"
          />
          {!removed && (
            <div className="w-full text-center apr bg-gray-300 flex flex-col rounded-lg justify-center py-4 px-6  mt-4 md:mt-0">
              <span className="apr-value text-2xl w-full text-gray-700 ">
                47%
              </span>
              <span className="apr-label text-red-rasta text-sm">APR</span>
            </div>
          )}
        </div>
        <div className={` expanded md:block`}>
          <FarmHarvest
            lpLabel='AIRNFT'
            farmEarned={0}
            depositFee={0}
            pid={0}
            type={type}
            pool={pool}
            earning={0}
          />
        </div>
        {!account && <Wallet />}
        {account && (
          <div className="flex justify-between">
            <button
              type="button"
              disabled={requestedApproval}
              onClick={() => setIsStaked(!isStaked)}
              className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl cursor-pointer"
            >
              <span>{isStaked ? TranslateString(758, 'Unstake NFT') : TranslateString(758, 'Stake NFT')}</span>
            </button>
          </div>
        )}

        {/* <CardActionsContainer farm={farm} ethereum={ethereum} account={account} addLiquidityUrl={addLiquidityUrl} /> */}
        <FooterCardFarms
          farmBscLink="https://bscscan.com/address/"
          farmValue='0'
          farmStake="lpLabel"
          addLPurl="addLiquidityUrl"
        />
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
