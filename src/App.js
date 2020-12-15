import Main from './Main';
import Joke from './Joke';
import ToDo from './ToDo';
import Home from './Home';


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
          <ul className='nav justify-content-center'>
            <li className='nav-link'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-link'>
              <Link to="/main">Cats</Link>
            </li>
            <li className='nav-link'>
              <Link to="/joke">Joke</Link>
            </li>
            <li className='nav-link'>
              <Link to="/todo">Tasks List</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
           <Route exact path="/">
            <Home />
          </Route>
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
