import React from "react";
import {makeStyles} from "@material-ui/styles";
import theme from "../theme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyes = makeStyles(theme => ({
  root: {
    '& h4.MuiTypography-root': {
      fontWeight: 'bold',
      paddingLeft: '8px',
    },
  },
  icon: {
    margin: theme.spacing(1),
    width: 'auto',
    height: '16px',
    padding: '4px',
    borderRadius: '18px',
    backgroundColor: 'white',
  },
  text: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
}));

const NFAItem = ({imgSrc, neverGiven, oneChild, twoChild}) => {
  const classes = useStyes();
  return(
    <Grid className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={imgSrc}  alt="avatar"/>
          <Typography style={{fontSize: 24, fontWeight: "bold"}} >FEMALES</Typography>
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