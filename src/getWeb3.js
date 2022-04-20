import Web3 from "web3";
import Web3Modal from 'web3modal'
import WalletLink from 'walletlink'
import WalletConnectProvider from '@walletconnect/web3-provider'

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    (async () => {

      // window.addEventListener("load", async () => {
      //   // Modern dapp browsers...
      //   // if (window.ethereum) {

      //   const INFURA_ID = '460f40a260564ac4a4f4b3fffb032dad'

      //   const providerOptions = {
      //     walletconnect: {
      //       package: WalletConnectProvider, // required
      //       options: {
      //         infuraId: INFURA_ID, // required
      //       },
      //     },

      //   }
      //   let web3Modal
      //   // if (typeof window !== 'undefined') {
      //     web3Modal = new Web3Modal({
      //       network: 'mainnet', // optional
      //       providerOptions, // required
      //       cacheProvider: true,
      //     })
      //   // }
      //   const provider = await web3Modal.connect()
      //   const web3 = new Web3(provider)
      //   resolve(web3)
        
      // });


      const INFURA_ID = '9a06afffd9994e19a25b9c505e96aace'

      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: INFURA_ID, // required
          },
        },

      }
      let web3Modal
      // if (typeof window !== 'undefined') {
        web3Modal = new Web3Modal({
          network: 'mainnet', // optional
          providerOptions, // required
          cacheProvider: true,
        })
      // }
      const provider = await web3Modal.connect()
      const web3 = new Web3(provider)
      resolve(web3)
    })()
  });

export default getWeb3;
