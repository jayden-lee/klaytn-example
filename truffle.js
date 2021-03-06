// config for klaytn
const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = `https://api.baobab.klaytn.net:8651`
const PRIVATE_KEY = '0x6370347ccbca103bb720908e52ea3524eb97579b78096d1fc6ab7d52f811b5cb'

module.exports = {
    networks: {
      klaytn: {
        provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
        network_id: NETWORK_ID,
        gas: GASLIMIT,
        gasPrice: null,
      },
    },
  
    // Specify the version of compiler, we use 0.4.24
    compilers: {
      solc: {
        version: '0.4.24',
      },
    },
}  