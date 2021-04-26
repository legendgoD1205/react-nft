import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import FemaleSvg from '../assets/female.svg';
import MaleSvg from '../assets/male.svg';
import BabySvg from '../assets/baby.svg';
import FlagSvg from '../assets/flag.png';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Stake = () => {
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
      borderRadius: '18px',
      backgroundColor: 'white',
    },
    inputField: {
      flexGrow: 1,
      backgroundColor: 'white',
      marginLeft: '20px',
      marginRight: '20px',
      height: '40px',
      borderRadius: '12px',
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
    <Grid container className = {classes.root}>
      <Grid item xs={8} container direction="column" justify="flex-start" alignItems="flex-start" spacing={1}>
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={FemaleSvg}  alt="avatar"/>
          <Grid className={classes.inputField} >&nbsp;</Grid>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={MaleSvg}  alt="avatar"/>
          <Grid className={classes.inputField} />
        </Grid>
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={BabySvg}  alt="avatar"/>
          <Grid className={classes.inputField} />
        </Grid>
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={FlagSvg}  alt="avatar"/>
          <Grid className={classes.inputField} />
        </Grid>
      </Grid>
      <Grid item xs={4} container alignItems="flex-end" justify="center">
        <Button variant="contained" color="primary" className={classes.button}>
          STAKE
        </Button>
      </Grid>
    </Grid>
  )
}

export default Stake