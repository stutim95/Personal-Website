import './App.css';
import {Route, Switch, Link} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import {AppBar, Toolbar, Typography} from "@material-ui/core";

function App() {
  return (
      <div>
          <AppBar position="static">
              <Toolbar variant="dense">
                  <Typography variant="h6" color="inherit">
                      Stuti Misra
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
