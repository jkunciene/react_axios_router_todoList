import Main from './Main';
import Joke from './Joke';
import ToDo from './ToDo';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/main">Home</Link>
            </li>
            <li>
              <Link to="/joke">Joke</Link>
            </li>
            <li>
              <Link to="/todo">Tasks List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/joke">
            <Joke />
          </Route>
          <Route path="/todo">
            <ToDo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
