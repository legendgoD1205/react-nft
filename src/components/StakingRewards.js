import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Baby from '../assets/baby.png';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const StakingReward = ({Icon}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      height: '219px',
      padding: theme.spacing(2),
      borderRadius: '12px',
      background: '#f1f1f1',
      position: 'relative'
    },
    icon: {
      margin: theme.spacing(1),
      width: '48px',
      height: '48px',
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
      padding: '8px 10px',
      borderColor: '#df9f45',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: 700,
    },
    ether: {
      marginBottom: '2px',
      fontSize: '26px',
      letterSpacing: '1px',
      fontWeight: 700
    },
    dueDate : {
      letterSpacing: '1px',
      fontWeight: 700
    },
    days: {
      marginTop: '4px',
      fontSize: '16px',
      fontWeight: 700
    },
    rewards: {
      letterSpacing: '2px',
      fontSize: '16px',
      fontWeight: 700
    },
    button: {
      margin: theme.spacing(1),
      width: '35%',
      height: '40px',
      borderRadius: '12px',
      fontSize: '14px',
      fontWeight: 700,
    }
  }));

  const classes = useStyles();

  return (
    <Grid className = {classes.root} container direction="column" justify="space-evenly">
      <Grid container className={classes.date} alignItems="center" justify="space-between">
        <Grid className={classes.icon} container justify="center" alignItems="center">
          <img src={Baby} alt="avatar"/>
        </Grid>
        <Grid className={classes.tDate} container justify="center" direction="column">
          <Typography className={classes.dueDate}>Due Date</Typography>
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
          <Typography className={classes.rewards}>STAKING REWARDS</Typography>
        </Grid>
        <Button variant="contained" color="primary" className={classes.button}>
          CLAIM
        </Button>
      </Grid>
    </Grid>
  )
}

export default StakingReward