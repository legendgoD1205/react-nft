import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyes = makeStyles((theme) => ({
  root: {
    width: "fit-content",
    margin: "8px",
  },
  icon: {
    margin: theme.spacing(1),
    minWidth: "28px",
    width: "28px",
    height: "28px",
    padding: "2px",
    borderRadius: "12px",
    backgroundColor: "white",
  },
  disable: {
    color: "#888",
  },
  count: {
    margin: theme.spacing(1),
    padding: "20px",
    backgroundColor: "white",
    width: "58px",
    height: "46px",
    borderRadius: "10px",
    fontWeight: 700,
  },
  string: {
    whiteSpace: 'nowrap',
  }
}));

const ApeCard = ({ imgSrc, name }) => {
  const classes = useStyes();
  return (
    <Grid container className={classes.root} alignItems="center" justify="center">
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <img src={imgSrc} width="60%" height="auto" alt="avatar" />
      </Grid>
      <Typography variant="h5" className={classes.string} align="center">
        {name}
      </Typography>
    </Grid>
  );
};

export default ApeCard;
