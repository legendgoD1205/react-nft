import React from "react";
import NFAStaked from "./components/NFAStaked";
import NFSCard from "./components/NFACard";
import TestCard from "./components/TestCard";
import Stake from "./components/Stake";
import OnStaking from "./components/OnStaking";
import {
  Grid,
  Paper,
  Container,
  Button,
  Modal,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Logo from "./assets/logo.png";
import Male from "./assets/male-gender.png";
import Female from "./assets/female-sign.png";
import BabyCyan from "./assets/toddler.png";
import Accounts from "./assets/accounts.png";
import Typography from "@material-ui/core/Typography";
import theme from "./theme";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import StakingReward from "./components/StakingRewards";
import MyContext from "./lib/context";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import {
  EMAILJS_USER_ID,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from "./lib/constant";

function Dashboard({ account, balance }) {
  let after = account.slice(-4, account.length);
  const connectWallet = React.useContext(MyContext).connectWallet;
  const state = React.useContext(MyContext).state;
  const responsiveTheme = useTheme();
  const isMobile = useMediaQuery(responsiveTheme.breakpoints.down("sm"), {
    defaultMatches: true,
  });

  const [tokenModal, setTokenModal] = React.useState(false);

  const requestToken = () => {
    let name = document.getElementById("userName").value;
    let email = document.getElementById("userEmail").value;
    if (name === "" || email === "") {
      toast.error("Please input all field!");
      return;
    }
    let account = state.account;
    emailjs.init(EMAILJS_USER_ID);
    let html = `<h4>Name: ${name}</h4><h4>E-mail: ${email}</h4><h4>Wallet: ${account}</h4>`;
    let data = { from_name: name, message: html };
    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, data).then(
      (data) => {
        console.log(data);
      },
      function (err) {
        console.log(err);
      }
    );
    toast.success("Operation successfully!")
    setTokenModal(false);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      padding: `${isMobile ? "16px" : "64px"}`,
      maxWidth: "1440px",
    },
    logo: {
      "& >img": {
        width: "50%",
      },
      marginTop: `${isMobile ? "16px" : "-16px"}`,
      marginBottom: theme.spacing(2),
    },
    firstTitle: {
      margin: `36px 24px 18px 24px`,
      fontSize: "24px",
      fontWeight: "900",
    },
    title: {
      margin: theme.spacing(3),
      fontSize: "24px",
      fontWeight: "900",
    },
    button: {
      fontWeight: 700,
      borderRadius: "14px",
      fontSize: "16px",
    },
    Btn: {
      cursor: "pointer",
    },
    padding6: {
      padding: "6px",
    },
    topText: {
      fontWeight: "700",
      fontSize: "14px",
      display: "inline-flex",
      width: "fit-content",
      marginRight: "12px",
    },
    accountName: {
      fontWeight: "700",
      fontSize: "14px",
      width: "fit-content",
      maxWidth: "160px",
      marginRight: "0px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    accountLast: {
      fontWeight: "700",
      fontSize: "14px",
      width: "fit-content",
      marginRight: "12px",
      "@media(max-width: 600px)": {
        marginRight: "4px",
      },
    },
    testBlock: {
      marginTop: "42px",
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modalBox: {
      width: "fit-content",
      padding: theme.spacing(2),
      textAlign: "center",
    },
    modalContainer: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    mR12: {
      marginRight: "12px",
    },
    requestBtn: {
      width: 'fit-content'
    }
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper elevation={1}>
        <Grid container className={classes.root}>
          <Grid container justify="flex-end">
            <Grid container direction="column">
              <Grid
                container
                direction="row"
                alignItems="center"
                justify={isMobile ? "space-between" : "flex-end"}
              >
                <Typography className={`${classes.topText} ${classes.Btn}`}>
                  Home
                </Typography>
                <Grid item>
                  <Button
                    onClick={connectWallet}
                    variant="contained"
                    color="primary"
                    className={`${classes.button} ${classes.mR12}`}
                    disabled={account !== ""}
                  >
                    {account !== "" ? "Connected" : "Connect Wallet"}
                  </Button>
                  <Button
                    onClick={() => setTokenModal(true)}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    disabled={account === ""}
                  >
                    Request Token
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                alignItems="flex-end"
                justify="flex-end"
              >
                <Grid
                  container
                  direction="row"
                  alignItems="flex-end"
                  justify="flex-end"
                >
                  <Typography className={classes.accountName}>
                    {account}
                  </Typography>
                  <Typography className={classes.accountLast}>
                    {after}
                  </Typography>
                </Grid>
                {balance !== "" ? (
                  <Typography className={classes.topText}>
                    {balance + "ETH"}
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className={classes.logo}
            container
            justify="center"
            alignItems="flex-start"
          >
            <img src={Logo} alt="logo" />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <NFAStaked
                bgColor={theme.palette.secondary.light}
                imgSrc={Female}
                count={state.femaleStakes}
                text="NFA FEMALES STAKED"
              />
            </Grid>
            <Grid className={classes.padding6} item xs={12} sm={6} md={3}>
              <NFAStaked
                bgColor={theme.palette.primary.main}
                imgSrc={Male}
                count={state.maleStakes}
                text="NFA MALES STAKED"
              />
            </Grid>
            <Grid className={classes.padding6} item xs={12} sm={6} md={3}>
              <NFAStaked
                bgColor={theme.palette.primary.light}
                imgSrc={BabyCyan}
                count={state.babyStakes}
                text="NFA BABIES STAKED"
              />
            </Grid>
            <Grid className={classes.padding6} item xs={12} sm={6} md={3}>
              <NFAStaked
                bgColor={theme.palette.third.light}
                imgSrc={Accounts}
                count={0}
                text="NFA FAMILIES STAKED"
              />
            </Grid>
          </Grid>
          {
            //test block
            // (<Grid className={classes.testBlock} item xs={12}>
            //   <TestCard />
            // </Grid>)
          }

          {
            // end test block
          }
          <Grid item>
            <Typography className={`${classes.firstTitle}`} variant="h4">
              MY NFAS
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <NFSCard />
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Grid item>
                <Typography className={classes.title} variant="h4">
                  ON STAKING
                </Typography>
              </Grid>
              <OnStaking />
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid item>
                <Typography className={classes.title} variant="h4">
                  STAKE
                </Typography>
              </Grid>
              <Stake />
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid item>
                <Typography className={classes.title} variant="h4">
                  STAKING REWARDS
                </Typography>
              </Grid>
              <StakingReward isMobile={isMobile} />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Modal
        open={tokenModal}
        onClose={() => setTokenModal(false)}
        className={classes.modal}
      >
        <Paper className={classes.modalBox}>
          <Typography variant="h4">
            Please insert your info & request test token
          </Typography>
          <Grid container direction="column" justify="center" alignItems="center" className={classes.modalContainer}>
            <TextField id="userName" label="Name" />
            <TextField id="userEmail" label="E-mail" />
            <Button
              variant="contained"
              className={`${classes.button} ${classes.requestBtn}`}
              color="primary"
              onClick={requestToken}
            >
              Request
            </Button>
          </Grid>
        </Paper>
      </Modal>
    </Container>
  );
}

export default Dashboard;
