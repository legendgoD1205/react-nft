import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import NFAItem from "./NFAItem";
import FemalesItem from "./FemalesItem";
import MaleSvg from '../assets/male.svg';
import FemaleSvg from '../assets/female.svg';
import BabySvg from '../assets/baby.svg';
import UsersSvg from '../assets/family.svg';
import Typography from "@material-ui/core/Typography";

const NFAStacked = ({Icon}) => {
  const useStyles = makeStyles( theme => ({
    root: {
      borderRadius: '12px',
      padding: theme.spacing(1),
      background: '#f1f1f1',
    },
    title: {
      textTransform: 'uppercase',
      maxWidth: '150px'
    },
  }));

  const classes = useStyles();

  const Title = (title, fontSize) => {
    return(
      <Typography className={classes.title} style={{fontSize: fontSize}} >{title}</Typography>
    )
  }

  return (
    <Grid className={classes.root} container direction="row" justify="space-between">
      <FemalesItem imgSrc={FemaleSvg} neverGiven={2} oneChild={1} twoChild={2} />
      <NFAItem title={Title("MALES", 24)} imgSrc={MaleSvg} count={10}/>
      <NFAItem title={Title("BABIES", 24)} imgSrc={BabySvg} count={10} />
      <NFAItem title={Title("FAMILIES", 24)} imgSrc={BabySvg} count={5} />
      <NFAItem title={Title("GAY MARRIAGE CERTIFICATES", 16)} imgSrc={BabySvg} count={1} />
    </Grid>
  )
}

export default NFAStacked