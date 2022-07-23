

import * as Web3 from 'web3'
import { OpenSeaSDK, Network } from 'opensea-js'

// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider('https://eth-goerli.g.alchemy.com/v2/_MLIODa1-W3Y5cdQYNP9hNf1HZnh1I7L')

const openseaSDK = new OpenSeaSDK(provider, {
  networkName: Network.Main,
  apiKey: YOUR_API_KEY
})

// use openseaSDK to list nfts hosted on IPFS through pinata