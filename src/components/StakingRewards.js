import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Divider from "@material-ui/core/Divider";
import BabySvg from '../assets/baby.svg';
import FemaleSvg from "../assets/female.svg";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const StakingReward = ({Icon}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: '264px',
      padding: theme.spacing(2),
      borderRadius: '12px',
      background: '#f1f1f1',
      position: 'relative'
    },
    icon: {
      margin: theme.spacing(1),
      width: '20px',
      height: '20px',
      padding: '12px',
      borderRadius: '12px',
      backgroundColor: 'white',
    },
    tDate: {
      width: 'fit-content',
    },
    tEther: {
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      width: 'fit-content',
    },
    date: {
      flexFlow: 'row',
    },
    line: {
      borderBottom: 'solid 1px white',
      height: '0px',
      width: '100%',
    },
    content: {
      flexFlow: 'row'
    },
    status: {
      border: 'solid 1px',
      padding: '10px 10px',
      borderColor: '#df9f45',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: 700,
    },
    ether: {
      marginBottom: '2px',
      fontSize: '24px',
      fontWeight: 700
    },
    days: {
      letterSpacing: '2px',
      fontSize: '14px',
      fontWeight: 700
    },
    button: {
      margin: theme.spacing(1),
      padding: '12px 60px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: 700,
    }
  }));

  const classes = useStyles();

  return (
    <Grid className = {classes.root} container direction="column" justify="space-evenly">
      <Grid container className={classes.date} alignItems="center" justify="space-between">
        <img className={classes.icon} src={BabySvg}  alt="avatar"/>
        <Grid className={classes.tDate} container justify="center" direction="column">
          <Typography>Due Date</Typography>
          <Typography className={classes.days}>0 DAYS</Typography>
        </Grid>
        <Typography className={classes.status}>DELIVERED</Typography>
        <Button variant="contained" color="primary" className={classes.button}>
          CLAIM
        </Button>
      </Grid>
      <Grid className={classes.line} />
      <Grid container className={classes.content} justify="space-between" alignItems="center">
        <Grid className={classes.tEther} container justify="center" direction="column">
          <Typography className={classes.ether}>0.57ETH</Typography>
          <Typography className={classes.days}>STAKING REWARDS</Typography>
        </Grid>
        <Button variant="contained" color="primary" className={classes.button}>
          CLAIM
        </Button>
      </Grid>
    </Grid>
  )
}

export default StakingReward