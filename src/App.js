import './App.css';
import {Route, Switch, Link} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import {AppBar, Button, IconButton, Toolbar, Typography} from "@material-ui/core";
import {classes} from "istanbul-lib-coverage";

function App() {
  return (
      <div>
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6" className={classes.title}>
                      <Link to="/about">About</Link>
                  </Typography>
              </Toolbar>
          </AppBar>
          <Switch>
              <Route exact path="/">
                  <Home/>
              </Route>
              <Route path="/about">
                  <About/>
              </Route>
          </Switch>
      </div>
  );
}

export default App;
