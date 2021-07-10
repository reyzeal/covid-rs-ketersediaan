import './App.css';
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import {Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.paper,
        // margin: "15vh 0 0 0",
        height: "100%",
    },
    footer : {
        marginTop: "10vh",
        width: "100%"
    }
}))

function App() {
  const classes = useStyles()
    return (
    <Grid className={classes.root} container direction="row">
          <Grid item>
              <Home/>
          </Grid>
        <Grid item className={classes.footer}>
            <Footer/>
        </Grid>

    </Grid>
  );
}

export default App;
