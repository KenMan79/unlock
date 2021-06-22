// hardhat.config.js

require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-waffle");

// erc1820 deployment
require('hardhat-erc1820')

// for upgrades
require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')

const { task } = require('hardhat/config')

const {
  supportedNetworks,
  getProviderUrl,
  getAccounts,
} = require('./helpers/network')

const settings = {
  optimizer: {
    enabled: true,
    runs: 200,
  },
}

// When running CI, we connect to the 'ganache' container
const testHost = process.env.CI === 'true' ? 'ganache' : '127.0.0.1'

const networks = {
  ganache: {
    url: `http://${testHost}:8545`,
    chainId: 1337,
    accounts: {
      mnemonic: 'hello unlock save the web',
    },
  },
}

// parse additional networks and accounts
supportedNetworks.forEach((net) => {
  try {
    const url = getProviderUrl(net)
    const accounts = getAccounts(net)

    if (accounts && url) {
      networks[net] = {
        url,
        accounts: {
          mnemonic: accounts,
        },
      }
      // eslint-disable-next-line no-console
      console.log(`Added config for ${net}.`)
    }
  } catch (error) {
    // console.error(error.message)
    // console.log(`skipped.`)
  }
})

task('accounts', 'Prints the list of accounts', async () => {
  // eslint-disable-next-line no-undef
  const accounts = await ethers.getSigners()

  accounts.forEach((account, i) => {
    // eslint-disable-next-line no-console
    console.log(`[${i}]: ${account.address}`)
  })
})

task('balance', "Prints an account's balance")
  .addParam('account', "The account's address")
  .setAction(async (taskArgs) => {
    const account = web3.utils.toChecksumAddress(taskArgs.account)
    const balance = await web3.eth.getBalance(account)
    // eslint-disable-next-line no-console
    console.log(web3.utils.fromWei(balance, 'ether'), 'ETH')
  })



/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks,
  solidity: {
    compilers: [
      { version: '0.5.17', settings },
      { version: '0.6.12', settings },
      { version: '0.7.6', settings },
      { version: '0.8.4', settings },
    ],
  },
}