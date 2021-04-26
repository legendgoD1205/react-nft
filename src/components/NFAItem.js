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
    width: '16px',
    height: '16px',
    padding: '4px',
    borderRadius: '18px',
    backgroundColor: 'white',
  },
  count: {
    margin: theme.spacing(1),
    padding: '20px',
    backgroundColor: 'white',
    width: '36px',
    height: '28px',
    borderRadius: '10px'
  }
}));

const NFAItem = ({title, imgSrc, count}) => {
  const classes = useStyes();
  return(
    <Grid>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" alignItems="center">
          <img className={classes.icon} src={imgSrc}  alt="avatar"/>
          {title}
        </Grid>
        <Typography className={classes.count} variant="h2" align="center">{count}</Typography>
      </Grid>
    </Grid>
  )

};

export default NFAItem;