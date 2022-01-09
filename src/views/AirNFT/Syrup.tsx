import React from 'react'
// import Fade from 'react-reveal/Fade';

// import {
//   MainWrapper,
//   MainContentSection,
//   NormalClockWrapper,
//   Container,
// } from './deadline';
// import NormalClock from './components/NormalClock/NormalClock';
import BannerBG from "../../assets/deadline.png";

const AirFarm: React.FC = () => {
  // const deadline = new Date(new Date().getTime() + 6 * 60 * 60 * 1000);
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: `url(${BannerBG})`,
            backgroundColor: '#e6e8ee',
            backgroundPosition: 'bottom',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* <Container className="mainContainer">
            <MainContentSection> */}
              <h2>
                AirNFT Farm is coming soon
              </h2>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu sit amet consectetur adipisicing
              </p>
              <Fade>
                <NormalClockWrapper>
                  <NormalClock countdown={deadline} />
                </NormalClockWrapper>
              </Fade>
            </MainContentSection>
          </Container> */}
        </div>
      </div>
    </div >
  )
}


export default AirFarm
