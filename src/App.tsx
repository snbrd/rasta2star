import React, { useEffect, Suspense, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
// import { ResetCSS } from 'rasta-uikit'
// framer-motion
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

import BigNumber from 'bignumber.js'
import { useFetchProfile, useFetchPublicData } from 'state/hooks'
import About from 'views/About/About'
import NewPools from 'views/Pools/NewPoolsDemo'
import Contact from './views/Contact/Contact'
import Farms2 from './views/Farms/Farms2'
import AirFarm from './views/AirNFT'
import StreetPunksNFT from './views/StreetPunks'
// import GlobalStyle from './style/Global'
// import Menu from './components/Menu'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import Stake from './views/Stake'
import GlobalCheckBullHiccupClaimStatus from './views/Collectibles/components/GlobalCheckBullHiccupClaimStatus'
import history from './routerHistory'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import NewDesktopSidebar from './components/layout/NewDesktopSidebar'
// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Pools = lazy(() => import('./views/Pools'))
const Convert = lazy(() => import('./views/Convert'))
const Lottery = lazy(() => import('./views/Lottery'))
const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Collectibles = lazy(() => import('./views/Collectibles'))
const Teams = lazy(() => import('./views/Teams'))
const Team = lazy(() => import('./views/Teams/Team'))
const Profile = lazy(() => import('./views/Profile'))

const Blog = lazy(() => import('./views/Blog'))
const SinglePost = lazy(() => import('./views/Blog/SinglePost'))
const Category = lazy(() => import('./views/Blog/Category'))
const ZionLions = lazy(() => import('./views/ZionLions'))
const ZionLionsV2 = lazy(() => import('./views/ZionLionsV2'))
const Minter = lazy(()=> import('./views/Minter'))

const WinBig = lazy(() => import('./views/WinBig'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  // Monkey patch warn() because of web3 flood
  // To be removed when web3 1.3.5 is released
  useEffect(() => {
    console.warn = () => null
  }, [])

  // useEffect(() => {
  //   if (!account && window.localStorage.getItem('accountStatus')) {
  //     connect('injected')
  //   }
  // }, [account, connect])

  useFetchPublicData()
  useFetchProfile()

  return (
    <div className="flex bg-black font-roboto text-white relative overflow-x-hidden">
      <Router history={history}>
        <Suspense fallback={<PageLoader />}>
          <aside className="hidden md:block">
            <NewDesktopSidebar />
          </aside>
          <div className="flex-1 md:ml-48 overflow-x-hidden">
            <Header />
            {/* <Suspense fallback={<PageLoader />}> */}
            <AnimatePresence exitBeforeEnter>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/about" exact>
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/farming/:farm">
                  <Farms2 />
                </Route>
                <Route path="/liquidity">
                  <Farms />
                </Route>
                <Route path="/pools">
                  <Pools />
                </Route>
                <Route path="/convert">
                  <Convert />
                </Route>
                <Route path="/stake">
                  <Stake />
                </Route>
                <Route path="/stakenft">
                  <AirFarm />
                </Route>
                <Route path="/stake-zionlions">
                  <ZionLions />
                </Route>
                <Route path="/stake-zionlions-v2">
                  <ZionLionsV2 />
                </Route>
                <Route path="/streetpunksnft">
                  <StreetPunksNFT />
                </Route>
                <Route path="/lottery">
                  <Lottery />
                </Route>
                <Route path="/ifo">
                  <Ifos />
                </Route>
                <Route path="/collectibles">
                  <Collectibles />
                </Route>
                <Route exact path="/teams">
                  <Teams />
                </Route>
                <Route path="/teams/:id">
                  <Team />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
                <Route path="/mint" exact>
                  <Minter/>
                </Route>
                {/* Redirect */}
                <Route path="/staking">
                  <Redirect to="/pools" />
                </Route>
                <Route path="/syrup">
                  <Redirect to="/pools" />
                </Route>
                <Route path="/nft">
                  <Redirect to="/collectibles" />
                </Route>

                {/* activate blog later after have contents */}
                <Route exact path="/educations">
                  <Blog />
                </Route>

                <Route path="/education/:id">
                  <SinglePost />
                </Route>

                <Route path="/category/:id">
                  <Category />
                </Route>

                <Route path="/win-big">
                    <WinBig/>
                </Route>

                <Route path="/pools-demo">
                  <NewPools/>
                </Route>

                {/* 404 */}
                <Route component={NotFound} />
              </Switch>
            </AnimatePresence>
            {/* </Suspense> */}
            <Footer />
            <ToastListener />
            <GlobalCheckBullHiccupClaimStatus />
          </div>
        </Suspense>
      </Router>
    </div>
  )
}

export default React.memo(App)
