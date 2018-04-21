import React, { Component } from 'react';

// Stylesheets
import "../stylesheets/Mass.css";

// Data API
import dataAPI from "../api/dataAPI";

class Mass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextMassDate: null
    }
  }

  componentDidMount() {
    dataAPI('/mass')
      .then((res) => {
        // console.log("Next mass date", res);
        this.setState({
          nextMassDate: res.nextMassDate
        })
      })
      .catch(err => console.log(err));
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