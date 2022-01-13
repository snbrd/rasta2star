import React from 'react'
import styled from 'styled-components';

import NormalClock from './components/NormalClock/NormalClock';
import BannerBG from "../../assets/deadline.png";



const AirFarm: React.FC = () => {
  const deadline = new Date(1642098274991);
  return (
    <div>
      <div>
        <MainWrapper
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
          <Container className="mainContainer">
            <MainContentSection>
              <h2>
                RastaDividend NFT Farming Coming Soon
              </h2>
              <p>
                Purchase your own 1 of 100 unique RastaDividend NFTs from&nbsp;
                <a
                  target="_blank"
                  rel='noreferrer'
                  href='https://app.airnfts.com/creators/0x21C8B8069f7B9950cbdA2EF4Af12Aa98c9D97A61'
                  style={{ color: "red", textDecoration: "underline" }}
                >AirNFT</a>
                , stake them to earn a boosted $RASTA return.
              </p>
              <NormalClockWrapper>
                <NormalClock countdown={deadline} />
              </NormalClockWrapper>
            </MainContentSection>
          </Container>
        </MainWrapper>
      </div>
    </div >
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 85%;
  @media (min-width: 601px) {
    width: 90%;
  }
  @media (min-width: 993px) {
    width: 80%;
  }
`

const MainWrapper = styled.div`
  position: relative;
  height: 80%;
  min-height: 95vh;
  overflow: hidden;
  padding-bottom: 300px;
  flex-grow: 1;
  @media (max-width: 1600px) {
    padding-bottom: 250px;
    min-height: 85vh;
  }
  @media (max-width: 767px) {
    padding-bottom: 150px;
    min-height: 75vh;
  }
`

const MainContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-top: 60px;

  @media (max-width: 1300px) {
    margin-top: 40px;
  }
  @media (max-width: 1366px) and (min-height: 1024px) {
    height: 100%;
    min-height: calc(100vh - 320px);
    margin: 0;
  }
  @media (max-width: 1099px) and (min-width: 768px) {
    height: 100%;
    margin: 0;
  }
  @media (max-width: 1024px) {
    padding: 60px 0;
  }
  @media (max-width: 990px) {
    height: 100%;
    margin: 0;
  }
  @media (max-width: 767px) {
    margin-top: 0;
  }
  .mainContainer {
    z-index: 99;
    position: relative;
  }
  h2 {
    font-size: 56px;
    font-family: 'DM Sans', sans-serif;
    color: #141a3c;
    line-height: 1.25;
    text-align: center;
    max-width: 7100px;
    font-weight: 700;
    letter-spacing: -0.25px;
    margin-bottom: 20px;
    @media (max-width: 1600px) {
      font-size: 42px;
      max-width: 570px;
      margin-bottom: 15px;
    }
    @media (max-width: 480px) {
      max-width: 100%;
      font-size: 30px;
    }
  }
  p {
    font-size: 18px;
    font-family: 'Lato', sans-serif;
    color: #141a3c;
    line-height: 1.9;
    text-align: center;
    max-width: 590px;
    margin-bottom: 0;
    @media (max-width: 1600px) {
      font-size: 16px;
      max-width: 420px;
    }
    @media (max-width: 768px) {
      font-size: 16px;
    }
    @media (max-width: 480px) {
      font-size: 15px;
      max-width: 100%;
    }
  }
`
const NormalClockWrapper = styled.div`
  position: relative;
  margin: 60px 0 0;
  @media (max-width: 1600px) {
    margin: 50px 0 0;
  }
  @media (max-width: 1300px) {
    margin: 40px 0 0;
  }
  @media (max-width: 600px) {
    width: 100%;
    margin: 35px 0 0;
  }
  .NormalClock {
    width: 820px;
    max-width: 100%;
    @media (max-width: 1600px) {
      width: 700px;
    }
    @media (max-width: 1400px) {
      width: 650px;
    }
    @media (max-width: 1300px) {
      width: 600px;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
    .dividerColon {
      font-size: 60px;
      font-family: 'Montserrat', sans-serif;
      color: #141a3c;
      font-weight: 700;
      align-self: flex-start;
      line-height: 1.3;
      @media (max-width: 1600px) {
        font-size: 52px;
      }
      @media (max-width: 1400px) {
        font-size: 46px;
      }
      @media (max-width: 767px) {
        font-size: 26px;
        line-height: 1;
      }
    }
    .NormalUnitContainer {
      height: auto;
      min-width: 120px;
      width: auto;
      text-align: center;
      background: transparent;
      @media (max-width: 767px) {
        width: 100px;
        min-width: auto;
      }
      @media (max-width: 420px) {
        width: 80px;
      }
      @media (max-width: 330px) {
        width: 70px;
      }
      .NormalupperCard {
        width: auto;
        height: auto;
        span {
          font-size: 85px;
          font-family: 'Montserrat', sans-serif;
          color: #141a3c;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1400px) {
            font-size: 60px;
          }
          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }
      .NormallowerCard {
        span {
          font-size: 85px;
          font-family: 'Montserrat', sans-serif;
          color: #141a3c;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1400px) {
            font-size: 60px;
          }
          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }
      .NormalCard {
        span {
          font-size: 85px;
          font-family: 'Montserrat', sans-serif;
          color: #141a3c;
          font-weight: 700;
          line-height: 1;
          text-align: center;
          letter-spacing: 0.025em;
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1600px) {
            font-size: 70px;
          }
          @media (max-width: 1400px) {
            font-size: 60px;
          }
          @media (max-width: 767px) {
            font-size: 30px;
          }
        }
      }
      .digitLabel {
        font-size: 18px;
        font-family: 'Lato', sans-serif;
        color: #141a3c;
        text-transform: lowercase;
        text-align: center;
        font-weight: 500;
        letter-spacing: 2px;
        @media (max-width: 1600px) {
          font-size: 16px;
          margin-top: 15px;
        }
        @media (max-width: 767px) {
          font-size: 12px;
          margin-top: 10px;
        }
      }
    }
  }
`

export default AirFarm
