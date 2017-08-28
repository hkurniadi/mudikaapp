import React, { Component } from 'react';

// import logo from './logo.svg';
import '../stylesheets/App.css';

import NavBar from './NavBar';
import Welcome from './Welcome';
import Events from './Events';
import Ministries from './Ministries';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/ministries" component={Ministries} />
        </Switch>
      </div>
    );
  }
}

export default App;
