import React from 'react'
import { Card, CardBody, Heading, Text } from 'rasta-uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance, useTokenBalanceByAccount } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'

const StyledCakeStats = styled(Card)``

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const CakeStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getCakeAddress())
  const buoyancyBalance = useTokenBalanceByAccount(getCakeAddress(), '0xf2A92c2d85C1A5e4F5A6d4B99C4C8F74D85fBD06')
  const trustBalance = useTokenBalanceByAccount(getCakeAddress(), '0x437326807aAA8be7C0E3d89ab8C9072BC7614131')
  const operatingBalance = useTokenBalanceByAccount(getCakeAddress(), '0x0c26627aDd3F1bdC2a1f3aEA87E14DA5E9EfA1af')
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - getBalanceNumber(burnedBalance) : 0
  const circulatingSupply =
    cakeSupply - getBalanceNumber(buoyancyBalance) - getBalanceNumber(trustBalance) - getBalanceNumber(operatingBalance)

  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Rasta Stats')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total RASTA Supply')}</Text>
          {cakeSupply ? <CardValue fontSize="14px" value={cakeSupply} decimals={0} /> : 'Locked'}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Circulating RASTA Supply')}</Text>
          {circulatingSupply ? <CardValue fontSize="14px" value={circulatingSupply} decimals={0} /> : 'Locked'}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total RASTA Burned')}</Text>
          {burnedBalance && burnedBalance.isGreaterThan(0) ? (
            <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
          ) : (
            'Locked'
          )}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New RASTA/block')}</Text>
          <CardValue fontSize="14px" value={0.2} isStats />
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default CakeStats
