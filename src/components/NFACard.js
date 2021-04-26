import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import NFAItem from "./NFAItem";
import FemalesItem from "./FemalesItem";
import MaleSvg from '../assets/male.svg';
import FemaleSvg from '../assets/female.svg';
import BabySvg from '../assets/baby.svg';
import UsersSvg from '../assets/family.svg';

const NFAStacked = ({Icon}) => {
  const useStyles = makeStyles( theme => ({
    root: {
      borderRadius: '12px',
      padding: theme.spacing(2),
      background: '#cdd5d2',
    },
  }));

  const classes = useStyles();

  return (
    <Grid className={classes.root} container direction="row" justify="space-between">
      <FemalesItem imgSrc={FemaleSvg} neverGiven={2} oneChild={1} twoChild={2} />
      <NFAItem imgSrc={MaleSvg} count={10}/>
      <NFAItem imgSrc={BabySvg} count={10} />
      <NFAItem imgSrc={BabySvg} count={5} />
      <NFAItem imgSrc={BabySvg} count={1} />
    </Grid>
  )
}

export default NFAStacked