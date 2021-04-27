import React from "react";
import {makeStyles} from "@material-ui/styles";
import theme from "../theme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyes = makeStyles(theme => ({
  root: {
    '& .MuiTypography-root': {
      fontWeight: '900',
    },
  },
  icon: {
    margin: theme.spacing(1),
    width: '28px',
    height: '28px',
    padding: '2px',
    borderRadius: '12px',
    backgroundColor: 'white',
  },
  count: {
    margin: theme.spacing(1),
    padding: '20px',
    backgroundColor: 'white',
    width: '58px',
    height: '46px',
    borderRadius: '10px'
  }
}));

const NFAItem = ({title, imgSrc, count}) => {
  const classes = useStyes();
  return(
    <Grid className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" alignItems="center">
          <Grid className={classes.icon} container justify="center" alignItems="center">
            <img src={imgSrc} width="60%" height="auto"  alt="avatar"/>
          </Grid>
          {title}
        </Grid>
        <Typography className={classes.count} variant="h2" align="center">{count}</Typography>
      </Grid>
    </Grid>
  )

};

export default NFAItem;