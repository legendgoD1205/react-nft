import React, { Component, useContext } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { ToastContainer, toast } from "react-toastify";
import theme from "./theme";
import Dashboard from "./Dashboard";
import MyContext from "./lib/context";
import Web3 from "web3";
import axios from "axios";
import {
  API_URL_AFTER,
  API_URL_BEFORE,
  APETOKEN_ADDRESS,
  STAKINGPOOL_ADDRESS,
  API_ADDRESS,
  CHAIN_ID,
} from "./lib/constant";
import Apetoken from "./abis/ApeToken.json";
import Stakingpool from "./abis/StakingPoolNew.json";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      balance: "",
      apeToken: null,
      stakingPool: null,
      femaleId: [],
      maleId: [],
      babyId: [],
      staked: [],
      femaleStakes: 0,
      maleStakes: 0,
      babyStakes: 0,
      curRewards: 0,
    };
    this.connectWallet = this.connectWallet.bind(this);
    this.stake = this.stake.bind(this);
    this.claimBaby = this.claimBaby.bind(this);
    this.getReward = this.getReward.bind(this);
  }

  componentDidMount() {
    if (window.ethereum) {
      this.connectWallet();
    }
    window.onbeforeunload = () => false;
  }

  componentDidUpdate() {
    if (window.ethereum.chainId !== CHAIN_ID) {
      toast.error("Please select correct network!");
    }
  }

  async connectWallet() {
    let res = await this.loadWeb3();
    if (res) await this.loadBlockchainData();
  }

  async loadWeb3() {
    const self = this;

    if (window.ethereum) {
      // register handlers
      window.ethereum.on("chainChanged", function (chain) {
        if (chain !== CHAIN_ID) {
          self.setState({
            account: "",
            balance: "",
            apeToken: null,
            stakingPool: null,
            femaleId: [],
            maleId: [],
            babyId: [],
            staked: [],
            femaleStakes: 0,
            maleStakes: 0,
            babyStakes: 0,
            curRewards: 0,
          });
          return false;
        }
        self.loadBlockchainData();
      });

      window.ethereum.on("accountsChanged", function (accounts) {
        if (accounts === undefined || accounts[0] === undefined) {
          self.setState({
            account: "",
            balance: "",
            apeToken: null,
            stakingPool: null,
            femaleId: [],
            maleId: [],
            babyId: [],
            staked: [],
            femaleStakes: 0,
            maleStakes: 0,
            babyStakes: 0,
            curRewards: 0,
            dueDate: 0,
          });
          return false;
        }

        if (window.ethereum.chainId !== CHAIN_ID) {
          return false;
        } else {
          window.web3.eth.getBalance(accounts[0]).then((data) => {
            let balance = Math.floor(data / 10000000000 + 0.5) / 100000000;
            self.loadBlockchainData();
          });
        }
      });

      window.ethereum.on("disconnect", function () {});

      // /////////////////

      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();

      if (window.ethereum.chainId !== CHAIN_ID) {
        return false;
      }

      return true;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      return true;
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
      return false;
    }
  }

  async loadBlockchainData() {
    if (CHAIN_ID !== window.ethereum.chainId) {
      return;
    }

    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();

    // Load contracts
    try {
      const apeToken = new web3.eth.Contract(Apetoken, APETOKEN_ADDRESS);
      this.setState({ apeToken });
    } catch (err) {
      console.log(err);
      this.setState({ apeToken: null });
    }

    try {
      const stakingPool = new web3.eth.Contract(
        Stakingpool,
        STAKINGPOOL_ADDRESS
      );

      this.setState({ stakingPool });

      const dateValue = await stakingPool.methods
        .breedingEnd(accounts[0])
        .call();

      const endDate = new Date(dateValue * 1000);
      this.setState({ dueDate: endDate - new Date() });
    } catch (err) {
      console.log(err);
      this.setState({ stakingPool: null });
    }

    // Load balances
    let balance =
      Math.floor((await web3.eth.getBalance(accounts[0])) / 10000000000 + 0.5) /
      100000000;
    this.setState({ account: accounts[0], balance: balance });

    // get Staked List ////
    if (this.state.stakingPool !== null) {
      this.state.stakingPool.methods
        .getStaked(this.state.account)
        .call()
        .then((data) => {
          axios
            .get(
              API_ADDRESS +
                "stakedTokens?ids=" +
                JSON.stringify(data) +
                "&chainId=" +
                window.ethereum.chainId
            )
            .then((response) => {
              this.setState({ staked: response.data });
            });
        });
    }

    // get total Staked List//
    const self = this;
    const params = { account: accounts[0], chainId: window.ethereum.chainId };
    axios.get(API_ADDRESS + "allStaked", { params }).then((response) => {
      let data = response.data;
      let fs = 0,
        ms = 0,
        bs = 0;
      data.forEach((data) => {
        switch (data.gender) {
          case 1:
            fs = data.count;
            break;
          case 2:
            ms = data.count;
            break;
          default:
            bs = data.count;
        }
      });
      self.setState({
        femaleStakes: fs,
        maleStakes: ms,
        babyStakes: bs,
      });
    });
    // ///////////////////////

    // get current Rewards State//
    if (this.state.stakingPool !== null) {
      setInterval(() => {
        self.state.stakingPool.methods
          .earned(self.state.account)
          .call({ from: self.state.account })
          .then((data) => {
            self.setState({ curRewards: Math.floor(data * 100 + 0.5) / 100 });
          });
      }, 6000);
    }
    // ///////////////////////////

    this.loadCollections(accounts[0]);
  }

  loadCollections(account) {
    if (account === undefined) return;

    if (window.ethereum.chainId !== CHAIN_ID) {
      return;
    }

    let maleId = [];
    let femaleId = [];
    let babyId = [];
    const self = this;
    const url = API_URL_BEFORE + account + API_URL_AFTER;

    axios
      .get(url)
      .then(function (response) {
        // handle success
        let data = response.data.assets;
        console.log(data);
        let token_ids = [];
        data.forEach((value) => {
          token_ids.push(value.token_id);
        });
        // enable api when loading tokens from network
        axios
          .put(API_ADDRESS + "accounts", {
            account,
            female: femaleId.length,
            male: maleId.length,
            baby: babyId.length,
            chainId: window.ethereum.chainId,
          })
          .then((response) => {});

        axios
          .put(API_ADDRESS + "tokens", {
            ids: token_ids,
            account,
            chainId: window.ethereum.chainId,
          }) //sync tokes list
          .then((response) => {
            let ids = response.data.ids;
            const forEach = (_) => {
              let addData = [];
              data.forEach((oneData) => {
                if (ids.includes(oneData["token_id"])) {
                  if (
                    oneData.hasOwnProperty("traits") &&
                    oneData["traits"].length !== 0
                  ) {
                    let traits = oneData.traits;
                    if (traits.length > 0) {
                      for (let i = 0; i < traits.length; i++) {
                        if (traits[i]["trait_type"] === "Gender") {
                          switch (traits[i].value) {
                            case "Male":
                              oneData["gender"] = 2;
                              break;
                            case "Female":
                              oneData["gender"] = 1;
                              break;
                            default:
                              oneData["gender"] = 3;
                          }
                        }
                      }
                    }
                  } else {
                    oneData["gender"] = (oneData["id"] % 3) + 1; // for RINKEBY
                  }

                  addData.push({
                    name: oneData["name"],
                    token_id: oneData["token_id"],
                    gender: oneData["gender"],
                    traits: oneData["traits"].length,
                    chainId: window.ethereum.chainId,
                  });
                }
              });

              axios
                .post(API_ADDRESS + "createtokens", { addData, account })
                .then((status) => {
                  const params = {
                    owner: account,
                    chainId: window.ethereum.chainId,
                  };

                  axios
                    .get(API_ADDRESS + "initiatedTokens", { params })
                    .then(({ data }) => {
                      data = data.assets;
                      data.forEach((ape) => {
                        switch (ape["gender"]) {
                          case 1:
                            femaleId.push(ape);
                            break;
                          case 2:
                            maleId.push(ape);
                            break;
                          default:
                            babyId.push(ape);
                        }
                      });

                      self.setState({ maleId, femaleId, babyId });
                    });
                });
            };

            forEach();
          });
        // //////////////////////////////////////////////
      })
      .catch(function (error) {
        // handle error
      })
      .then(function () {
        // always executed
      });
  }

  stake(f, m, b, reset) {
    if (this.state.stakingPool === null || this.state.apeToken === null) {
      toast.error("Failed loading Contract!");
      return;
    }

    // set approval ////
    this.state.apeToken.methods
      .isApprovedForAll(this.state.account, this.state.stakingPool._address)
      .call()
      .then((data) => {
        if (!data) {
          this.state.apeToken.methods
            .setApprovalForAll(this.state.stakingPool._address, true)
            .send({ from: this.state.account })
            .then((data) => {
              this.stakeAction(f, m, b, reset);
            });
        } else {
          this.stakeAction(f, m, b, reset);
        }
      });

    this.state.apeToken.methods
      .isApprovedForAll(this.state.account, this.state.apeToken._address)
      .call()
      .then((data) => {
        if (!data) {
          this.state.apeToken.methods
            .setApprovalForAll(this.state.apeToken._address, true)
            .send({ from: this.state.account })
            .then("receipt", (receipt) => {});
        }
      });
    // ////////////////
  }

  stakeAction(f, m, b, reset) {
    let cm = 0,
      cf = 0,
      cb = 0;
    let staked = this.state.staked;
    staked.forEach((data) => {
      switch (data.gender) {
        case 1:
          cf++;
          break;
        case 2:
          cm++;
          break;
        default:
          cb++;
      }
    });

    if (m.length + cm > 2) {
      toast.error("2 Adult Male Max!");
      return;
    }
    if (b.length + cb > 2) {
      toast.error("2 Babies Max!");
      return;
    }
    if (f.hasOwnProperty("value") && cf !== 0 && f.value !== null) {
      toast.error("1 Adult Female Max!");
      return;
    }

    let stakeArray = [];
    let stakeCount = { f: 0, m: 0, b: 0 };
    if (f.hasOwnProperty("value") && f.value !== null) {
      stakeArray = [f.value];
      stakeCount.f = 1;
    }
    if (m.length !== 0) {
      m.forEach((data) => stakeArray.push(data.value));
      stakeArray.m = m.length;
    }
    if (b.length !== 0) {
      b.forEach((data) => stakeArray.push(data.value));
      stakeArray.b = b.length;
    }

    if (stakeArray.length !== 0) {
      const self = this;
      this.state.stakingPool.methods
        .stakeBatch(stakeArray)
        .send({ from: this.state.account })
        .then((data) => {
          reset();
          self.loadBlockchainData();
        })
        .catch((err) => console.log(err));
    }
  }

  claimBaby() {
    if (this.state.stakingPool === null) {
      toast.error("Failed loading contract!");
      return;
    }
    let femaleData = null;
    let i = 0;
    for (i = 0; i < this.state.staked.length; i++) {
      if (this.state.staked[i].gender === 1) {
        femaleData = this.state.staked[i];
        break;
      }
    }

    if (femaleData == null) {
      toast.error("No female staked!");
      return;
    }

    let maxBabyCount =
      femaleData["class"] === 3 ? 6 : femaleData["class"] === 2 ? 4 : 2;

    if (femaleData["baby_count"] >= maxBabyCount) {
      toast.error("Staked female already has max babies!");
      return;
    }

    const self = this;

    this.state.stakingPool.methods
      .claimBaby()
      .send({ from: this.state.account })
      .then((data) => {
        self.loadBlockchainData();
      });
  }

  getReward() {
    if (this.state.stakingPool === null) {
      toast.error("Failed loading contract!");
      return;
    }

    const self = this;

    this.state.stakingPool.methods
      .earned(this.state.account)
      .call({ from: this.state.account })
      .then((rewards) => {
        this.state.stakingPool.methods
          .exit()
          .send({ from: this.state.account })
          .then((data) => {
            self.loadBlockchainData();
          });
      });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MyContext.Provider value={this}>
          <ToastContainer />
          <Dashboard
            account={this.state.account}
            balance={this.state.balance}
          />
        </MyContext.Provider>
      </ThemeProvider>
    );
  }
}
