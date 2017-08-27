import React, { Component } from 'react';
// import logo from './logo.svg';

import NavBar from './NavBar';
import Welcome from './Welcome';
import Events from './Events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Welcome />
      </div>
    );
  }
}

export default App;
