import React, { Component } from 'react';
import '../stylesheets/Welcome.css';

class Welcome extends Component {
  
  render() {
    // const welcomeStyle = {
    //   backgroundImage: 'url(.)' 
    // }
    return(
      <div className="welcome-section">
        <h1 className="title">Welcome to Mudika Vancouver</h1>
        <p className="description">We Are Young Adult Population of th Indonesian Catholic Society of British Columbia (UKIBC)</p>
      </div>
    );
  }
}

export default Welcome;