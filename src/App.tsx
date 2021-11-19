import React, { useEffect, Suspense, lazy } from 'react'
import { Router, Redirect, Route, Switch } from 'react-router-dom'
// import { ResetCSS } from 'rasta-uikit'
import BigNumber from 'bignumber.js'
import { useFetchProfile, useFetchPublicData } from 'state/hooks'
import About from 'views/About/About'
import Footer from 'components/layout/Footer'
import Contact from './views/Contact/Contact'
import Farms2 from './views/Farms/Farms2'
// import GlobalStyle from './style/Global'
// import Menu from './components/Menu'
import ToastListener from './components/ToastListener'
import PageLoader from './components/PageLoader'
import Stake from './views/Stake'
import GlobalCheckBullHiccupClaimStatus from './views/Collectibles/components/GlobalCheckBullHiccupClaimStatus'
import history from './routerHistory'
import Header from './components/layout/Header'

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
const Home = lazy(() => import('./views/Home'))
const Farms = lazy(() => import('./views/Farms'))
const Pools = lazy(() => import('./views/Pools'))
const Lottery = lazy(() => import('./views/Lottery'))
const Ifos = lazy(() => import('./views/Ifos'))
const NotFound = lazy(() => import('./views/NotFound'))
const Collectibles = lazy(() => import('./views/Collectibles'))
const Teams = lazy(() => import('./views/Teams'))
const Team = lazy(() => import('./views/Teams/Team'))
const Profile = lazy(() => import('./views/Profile'))

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
    <div className="bg-black font-roboto text-white relative">
      <Router history={history}>
        {/* <ResetCSS /> */}
        {/* <GlobalStyle /> */}
        {/* <Menu> */}
        <Header />
        <Suspense fallback={<PageLoader />}>
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
            <Route path="/farms">
              <Farms />
            </Route>
            <Route path="/pools">
              <Pools />
            </Route>
            <Route path="/stake">
              <Stake />
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
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        {/* </Menu> */}
        <Footer />
        <ToastListener />
        <GlobalCheckBullHiccupClaimStatus />
      </Router>
    </div>
  )
}

export default React.memo(App)
