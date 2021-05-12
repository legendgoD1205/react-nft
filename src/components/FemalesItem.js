import React from "react"
import {makeStyles} from "@material-ui/styles"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const useStyes = makeStyles(theme => ({
  root: {
    '& h4.MuiTypography-root': {
      fontWeight: 'bold',
      paddingLeft: '8px',
    },
    '& h5.MuiTypography-root': {
      fontSize: '16px',
    },
  },
  title : {
    fontSize: '24px',
    fontWeight: 800,
  },
  icon: {
    margin: theme.spacing(1),
    width: '28px',
    height: '28px',
    padding: '2px',
    borderRadius: '12px',
    backgroundColor: 'white',
  },
  text: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const NFAItem = ({imgSrc, neverGiven, oneChild, twoChild, isTablet}) => {


  const classes = useStyes();
  return(
    <Grid className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" alignItems="center">
          <Grid className={classes.icon} container justify="center" alignItems="center">
            <img src={imgSrc} width="60%" height="auto"  alt="avatar"/>
          </Grid>
          <Typography className={classes.title} >FEMALES</Typography>
        </Grid>
        <Grid className={classes.text} container direction="row" alignItems="center">
          <Typography variant="h5">Never Given birth: </Typography>
          <Typography variant="h4">{neverGiven}</Typography>
        </Grid>
        <Grid className={classes.text} container direction="row" alignItems="center">
          <Typography variant="h5">Birthed only 1 child: </Typography>
          <Typography variant="h4">{oneChild}</Typography>
        </Grid>
        <Grid className={classes.text} container direction="row" alignItems="center">
          <Typography variant="h5">Birthed 2 children: </Typography>
          <Typography variant="h4">{twoChild}</Typography>
        </Grid>
      </Grid>
    </Grid>
  )

};

export default NFAItem;
