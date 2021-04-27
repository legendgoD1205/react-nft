import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import theme from './theme';
import Dashboard from "./Dashboard";
import MyContext from './lib/context'
import Web3 from 'web3'

export default class App extends Component {
  
  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
      return true
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
      return true
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
      return false
    }
  }
  
  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId()
    let balance = Math.floor(await web3.eth.getBalance(accounts[0]) / 10000000000000000 + 0.5) / 100 ;
    this.setState({account: accounts[0], balance: balance})
  }

  async connectWallet() {
    let res = await this.loadWeb3()
    if (res)
      await this.loadBlockchainData()
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      balance: '',
      products: [],
      loading: true
    }
    this.connectWallet = this.connectWallet.bind(this)
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MyContext.Provider value={this.connectWallet}>
          <Dashboard account= {this.state.account} balance={this.state.balance}/>
        </MyContext.Provider>
      </ThemeProvider>
    );
  }
}
