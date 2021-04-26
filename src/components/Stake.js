import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import FemaleSvg from '../assets/female.svg';
import MaleSvg from '../assets/male.svg';
import BabySvg from '../assets/baby.svg';
import UsersSvg from '../assets/family.svg';

const Stake = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(2),
      borderRadius: '12px',
      height: '180px',
      background: '#ee6688',
      position: 'relative'
    },
    icon: {
      margin: theme.spacing(1),
      width: '24px',
      height: '24px',
      padding: '12px',
      borderRadius: '10px',
      backgroundColor: 'white',
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className = {classes.root}>
      <Grid item xs={8} container direction="column" justify="flex-start" alignItems="flex-start" spacing={1}>
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={FemaleSvg}  alt="avatar"/>
          Hello
        </Grid>
        <Grid>
        </Grid>


      </Grid>
      <Grid item xs={4}>
        a
      </Grid>
    </Grid>
  )
}

export default Stake