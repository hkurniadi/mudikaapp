import React, { Component } from 'react';

// Stylesheets
import '../stylesheets/Welcome.css';

// Data API
import dataAPI from '../api/dataAPI';

class Welcome extends Component {
  // TODO: FIX fetch images from the server after component rendered
  componentDidMount() {
    dataAPI('/welcome-background')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="Welcome">
        <section className="welcome-description">
          <h1 className="title">Welcome to Mudika Vancouver</h1>
          <p className="description">We Are Young Adult Population of the Indonesian Catholic Society of British Columbia (UKIBC)</p>
        </section>
      </div>
    );
  }
}

export default Welcome;