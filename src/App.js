import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {ToastContainer, toast} from 'react-toastify';
import theme from './theme';
import Dashboard from "./Dashboard";
import MyContext from './lib/context'
import Web3 from 'web3'
import axios from 'axios'
import Apetoken from './abis/ApeToken.json'
import Stakingpool from './abis/StakingPool.json'
import 'react-toastify/dist/ReactToastify.css'

toast.configure();
export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      balance: '',
      products: [],
      loading: true,
      apeToken: null,
      stakingPool: null,
      address: null,
      femaleId: [],
      maleId: [],
      babyId: [],
      babyOf: {},
      staked: []
    }
    this.connectWallet = this.connectWallet.bind(this)
    this.initiate = this.initiate.bind(this)
    this.getToken = this.getToken.bind(this)
    this.stake = this.stake.bind(this)
    this.claimBaby = this.claimBaby.bind(this)
  }

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


  loadCollections(account) {
    let maleId = []
    let femaleId = []
    let babyId = []
    const self = this
    const url = 'https://api.opensea.io/api/v1/assets?owner=' + account +'&order_direction=desc&offset=0&limit=20&collection=nonfungibleapes'
    console.log(url)
    axios.get(url)
    .then(function (response) {
      // handle success
      let data = response.data.assets
      console.log(data)
      data.forEach(value => {
        let traits = value.traits
        for(let i = 0; i < traits.length; i++) {
          if(traits[i]['trait_type'] == 'Gender') {
            switch(traits[i].value) {
              case "Male":
                maleId.push(value)
                break;
              case "Female":
                femaleId.push(value)
                break;
              default:
                babyId.push(value)
            }
          }
        }
      })
      self.setState({maleId, femaleId, babyId})
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account
    const accounts = await web3.eth.getAccounts()
    const networkId = await web3.eth.net.getId()
    const networkData = Apetoken.networks[networkId]
    if(networkData == undefined) {
      toast.error("Please choose correct Network!")
      return
    }
    const apeToken = new web3.eth.Contract(Apetoken.abi, networkData.address)
    this.setState({apeToken})
    const networkDataStaking = Stakingpool.networks[networkId]
    const stakingPool = new web3.eth.Contract(Stakingpool.abi, networkDataStaking.address)
    this.setState({stakingPool})
    let balance = Math.floor(await web3.eth.getBalance(accounts[0]) / 10000000000000000 + 0.5) / 100
    this.setState({account: accounts[0], balance: balance})
    this.loadCollections(accounts[0])
  }

  async connectWallet() {
    let res = await this.loadWeb3()
    if (res)
      await this.loadBlockchainData()
  }

  initiate() {
    // for(let i=211; i <= 220; i++)
    //   this.state.apeToken.methods.mint(this.state.account, i, 2).send({from: this.state.account})
    //   .then('receipt', (receipt) => {
    //   })
      // this.state.stakingPool.methods.initiate([211,212,213,214,215,216,217,218,219,220], 1).send({from: this.state.account})
      // .then('receipt', receipt =>{
      //   console.log(receipt)
      // })
    //   for(let i=221; i <= 230; i++)
    //   this.state.apeToken.methods.mint(this.state.account, i, 2).send({from: this.state.account})
    //   .then('receipt', (receipt) => {
    //   })
      // this.state.stakingPool.methods.initiate([221,222,223,224,225,226,227,228,229,230], 2).send({from: this.state.account})
      // .then('receipt', receipt =>{
      //   console.log(receipt)
      // })
      // for(let i=241; i <= 250; i++)
      //   this.state.apeToken.methods.mint(this.state.account, i, 2).send({from: this.state.account})
      //   .then('receipt', (receipt) => {
      //   })
      // this.state.stakingPool.methods.initiate([231,232,233,234,235,236,237,238,239,240], 3).send({from: this.state.account})
      // .then('receipt', receipt =>{
      //   console.log(receipt)
      // })
      // this.state.stakingPool.methods.initiateBabies([211,212,213,214,215,216,217,218,219,220], [231,232,233,234,235,236,237,238,239,240]).send({from: this.state.account})
      // .then('receipt', receipt =>{
      //   console.log(receipt)
      // })
      //   this.state.stakingPool.methods.initiate([241,242,243,244,245,246,247,248,249,250], 3).send({from: this.state.account})
      //   .then('receipt', receipt =>{
      //     console.log(receipt)
      //   })
      //   this.state.stakingPool.methods.initiateBabies([211,212,213,214,215,216,217,218,219,220], [241,242,243,244,245,246,247,248,249,250]).send({from: this.state.account})
      //   .then('receipt', receipt =>{
      //     console.log(receipt)
      //   })
    // this.state.apeToken.methods.setApprovalForAll("0x92bA8aF10f173C03eee43ca772344e971C939cFD", true).send({from: this.state.account})
    // .then('receipt', receipt => {
    //   console.log(receipt)
    // })
    // this.state.apeToken.methods.setApprovalForAll(this.state.apeToken._address, true).send({from: this.state.account})
    // .then('receipt', receipt => {
    //   console.log(receipt)
    // })
    // this.state.apeToken.methods.setApprovalForAll(this.state.stakingPool._address, true).send({from: this.state.account})
    // .then('receipt', receipt => {
    //   console.log(receipt)
    // })
    // this.state.apeToken.methods.safeTransferFrom(this.state.account, "0x92bA8aF10f173C03eee43ca772344e971C939cFD", 211, 1, "0x0").send({from: this.state.account})
    // .then('receipt', receipt => {
    //   console.log(receipt)
    // })
    // this.state.apeToken.methods.safeTransferFrom(this.state.account, "0x92bA8aF10f173C03eee43ca772344e971C939cFD", 212, 1, "0x0").send({from: this.state.account})
    // .then('receipt', receipt => {
    //   console.log(receipt)
    // })
    // this.state.apeToken.methods.safeTransferFrom(this.state.account, "0x92bA8aF10f173C03eee43ca772344e971C939cFD", 223, 1, "0x0").send({from: this.state.account})
    // .then('receipt', receipt => {
    //   console.log(receipt)
    // })
    // this.state.apeToken.methods.safeTransferFrom(this.state.account, "0x92bA8aF10f173C03eee43ca772344e971C939cFD", 222, 1, "0x0").send({from: this.state.account})
    // .then('receipt', receipt => {
    //   console.log(receipt)
    // })
    // this.state.stakingPool.methods.notifyRewardAmount(1).send({from:this.state.account}).then(data => console.log(data))
    this.state.apeToken.methods.balanceOf(this.state.account, 231).call().then(data => console.log(data))
    this.state.apeToken.methods.balanceOf(this.state.account, 241).call().then(data => console.log(data))
    this.state.apeToken.methods.isApprovedForAll(this.state.account, this.state.stakingPool._address).call().then(data => console.log(data))
    this.state.stakingPool.methods.getStaked(this.state.account).call().then(data => console.log(data))
    this.state.stakingPool.methods.getReward().send({from: this.state.account}).then(data => console.log(data))
    // this.state.stakingPool.methods.earned(this.state.account).call().then(data => console.log(data))
  }

  getToken() {
    // this.state.apeToken.methods.balanceOf(this.state.account, 827).call().then(data => {console.log(data)})
    this.state.stakingPool.methods.getStaked(this.state.account).call().then(data => console.log(data))
  }

  stake(f, m, b) {
    if(m.length > 2){
      toast.error("2 Adult Male Max!")
      return
    }
    if(b.length > 2) {
      toast.error("2 Babies Max!")
      return
    }
    let stakeArray = []
    if(f.hasOwnProperty('value')) {
      stakeArray = [f.value]
    }
    if(m.length !== 0) {
      m.forEach(data => stakeArray.push(data.value))
    }
    if(b.length !== 0) {
      b.forEach(data => stakeArray.push(data.value))
    }
    if(stakeArray.length != 0)
      for(let i=0;i<stakeArray.length;i++)
        this.state.stakingPool.methods.stake(stakeArray[i]).send({from: this.state.account}).then(data => console.log(data))
  }

  claimBaby () {
    console.log("claimBaby")
    this.state.stakingPool.methods.claimBaby().send({from:this.state.account}).then(data => console.log(data))
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MyContext.Provider value={this}>
          <ToastContainer />
          <Dashboard account= {this.state.account} balance={this.state.balance}/>
        </MyContext.Provider>
      </ThemeProvider>
    );
  }
}
