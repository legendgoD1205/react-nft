import './App.css';
import NFAStacked from './components/NFAStacked'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Dashboard() {
  const useStyles = makeStyles( theme => ({
    root: {
      maxWidth: '1280px',
      width: '100%',
      height: '100vh',
      backgroundColor: theme.palette.primary.main
    },
  }));

  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid container className={classes.root}>
        <NFAStacked Icon={AddCircleOutlineIcon} />
      </Grid>
    </Grid>
  );
}

export default Dashboard;
