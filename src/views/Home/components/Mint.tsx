import React, { useEffect, useState, useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useMintNFTContract } from 'hooks/useContract'
import styled from 'styled-components'
import * as s from './NewGlobalStyles'
import '../style.css'
import Wallet from './Wallet'

const truncate = (input, len) => (input.length > len ? `${input.substring(0, len)}...` : input)

export const StyledButton = styled.button`
  padding: 1rem;
  border-radius: 5px;
  border: none;
  background-image: linear-gradient(to bottom, #0f84ff, #02c4fe);
  background-color: #7d7be6;
  font-weight: bold;
  color: var(--secondary-text);
  width: 150px;
  cursor: pointer;
  box-shadow: 6px 6px 7px -4px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 6px 6px 7px -4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 6px 6px 7px -4px rgba(0, 0, 0, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  border: none;
  background-color: var(--primary);
  padding: 10px;
  font-weight: bold;
  font-size: 15px;
  color: var(--primary-text);
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`

export const StyledLogo = styled.img`
  width: 200px;
  @media (min-width: 767px) {
    width: 300px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`

// export const StyledImg = styled.img`
//   box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
//   border: 4px dashed var(--secondary);
//   background-color: var(--accent);
//   border-radius: 100%;
//   width: 200px;
//   @media (min-width: 900px) {
//     width: 250px;
//   }
//   @media (min-width: 1000px) {
//     width: 300px;
//   }
//   transition: width 0.5s;
// `;

export const StyledImg = styled.img`
  background: linear-gradient(var(--accent), var(--accent)) padding-box,
    linear-gradient(to bottom, #0d8eff, #02c3fe) border-box;
  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);
  border: 4px solid #60a7e900;
  background-color: var(--accent);
  border-radius: 100%;
  width: 200px;
  @media (min-width: 900px) {
    width: 250px;
  }
  @media (min-width: 1000px) {
    width: 300px;
  }
  transition: width 0.5s;
`

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`

function Mint() {
  const { account } = useWallet()
  const [claimingNft, setClaimingNft] = useState(false)
  const [totalSupply, setTotalSupply] = useState(0)
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`)
  const [mintAmount, setMintAmount] = useState(1)
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: '',
    SCAN_LINK: '',
    NETWORK: {
      NAME: '',
      SYMBOL: '',
      ID: 0,
    },
    NFT_NAME: '',
    SYMBOL: '',
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: '',
    MARKETPLACE_LINK: '',
    SHOW_BACKGROUND: false,
  })

  const nftContract = useMintNFTContract(CONFIG.CONTRACT_ADDRESS)

  const claimNFTs = () => {
    const cost = CONFIG.WEI_COST
    const gasLimit = CONFIG.GAS_LIMIT
    const totalCostWei = String(cost * mintAmount)
    const totalGasLimit = String(gasLimit * mintAmount)
    console.log('Cost: ', totalCostWei)
    console.log('Gas limit: ', totalGasLimit)
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`)
    setClaimingNft(true)
    nftContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: account,
        value: totalCostWei,
      })
      .once('error', (err) => {
        console.log(err)
        setFeedback('Sorry, something went wrong please try again later.')
        setClaimingNft(false)
      })
      .then((receipt) => {
        console.log(receipt)
        setFeedback(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit NFTKey.app to view it.`)
        setClaimingNft(false)
        getData()
      })
  }

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1
    if (newMintAmount < 1) {
      newMintAmount = 1
    }
    setMintAmount(newMintAmount)
  }

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1
    if (newMintAmount > 50) {
      newMintAmount = 50
    }
    setMintAmount(newMintAmount)
  }

  const getData = useCallback(async () => {
    const _tsy = await nftContract.methods.totalSupply().call()
    setTotalSupply(_tsy)
  }, [nftContract])

  const getConfig = async () => {
    try {
      const configResponse = await fetch('/config/config.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      const config = await configResponse.json()
      SET_CONFIG(config)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getConfig()
  }, [])

  useEffect(() => {
    if (nftContract.options.address) {
      getData()
    }
  }, [nftContract, getData])

  return (
    <s.Screen image={CONFIG.SHOW_BACKGROUND ? '/images/mint/newbg.jpg' : null}>
      <s.Heading2
        style={{
          textAlign: 'center',
          padding: '0 0 5vh 0',
        }}
      >
        ZionLion NFTs
      </s.Heading2>
      <s.Container>
        <s.Column bordered={false} width="35%">
          <s.FlexDiv direction={['column']}>
            <s.FlexDiv direction={['column']}>
              <s.Heading2>ZionLion Minting</s.Heading2>
              <hr
                style={{
                  marginTop: '0.75rem',
                  width: '50%',
                  border: 'solid 2px #fff',
                }}
              />
            </s.FlexDiv>

            <s.FlexDiv direction={['column']} gap="2rem" margin="16px 0 0 0" mdWidth="87%">
              <s.Text align="justify" lineHeight="1.5rem">
                Please make sure you are connected to the right network (Binance Smart Chain Mainnet) and the correct
                address. Please note: Once you mint, this action cannot be undone.
              </s.Text>
              <s.Text align="justify" lineHeight="1.5rem">
                {`We have set the gas limit to 285000 for the contract to successfully mint your NFT. We recommend that
                you don't lower the gas limit`}
              </s.Text>
            </s.FlexDiv>
          </s.FlexDiv>
        </s.Column>
        <s.Column bordered="true" grow="true">
          <s.FlexDiv direction={['row', 'column-reverse']} gap="1rem" content="center">
            <s.FlexDiv direction={['column', 'row']} content="center">
              <s.Heading2>
                {totalSupply} / {CONFIG.MAX_SUPPLY}
              </s.Heading2>
            </s.FlexDiv>
          </s.FlexDiv>

          <s.FlexDiv direction={['row']} content="center" margin="16px 0 0 0">
            <s.Text color="#F87171">Contract Address:</s.Text>
          </s.FlexDiv>
          <s.FlexDiv direction={['row']} content="center" margin="16px 0 0 0">
            <s.Link target="_blank" href={CONFIG.SCAN_LINK}>
              {truncate(CONFIG.CONTRACT_ADDRESS, 20)}
            </s.Link>
          </s.FlexDiv>

          <s.FlexDiv direction={['row', 'column']} content="space-around">
            <s.FlexDiv direction={['row']} gap="1rem" content="center">
              <s.RoundedImage src="/images/mint/newgif.gif" />
            </s.FlexDiv>

            <s.FlexDiv direction={['column']} content="center" grow={0}>
              {Number(totalSupply) >= CONFIG.MAX_SUPPLY ? (
                <>
                  <s.Heading2 style={{ textAlign: 'center', color: 'var(--accent-text)' }}>
                    The sale has ended.
                  </s.Heading2>
                  <s.Text style={{ textAlign: 'center', color: 'var(--accent-text)' }}>
                    You can still find {CONFIG.NFT_NAME} on
                  </s.Text>

                  <StyledLink target="_blank" href={CONFIG.MARKETPLACE_LINK}>
                    {CONFIG.MARKETPLACE}
                  </StyledLink>
                </>
              ) : (
                <>
                  <s.FlexDiv direction={['column']} content="center" items="center" margin="16px 0">
                    <table style={{ color: 'var(--accent-text)', fontWeight: 'bold' }} className="table">
                      <tbody>
                        <tr>
                          <td>1 - 1000 {CONFIG.SYMBOL}</td>
                          <td> costs </td>
                          <td>
                            {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}
                          </td>
                        </tr>
                        <tr>
                          <td>1001 - 3100 {CONFIG.SYMBOL}</td>
                          <td> costs </td>
                          <td>0.22 {CONFIG.NETWORK.SYMBOL}</td>
                        </tr>
                        <tr>
                          <td>3101 - 6200 {CONFIG.SYMBOL}</td>
                          <td> costs </td>
                          <td>0.25 {CONFIG.NETWORK.SYMBOL}</td>
                        </tr>
                      </tbody>
                    </table>
                  </s.FlexDiv>

                  <s.FlexDiv direction={['column']} content="center" items="center">
                    <s.Text style={{ textAlign: 'center', color: 'var(--accent-text)' }}>Excluding gas fees.</s.Text>
                  </s.FlexDiv>

                  {account ? (
                    <>
                      <s.FlexDiv direction={['column']} content="center" items="center" margin="16px 0 0 0" gap="1rem">
                        <s.Text
                          style={{
                            textAlign: 'center',
                            color: 'var(--accent-text)',
                          }}
                        >
                          {feedback}
                        </s.Text>
                      </s.FlexDiv>

                      <s.FlexDiv direction={['row']} content="center" items="center" margin="16px 0 0 0" gap="1rem">
                        <s.RoundedOutlineButton
                          style={{ lineHeight: 0.4 }}
                          disabled={claimingNft}
                          onClick={(e) => {
                            e.preventDefault()
                            decrementMintAmount()
                          }}
                          height="40px"
                          width="40px"
                        >
                          -
                        </s.RoundedOutlineButton>

                        <s.Text
                          style={{
                            textAlign: 'center',
                            color: 'var(--accent-text)',
                          }}
                        >
                          {mintAmount}
                        </s.Text>

                        <s.RoundedOutlineButton
                          disabled={claimingNft}
                          onClick={(e) => {
                            e.preventDefault()
                            incrementMintAmount()
                          }}
                          height="40px"
                          width="40px"
                        >
                          +
                        </s.RoundedOutlineButton>
                      </s.FlexDiv>

                      <s.FlexDiv direction={['column']} content="center" items="center" margin="16px 0 0 0" gap="1rem">
                        <s.OutlineButton
                          disabled={claimingNft}
                          onClick={(e) => {
                            e.preventDefault()
                            claimNFTs()
                            getData()
                          }}
                        >
                          {claimingNft ? 'BUSY' : 'BUY'}
                        </s.OutlineButton>
                      </s.FlexDiv>
                    </>
                  ) : (
                    <s.FlexDiv direction={['column']} content="center" items="center" margin="16px 0 0 0" gap="1rem">
                      <s.Text
                        style={{
                          textAlign: 'center',
                          color: 'var(--accent-text)',
                        }}
                      >
                        Connect to the {CONFIG.NETWORK.NAME} network
                      </s.Text>

                      <Wallet />
                    </s.FlexDiv>
                  )}
                </>
              )}
            </s.FlexDiv>
            <s.FlexDiv direction={['row']} gap="1rem" content="center" mobileHide="true">
              <s.RoundedImage src="/images/mint/newgif.gif" />
            </s.FlexDiv>
          </s.FlexDiv>
        </s.Column>
      </s.Container>
    </s.Screen>
  )
}

export default Mint
