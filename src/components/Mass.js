import React, { Component } from 'react';

// Stylesheets
import "../stylesheets/Mass.css";

class Mass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextMassDate: new Date("February 17, 2018").toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'}),
      currentDate: new Date().toString()
    }
    
    this.nextMassDate = this.nextMassDate.bind(this);
  }
  
  componentWillMount() {
    this.nextMassDate();
  }

  nextMassDate() {
    // TODO: add condition to change nextMassDate automatically when the currentDate reaches the nextMassDate
    let lastMassDate = this.state.nextMassDate;
    let currentDate = this.state.currentDate;
    if (currentDate == this.state.nextMassDate) {
      let nextMass = lastMassDate.setDate(lastMassDate.getDate() + 14);
      let nextMassDate = new Date(nextMass).toLocaleDateString('en-US', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'});  
      this.setState({
        nextMassDate: nextMassDate
      })
    }
    return this.state.nextMassDate;
  }

  render() {
    return (
      <div className="Mass component">
        <h1 className="component-title">Indonesian Mass</h1>
        <div className="mass-description">
          <p>Every <i><strong>first</strong></i> and <i><strong>third</strong></i> Saturday of the month at 6:30 P.M.</p>
          <p>Next Mass: {this.state.nextMassDate}</p>
          <h4><strong>Our Lady of Mercy Parish</strong></h4>
          <p>7455 Tenth Avenue
            <br />
            Burnaby, BC V3N 251
          </p>
        </div>
      </div>
    )
  }
}

export default Mass;