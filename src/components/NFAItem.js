import React from "react";
import {makeStyles} from "@material-ui/styles";
import theme from "../theme";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyes = makeStyles(theme => ({
  root: {
  },
  icon: {
    margin: theme.spacing(1),
    width: '28px',
    height: '28px',
    padding: '10px',
    borderRadius: '18px',
    backgroundColor: 'white',
  },
  count: {
    padding: '20px',
    backgroundColor: 'white'
  }
}));

const NFAItem = ({imgSrc, count}) => {
  const classes = useStyes();
  return(
    <Grid>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={imgSrc}  alt="avatar"/>
          <Typography variant="h3" >MALES</Typography>
        </Grid>
        <Typography className={classes.count} variant="h2">{count}</Typography>
      </Grid>
    </Grid>
  )

};

export default NFAItem;