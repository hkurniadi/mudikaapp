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
import Mass from './Mass';
import FloatingButton from './FloatingButton';
import Footer from './Footer';

import { Switch, Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      floatingMenuIsExpanded: null
    }

    this.closeFloatingMenu = this.closeFloatingMenu.bind(this);
  }

  closeFloatingMenu(event) {
    this.setState((prevState) => {
      return {
        floatingMenuIsExpanded: false
      }
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="close-menu-element" onClick={this.closeFloatingMenu} />
        <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/about" component={About} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/ministries" component={Ministries} />
            <Route exact path="/mass" component={Mass} />
        </Switch>
        <FloatingButton floatingMenuState={this.state.floatingMenuIsExpanded} />
        <Footer />
      </div>
    );
  }
}

export default App;
