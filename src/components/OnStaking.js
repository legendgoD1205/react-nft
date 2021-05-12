import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Female from '../assets/female-sign.png'
import Male from '../assets/male-gender.png'
import Baby from '../assets/baby.png'
import MyContext from '../lib/context'

const OnStaking = () => {

  const staked = React.useContext(MyContext).state.staked

  let babies = 0
  let females = 0
  let males = 0
  if(staked.length !== 0) {
    staked.forEach(data => {
      switch (data.gender) {
        case 1:
          females++
          break
        case 2:
          males++
          break
        default:
          babies++
      }
    })
  }

  const useStyles = makeStyles(theme => ({
    root: {
      borderRadius: '12px',
      background: '#f1f1f1',
      position: 'relative',
      padding: theme.spacing(3),
    },
    icon: {
      margin: theme.spacing(1),
      width: '48px',
      height: '48px',
      padding: '4px',
      borderRadius: '10px',
      backgroundColor: 'white',
    },
    inputField: {
      flexGrow: 1,
      backgroundColor: 'white',
      margin: '0px 16px',
      borderRadius: '14px',
      height: '42px',
      '& select': {
        width: 'calc(100% - 16px)',
        height: '100%',
        border: 'none',
        outline: 'none',
        background: 'none',
        marginLeft: '8px',
        fontFamily: '"Poppins"'
      }
    },
    selectElem: {
      width: 'calc(100% - 96px)',
      backgroundColor: 'white',
      margin: '0px 16px',
      borderRadius: '14px',
      minHeight: '42px',
      border: 'none',
      outline: 'none',
      '&>div.css-yk16xz-control': {
        height: '42px',
        border: 'none',
        borderRadius: '14px',
        outline: 'none',
      },
      '&>div.css-1pahdxg-control': {
        height: '42px',
        border: 'none',
        borderRadius: '14px',
        outline: 'none',
      },
      '& .css-g1d714-ValueContainer': {
        display: 'inline-flex',
        flexWrap: 'nowrap',
      },
    },
    button: {
      margin: '16px 16px 8px 8px',
      width: '100%',
      borderRadius: '14px',
      fontSize: '18px',
      fontWeight: 600,
    },
    number: {
      paddingInlineStart: '12px',
      color: '#888',
      fontSize: '18px',
    },
    totalNumber: {
      color: '#888',
      fontSize: '24px',
    },
    totalBox: {
      margin: '16px 8px',
    },
  }));

  const classes = useStyles();

  return (
    <Grid container className = {classes.root}>
      <Grid item xs={12} md={12}  container direction="column" justify="space-between" alignItems="flex-start" spacing={1}>
        <Grid container direction="row" alignItems="center">
          <Grid className={classes.icon} container justify="center" alignItems="center">
            <img width="60%" height="auto" src={Female} alt="avatar"/>
          </Grid>
            <Typography variant="h3" className={classes.number}>{females !== 0 ? females : "None"}</Typography>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid className={classes.icon} container justify="center" alignItems="center">
            <img width="60%" height="auto" src={Male} alt="avatar"/>
          </Grid>
          <Typography variant="h3" className={classes.number}>{males !== 0 ? males : "None"}</Typography>
        </Grid>
        <Grid container direction="row" alignItems="center">
          <Grid className={classes.icon} container justify="center" alignItems="center">
            <img width="60%" height="auto" src={Baby} alt="avatar"/>
          </Grid>
            <Typography variant="h3" className={classes.number}>{babies !== 0 ? babies : "None"}</Typography>
        </Grid>
        {
        //   <Grid container direction="row" alignItems="center">
        //   <Grid className={classes.icon} container justify="center" alignItems="center">
        //     <img width="60%" height="auto" src={Flag} alt="avatar"/>
        //   </Grid>
        //   <Grid className={classes.inputField} />
        // </Grid>
      }
      </Grid>
      <Grid item xs={12} md={12} container alignItems="flex-end" justify="center" className={classes.totalBox}>
      <Typography variant="h3" className={classes.totalNumber}>Total: {staked.length}</Typography>
      </Grid>
    </Grid>
  )
}

export default OnStaking
