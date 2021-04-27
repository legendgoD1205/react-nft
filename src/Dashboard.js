import React from "react";
import NFAStaked from './components/NFAStaked'
import NFSCard from './components/NFACard';
import Stake from './components/Stake';
import {Grid, Paper, Container, Box, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Logo from './assets/logo.png'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MaleSvg from './assets/male.svg';
import FemaleSvg from './assets/female.svg';
import BabySvg from './assets/baby.svg';
import UsersSvg from './assets/family.svg';
import Typography from "@material-ui/core/Typography";
import theme from "./theme";
import StakingReward from "./components/StakingRewards";
import MyContext from './lib/context'

function Dashboard({account, balance}) {
  console.log(balance)
  const connectWallet = React.useContext(MyContext)
  const useStyles = makeStyles( theme => ({
    root: {
      padding: theme.spacing(4),
      maxWidth: '1280px',
    },
    logo: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(8),
      height: '100px',
      '& >img': {
        width: '400px',
        height: '130px'
      },
    },
    title: {
      margin: theme.spacing(2),
      fontSize: '18px',
      fontWeight: 'bold'
    },
    button: {
      margin: theme.spacing(1),
      padding: '8px 10px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: 700,
    },
    topBtn: {
      position: 'absolute',
      top: '24px',
      right: '84px',
    },
    topText: {
      fontWeight: '700',
      fontSize: '14px',
      cursor: 'pointer',
      display: 'inline-flex',
      width: 'fit-content',
      marginRight: '12px',
    }
  }));

  const classes = useStyles();

  return (
    <Container justify="center" style={{position: 'relative'}}>
      <Paper elevation={1}>
        <Box p={6}>
          <Grid className={classes.root}>
            <Grid className={classes.logo} container justify="center" alignItems="flex-start">
              <img src={Logo}  alt="logo"/>
            </Grid>
            <Grid className={classes.topBtn}>
              <Grid container direction="column">
                <Grid container direction="row" alignItems="center" justify="flex-end">
                  <Typography className={classes.topText}>Home</Typography>
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
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <NFAStaked bgColor={theme.palette.secondary.light} imgSrc={FemaleSvg} count={150} text="NFA FEMALES STAKED" />
              </Grid>
              <Grid item xs={3}>
                <NFAStaked bgColor={theme.palette.primary.main} imgSrc={MaleSvg} count={250} text="NFA MALES STAKED"  />
              </Grid>
              <Grid item xs={3}>
                <NFAStaked bgColor={theme.palette.primary.light} imgSrc={BabySvg} count={50} text="NFA BABIES STAKED" />
              </Grid>
              <Grid item xs={3}>
                <NFAStaked bgColor={theme.palette.third.light} imgSrc={UsersSvg} count={25} text="NFA FAMILIES STAKED" />
              </Grid>
            </Grid>
            <Grid item>
              <Typography className={classes.title} variant="h4">MY NAFS</Typography>
            </Grid>
            <Grid item xs={12}>
              <NFSCard Icon={AddCircleOutlineIcon} />
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Grid item>
                  <Typography className={classes.title} variant="h4">STAKE</Typography>
                </Grid>
                <Stake />
              </Grid>
              <Grid item xs={6}>
                <Grid item>
                  <Typography className={classes.title} variant="h4">MY NAFS</Typography>
                </Grid>
                <StakingReward />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default Dashboard;
