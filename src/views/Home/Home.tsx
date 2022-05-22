import React from 'react'

import HeroSection from './components/HeroSection'
import Community from './components/Community'
import FavCreator from './components/FavoriteCreator'

const Home: React.FC = () => {

  return (
    // <Page>
    //   <Hero>
    //     <Heading as="h1" size="xl" mb="24px" color="#543212">
    //       {TranslateString(576, 'zionlabs.info')}
    //     </Heading>
    //     <Text color="black">{TranslateString(578, 'Community Driven High Yield AMM')}</Text>
    //   </Hero>
    //   <div>
    //     <Cards>
    //       <FarmStakingCard />
    //       <TwitterCard />
    //     </Cards>
    //     <CTACards>
    //       <CakeStats />
    //       <TotalValueLockedCard />
    //     </CTACards>
    //   </div>
    // </Page>
    <div>
      <section>
        <HeroSection />
        <Community />
        <FavCreator />
      </section>
    </div>
  )
}

export default Home
