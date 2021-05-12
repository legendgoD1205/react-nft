import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Baby from '../assets/baby.png'
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import MyContext from '../lib/context'

const StakingReward = ({isMobile}) => {
  const claimBaby = React.useContext(MyContext).claimBaby
  const getReward = React.useContext(MyContext).getReward
  const curRewards = React.useContext(MyContext).state.curRewards
  const useStyles = makeStyles(theme => ({
    root: {
      height: '294px',
      padding: theme.spacing(2),
      borderRadius: '12px',
      background: '#f1f1f1',
      position: 'relative',
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
      alignItems: 'center',
      // '@media(max-width: 960px)': {
      //   alignItems: 'center',
      // },
    },
    bEther: {
      // justifyContent: 'flex-end',
      justifyContent: 'center',
      // '@media(max-width: 960px)': {
      //   justifyContent: 'center',
      // },
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
      flexFlow: 'row',
      // padding: '0px 12px',
      // justifyContent: 'space-between',
      justifyContent: 'space-evenly',
      padding: '0px',
      // '@media(max-width: 1080px)': {
      //   padding: '0px'
      // },
      // '@media(max-width: 960px)': {
      //   justifyContent: 'space-evenly',
      // },
    },
    status: {
      border: 'solid 1px',
      padding: '8px 10px',
      borderColor: '#df9f45',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: 700,
    },
    ether: {
      marginBottom: '2px',
      // fontSize: '36px',
      // letterSpacing: '1px',
      fontWeight: 700,
      // lineHeight: '36px',
      fontSize: '24px',
      letterSpacing: '0px',
      lineHeight: '24px',
      // '@media(max-width: 1080px)': {
      //   fontSize: '24px',
      //   letterSpacing: '0px',
      //   lineHeight: '24px',
      // },
    },
    dueDate : {
      letterSpacing: '1px',
      fontWeight: 700,
      fontSize: '18px',
    },
    days: {
      marginTop: '4px',
      fontSize: '18px',
      fontWeight: 700
    },
    rewards: {
      // letterSpacing: '1px',
      // fontSize: '24px',
      fontWeight: 500,
      // lineHeight: '24px',
      // whiteSpace: 'nowrap',
      fontSize: '18px',
      whiteSpace: 'normal',
      textAlign: 'center',
      letterSpacing: '0px',
      lineHeight: '18px',
      // '@media(max-width: 1080px)': {
      //   fontSize: '18px',
      //   whiteSpace: 'normal',
      //   textAlign: 'center',
      //   letterSpacing: '0px',
      //   lineHeight: '18px',
      // },
    },
    button: {
      margin: theme.spacing(1),
      borderRadius: '14px',
      fontSize: '18px',
      fontWeight: 600,
    },
    disable: {
      color: '#888',
    },
  }));

  const classes = useStyles();

  return (
    <Grid className = {classes.root} container direction="column" justify="space-evenly">
      <Grid container direction="row" alignItems="center" justify="space-between">
        <Grid item xs={6} md={6} container justify="center" alignItems="center">
          <Grid className={classes.icon} container justify="center" alignItems="center">
            <img src={Baby} alt="avatar"/>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6} container justify="center" alignItems="center">
          <Grid className={classes.tDate} container justify="center" direction="column">
            <Typography className={classes.dueDate}>Due Date</Typography>
            <Typography className={`${classes.days}`}>0 <small>DAYS</small></Typography>
          </Grid>
        </Grid>
        <Grid item xs={6} md={6} container justify="center" alignItems="center">
          <Typography className={classes.status}>DELIVERED</Typography>
        </Grid>
        <Grid item xs={6} md={6} container justify="center" alignItems="center">
          <Button onClick={claimBaby} variant="contained" color="primary" className={classes.button}>
            CLAIM
          </Button>
        </Grid>
      </Grid>
      <Grid className={classes.line} />
      <Grid container className={classes.content} justify="space-between" alignItems="center">
        <Grid container item>
          <Grid className={classes.tEther} container justify="center" direction="column">
            <Typography className={`${classes.ether}`}>{curRewards}ETH</Typography>
            <Typography className={classes.rewards}>STAKING REWARDS</Typography>
          </Grid>
        </Grid>
        <Grid container item className={classes.bEther}>
          <Button onClick={getReward} variant="contained" color="primary" className={classes.button}>
            CLAIM
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StakingReward
