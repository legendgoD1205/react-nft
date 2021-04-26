import './App.css';
import Card from './components/card'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function App() {
  const useStyles = makeStyles({
    root: {
      maxWidth: '1280px',
      width: '100%',
    },
  })

  const classes = useStyles()

  return (
    <Grid container justify="center">
      <Grid container className={classes.root}>
        <Card Icon={AddCircleOutlineIcon} />
      </Grid>
    </Grid>
  );
}

export default App;
