import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Typography from "@material-ui/core/Typography"
import MyContext from '../lib/context'

const TestCard = () => {

  const generateTest = React.useContext(MyContext).generateTest

  const useStyles = makeStyles( theme => ({
    root: {
      borderRadius: '12px',
      padding: theme.spacing(2),
      background: 'orange',
      '& h2.MuiTypography-root': {
        fontSize: '36px',
      },
    },
    warning: {
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
      width: '100%',
      fontSize: '18px',
      margin: '12px 0px',
      lineHeight: '30px',
    },
    warnBtn: {
      backgroundColor: 'red',
      color: 'white',
      marginBottom: '12px',
      '&:hover': {
        backgroundColor: '#ee3344',
      }
    }
  }));

  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="row" justify="space-evenly">
      <Typography variant="body1" className={classes.warning}>Staking and claiming are disabled since there is no staking pool deployed on the mainnet</Typography>
      <button onClick={generateTest}>Test</button>
    </Grid>
  )
}

export default TestCard
