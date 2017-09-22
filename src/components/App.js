import React, { Component } from 'react';

// import logo from './logo.svg';
import '../stylesheets/App.css';

/* TODO
  1. Refactor component import to be async
  2. Deploy to firebase hosting
  3. Create database in Firebase
*/
import NavBar from './NavBar';
import Welcome from './Welcome';
import About from './About';
import Events from './Events';
import Ministries from './Ministries';
import Footer from './Footer';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/ministries" component={Ministries} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
