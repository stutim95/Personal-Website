import './App.css';
import {Route, Switch, Link} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
      <div>
        <nav>
          <ul id="navigation">
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
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
