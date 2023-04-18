import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import Wallet from '../CardElements/Wallet'

const Action = styled.div`
  padding-top: 16px;
`

interface FarmCardActionsProps {
  account?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ account }) => {
  return (
    <Action>
      <Wallet />
    </Action>
  )
}

export default CardActions
