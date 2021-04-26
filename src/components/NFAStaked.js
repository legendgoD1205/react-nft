import React from 'react'
import {Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'
import Typography from "@material-ui/core/Typography";

const NFAStaked = ({imgSrc, count, text, bgColor}) => {
  const useStyles = makeStyles({
    card: {
      borderRadius: '12px',
      height: '180px',
      background: `${bgColor}`,
      position: 'relative'
    },
    icon: {
      position: 'absolute',
      top: '12px',
      left: '12px',
      width: '25px',
      height: '25px',
      padding: '10px 10px',
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
  console.log(bgColor);

  const classes = useStyles();
  return (
    <Grid item className = {classes.card}>
        <img className={classes.icon} src={imgSrc}  alt="icon"/>
      <Grid className={classes.text}>
        <Typography className={classes.count} variant="h3" align="right">
          {count}
        </Typography>
        <Typography className={classes.title} variant="body1">
          {text}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default NFAStaked