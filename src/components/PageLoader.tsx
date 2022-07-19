import React from 'react'
import styled from 'styled-components'
import { Spinner } from 'rasta-uikit'
import Page from './layout/Page'
import Logo from '../assets/zionlabs-logo.gif'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  return (
    <Wrapper>
      {/* <Spinner /> */}
      <img src={Logo} alt="logo"/>
    </Wrapper>
  )
}

export default PageLoader
