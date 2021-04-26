import React from "react";
import NFAStaked from './components/NFAStaked'
import NFSCard from './components/NFACard';
import StackCard from './components/Stake';
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Logo from './assets/logo.png'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MaleSvg from './assets/male.svg';
import FemaleSvg from './assets/female.svg';
import BabySvg from './assets/baby.svg';
import UsersSvg from './assets/family.svg';
import Typography from "@material-ui/core/Typography";
import theme from "./theme";

function Dashboard() {
  const useStyles = makeStyles( theme => ({
    root: {
      padding: theme.spacing(4),
      maxWidth: '1280px',
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.error.light
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
      fontSize: '2rem',
      fontFamily: 'Coda Caption'
    }
  }));

  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid className={classes.root}>
        <Grid className={classes.logo} container justify="center" alignItems="flex-start">
          <img src={Logo}  alt="logo"/>
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
              <Typography className={classes.title} variant="h4">MY NAFS</Typography>
            </Grid>
            <StackCard Icon={AddCircleOutlineIcon} />
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Typography className={classes.title} variant="h4">MY NAFS</Typography>
            </Grid>
            <StackCard Icon={AddCircleOutlineIcon} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
