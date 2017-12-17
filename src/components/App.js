import 'dotenv/config';

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
import FloatingButton from './FloatingButton';
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
        <FloatingButton />

        {/* Below is an example of using React Portal and rendering a component by passing in Children props and render the children in the wrapper component */}
        {/* <Footer>
          <div className="Footer">
            <p>Made with Faith and &hearts; by Mudika Vancouver</p>
          </div>
        </Footer> */}
      </div>
    );
  }
}

export default App;
