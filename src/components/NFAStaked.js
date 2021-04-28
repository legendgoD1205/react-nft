import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Typography from "@material-ui/core/Typography";
import Flash from '../assets/flash.png';

const NFAStaked = ({imgSrc, count, text, bgColor}) => {
  const useStyles = makeStyles({
    card: {
      borderRadius: '12px',
      height: '190px',
      background: `${bgColor}`,
      backgroundImage: `url(${Flash})`,
      position: 'relative',
    },
    icon: {
      position: 'absolute',
      top: '12px',
      left: '12px',
      width: '45px',
      height: '45px',
      borderRadius: '10px',
      backgroundColor: 'white',
    },
    text: {
      position: 'absolute',
      bottom: '12px',
      right: '12px',
      textTransform: 'uppercase'
    },
    count: {
      color: "white"
    },
    title: {
      color: "white",
      fontWeight: '700',
    }
  });

  const classes = useStyles();
  return (
    <Grid item className = {classes.card}>
      <Grid container justify="center" alignItems="center" className={classes.icon}>
        <img src={imgSrc} width="auto" height="70%" alt="avatar"/>
      </Grid>
      <Grid className={classes.text}>
        <Typography className={classes.count} variant="h3" align="right">
          {count}
        </Typography>
        <Typography className={classes.title} variant="body1" align="right">
          {text}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default NFAStaked