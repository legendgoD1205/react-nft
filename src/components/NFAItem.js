import React from "react";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyes = makeStyles(theme => ({
  root: {
  },
  icon: {
    margin: theme.spacing(1),
    minWidth: '28px',
    width: '28px',
    height: '28px',
    padding: '2px',
    borderRadius: '12px',
    backgroundColor: 'white',
  },
  disable: {
    color: '#888',
  },
  count: {
    margin: theme.spacing(1),
    padding: '20px',
    backgroundColor: 'white',
    width: '58px',
    height: '46px',
    borderRadius: '10px',
    fontWeight: 700
  }
}));

const NFAItem = ({title, imgSrc, count, disable}) => {
  const classes = useStyes();
  return(
    <Grid className={classes.root}>
      <Grid container direction="column" alignItems="center">
        <Grid container direction="row" alignItems="center" justify="center" wrap="nowrap">
          <Grid className={classes.icon} container justify="center" alignItems="center">
            <img src={imgSrc} width="60%" height="auto"  alt="avatar"/>
          </Grid>
          {title}
        </Grid>
        <Typography className={ disable ? `${classes.disable} ${classes.count}` : classes.count } variant="h2" align="center">{count}</Typography>
      </Grid>
    </Grid>
  )

};

export default NFAItem;
