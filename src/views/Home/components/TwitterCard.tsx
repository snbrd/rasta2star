import React, { useState, useCallback, useContext, useEffect } from 'react'
import styled, { ThemeContext } from 'styled-components'
import { Heading, Card, CardBody } from 'rasta-uikit'
import useI18n from 'hooks/useI18n'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

const StyledFarmStakingCard = styled(Card)`
  min-height: 376px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const TwitterCard = () => {
  const TranslateString = useI18n()
  const themeContext = useContext(ThemeContext)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(themeContext.isDark)
  }, [themeContext.isDark])

  return (
    <StyledFarmStakingCard>
      <CardBody>
        <Heading color="textBlackWhite" size="xl" mb="20px">
          {TranslateString(542, 'Rasta Community')}
        </Heading>
        <Block>
          <TwitterTimelineEmbed
            sourceType="url"
            url="https://twitter.com/rastafinance"
            options={{ height: 300 }}
            theme={isDark ? 'dark' : ''}
          />
        </Block>
      </CardBody>
    </StyledFarmStakingCard>
  )
}

export default TwitterCard
