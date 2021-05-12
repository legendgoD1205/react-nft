import React from 'react'
import {Grid, useTheme} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import NFAItem from "./NFAItem"
import FemalesItem from "./FemalesItem"
import Male from '../assets/male-gender.png'
import Female from '../assets/female-sign.png'
import Baby from '../assets/baby.png'
import Accounts from '../assets/accounts_cyan.png'
import Flag from '../assets/flag.png'
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery/useMediaQuery"
import MyContext from '../lib/context'

const NFAStacked = () => {
  const state = React.useContext(MyContext).state;

  const femaleId = state.femaleId

  let neverGiven = 0
  let oneGiven = 0
  let twoGiven = 0

  for(let i = 0; i < femaleId.length; i++) {
      switch (femaleId[i]['baby_count']) {
        case 2:
          twoGiven++
          break;
        case 1:
          oneGiven++
          break;
        default:
          neverGiven++
      }
  }

  const responsiveTheme = useTheme();
  const isTablet = useMediaQuery(responsiveTheme.breakpoints.down('sm'), {
    defaultMatches: true
  });
  const useStyles = makeStyles( theme => ({
    wrapper: {
      '@media(max-width: 1140px)': {
        maxWidth: '50%',
        flexBasis: '50%',
      },
      '@media(max-width: 599px)': {
        maxWidth: '100%',
        flexBasis: '100%',
      }
    },
    root: {
      borderRadius: '12px',
      padding: theme.spacing(2),
      background: '#f1f1f1',
      '& h2.MuiTypography-root': {
        fontSize: '36px',
      },
    },
    title: {
      textTransform: 'uppercase',
      maxWidth: '150px',
      minWidth: '130px',
      fontWeight: 900,
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
      <Grid item xs={12} md={3} container justify={isTablet ? 'center' : 'flex-start'} alignItems="center">
        <FemalesItem imgSrc={Female} neverGiven={neverGiven} oneChild={oneGiven} twoChild={twoGiven} />
      </Grid>
      <Grid item xs={12} md={9} container direction="row">
        <Grid className={classes.wrapper} item xs={12} sm={6} md>
          <NFAItem title={Title("MALES", 24)} imgSrc={Male} count={state.maleId.length}/>
        </Grid>
        <Grid className={classes.wrapper} item xs={12} sm={6} md>
          <NFAItem title={Title("BABIES", 24)} imgSrc={Baby} count={state.babyId.length} />
        </Grid>
        <Grid className={classes.wrapper} item xs={12} sm={6} md>
          <NFAItem title={Title("FAMILIES", 24)} imgSrc={Accounts} disable count={0} />
        </Grid>
        <Grid className={classes.wrapper} item xs={12} sm={6} md>
          <NFAItem title={Title("GAY MARRIAGE CERTIFICATES", 16)} disable imgSrc={Flag} count={0} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default NFAStacked
