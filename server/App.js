import React, { Component } from 'react';

/* TODO
  1. Refactor component import to be async
  2. Deploy to firebase hosting
  3. Create database in Firebase
*/

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      helloVar: "this is hello from state"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <h2>{this.state.helloVar}</h2>
      </div>
    );
  }
}

export default App;
