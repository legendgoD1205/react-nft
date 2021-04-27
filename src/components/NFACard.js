import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import NFAItem from "./NFAItem";
import FemalesItem from "./FemalesItem";
import Male from '../assets/male-gender.png';
import Female from '../assets/female-sign.png';
import Baby from '../assets/baby.png';
import Accounts from '../assets/accounts_cyan.png';
import Flag from '../assets/flag.png';
import Typography from "@material-ui/core/Typography";

const NFAStacked = ({Icon}) => {
  const useStyles = makeStyles( theme => ({
    root: {
      borderRadius: '12px',
      padding: theme.spacing(1),
      background: '#f1f1f1',
      '& h2.MuiTypography-root': {
        fontSize: '36px',
      },
    },
    title: {
      textTransform: 'uppercase',
      maxWidth: '150px'
    },
  }));

  const classes = useStyles();

  const Title = (title, fontSize) => {
    return(
      <Typography className={classes.title} style={{fontSize: fontSize}} >{title}</Typography>
    )
  }

  return (
    <Grid className={classes.root} container direction="row" justify="space-evenly">
      <Grid item sm={12} md={3}>
        <FemalesItem imgSrc={Female} neverGiven={2} oneChild={1} twoChild={2} />
      </Grid>
      <Grid item sm={12} md={9} container direction="row" justify="space-around">
        <NFAItem title={Title("MALES", 24)} imgSrc={Male} count={10}/>
        <NFAItem title={Title("BABIES", 24)} imgSrc={Baby} count={10} />
        <NFAItem title={Title("FAMILIES", 24)} imgSrc={Accounts} count={5} />
        <NFAItem title={Title("GAY MARRIAGE CERTIFICATES", 16)} imgSrc={Flag} count={1} />
      </Grid>
    </Grid>
  )
}

export default NFAStacked