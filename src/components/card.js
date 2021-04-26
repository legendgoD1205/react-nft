import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const Card = ({Icon}) => {
  const useStyles = makeStyles({
    card: {
      borderRadius: '12px',
      flexBasis: '25%',
      flexGrow: '25%',
      height: '180px',
      background: '#ee6688',
      position: 'relative'
    },
    icon: {
      position: 'absolute',
      top: '12px',
      left: '12px',
      padding: '12px 18px',
      borderRadius: '10px',
      background: '#ddd',
      '& svg>path': {
        fill: 'transparent',
      },
    },
    text: {
      position: 'absolute',
      bottom: '12px',
      right: '12px',
    },
  })

  const classes = useStyles()

  return (
    <Grid item className = {classes.card}>
      <Icon className={classes.icon} />
      <Grid className={classes.text}>
        Hello
      </Grid>
    </Grid>
  )
}

export default Card