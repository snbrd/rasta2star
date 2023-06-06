import React from 'react'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { mainnet, polygon } from 'wagmi/chains'
import { WalletConnectConnector } from '@wagmi/core/connectors/walletConnect'


const chains = [mainnet, polygon]
const projectId = 'dApploy'

const connector = new WalletConnectConnector({
    chains: [mainnet, polygon],
    options: {
        projectId
    },
})

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, version: 1, chains }),
    publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)

const Web3ModalProvider = ({ children }) => {
    return (
        <>
            <WagmiConfig config={wagmiConfig}>
                {children}
            </WagmiConfig>

            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </>
    )
}

export default Web3ModalProvider;