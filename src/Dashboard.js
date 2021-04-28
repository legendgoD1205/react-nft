import React from "react";
import NFAStaked from './components/NFAStaked'
import NFSCard from './components/NFACard';
import Stake from './components/Stake';
import {Grid, Paper, Container, Box, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Logo from './assets/logo.png'
import Male from './assets/male-gender.png';
import Female from './assets/female-sign.png';
import BabyCyan from './assets/toddler.png';
import Accounts from './assets/accounts.png';
import Typography from "@material-ui/core/Typography";
import theme from "./theme";
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import StakingReward from "./components/StakingRewards";
import MyContext from './lib/context'

function Dashboard({account, balance}) {
  const connectWallet = React.useContext(MyContext);
  const responsiveTheme = useTheme();
  const isMobile = useMediaQuery(responsiveTheme.breakpoints.down('xs'), {
    defaultMatches: true
  });
  const useStyles = makeStyles( theme => ({
    root: {
      padding: `${isMobile ? '16px' : '64px'}`,
      maxWidth: '1440px',
    },
    logo: {
      '& >img': {
        width: '50%',
      },
      marginTop: `${isMobile ? '16px' : '-16px'}`,
      marginBottom: theme.spacing(2),
    },
    firstTitle: {
      margin: `36px 24px 18px 24px`,
      fontSize: '24px',
      fontWeight: '900'
    },
    title: {
      margin: theme.spacing(3),
      fontSize: '24px',
      fontWeight: '900'
    },
    button: {
      fontWeight: 700,
      borderRadius: '14px',
      fontSize: '16px',
    },
    Btn: {
      cursor: 'pointer'
    },
    padding6: {
      padding: '6px',
    },
    topText: {
      fontWeight: '700',
      fontSize: '14px',
      display: 'inline-flex',
      width: 'fit-content',
      marginRight: '12px',
    }
  }));

  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper elevation={1}>
          <Grid container className={classes.root}>
            <Grid container justify="flex-end">
              <Grid container direction="column">
                <Grid container direction="row" alignItems="center" justify={isMobile ? "space-between" : "flex-end"}>
                  <Typography className={`${classes.topText} ${classes.Btn}`}>Home</Typography>
                  <Button onClick={connectWallet} variant="contained" color="primary" className={classes.button}>
                    Connect wallet
                  </Button>
                </Grid>
                <Grid container direction="column" alignItems="flex-end" justify="flex-end">
                  <Typography className={classes.topText}>{account}</Typography>
                  {
                    balance !== '' ? (<Typography className={classes.topText}>{balance + "ETH"}</Typography>): ""
                  }
                </Grid>
              </Grid>
            </Grid>
            <Grid className={classes.logo} container justify="center" alignItems="flex-start">
              <img src={Logo}  alt="logo"/>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3}>
                <NFAStaked bgColor={theme.palette.secondary.light} imgSrc={Female} count={150} text="NFA FEMALES STAKED" />
              </Grid>
              <Grid className={classes.padding6} item xs={12} sm={6} md={3}>
                <NFAStaked bgColor={theme.palette.primary.main} imgSrc={Male} count={250} text="NFA MALES STAKED"  />
              </Grid>
              <Grid className={classes.padding6} item xs={12} sm={6} md={3}>
                <NFAStaked bgColor={theme.palette.primary.light} imgSrc={BabyCyan} count={50} text="NFA BABIES STAKED" />
              </Grid>
              <Grid className={classes.padding6} item xs={12} sm={6} md={3}>
                <NFAStaked bgColor={theme.palette.third.light} imgSrc={Accounts} count={25} text="NFA FAMILIES STAKED" />
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={`${classes.firstTitle}`} variant="h4">MY NAFS</Typography>
            </Grid>
            <Grid item xs={12}>
              <NFSCard />
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Grid item>
                  <Typography className={classes.title} variant="h4">STAKE</Typography>
                </Grid>
                <Stake />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid item>
                  <Typography className={classes.title} variant="h4">STAKING REWARDS</Typography>
                </Grid>
                <StakingReward isMobile={isMobile} />
              </Grid>
            </Grid>
          </Grid>
      </Paper>
    </Container>
  );
}

export default Dashboard;
