import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MyContext from "../lib/context";
import ApeCard from "./ApeCard";

const StakedList = () => {
  const state = React.useContext(MyContext).state;

  const useStyles = makeStyles((theme) => ({
    wrapper: {
      "@media(max-width: 1140px)": {
        maxWidth: "50%",
        flexBasis: "50%",
      },
      "@media(max-width: 599px)": {
        maxWidth: "100%",
        flexBasis: "100%",
      },
    },
    root: {
      borderRadius: "12px",
      padding: theme.spacing(2),
      background: "#f1f1f1",
      "& h2.MuiTypography-root": {
        fontSize: "36px",
      },
    },
    title: {
      textTransform: "uppercase",
      maxWidth: "150px",
      minWidth: "130px",
      fontWeight: 900,
    },
  }));

  const classes = useStyles();

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-evenly"
    >
      <Grid
        item
        xs={12}
        style={{
          flexFlow: "row",
          position: "relative",
          maxWidth: "100%",
          overflow: "auto",
        }}
        container
        alignItems="center"
      >
        {state.staked.length === 0 && (
          <Typography variant="h4" style={{color: 'gray', padding: '8px', textAlign: 'center'}}>There is no staked ape!</Typography>
        )}
        {state.staked.map((ape, index) => {
          // eslint-disable-next-line jsx-a11y/alt-text
          return <ApeCard key={index} name={ape.name} imgSrc={ape.img_url} />;
        })}
      </Grid>
    </Grid>
  );
};

export default StakedList;
