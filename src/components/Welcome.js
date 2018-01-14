import React, { Component } from 'react';

import '../stylesheets/Welcome.css';

class Welcome extends Component {
  
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