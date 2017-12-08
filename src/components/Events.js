import React, { Component } from 'react';

import "../stylesheets/Events.css";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Slider from 'react-slick';

import firebase from '../firebase.js';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }
  
  // componentWillMount() {
  //   // console.log("Firebase DB", firebase);
  //   // console.log("Process ENV", process.env.REACT_APP_databaseURL);
  // }

  componentDidMount() {
    const eventsRef = firebase.database().ref('events');
    // console.log("Events references", eventsRef);
  
    /* Read the database once after the component mounts */
    // const eventsObject = eventsRef.once('value').then((snapshot) => {
    //   console.log("Snapshot", snapshot.val());
    // });
    // eventsObject returns a promise
    // console.log("Events object", eventsObject);
    
    /* Read the database whenever there is changes */
    eventsRef.on('value', (snapshot) => {
      let events = snapshot.val();
      // console.log("Events node", events);
      let newEventsState = [];
      for (let event in events) {
        newEventsState.push({
          name: events[event].name,
          time: events[event].time,
          type: events[event].type
        })
      }
      // console.log("events object", newEventsState);
      this.setState({
        events: newEventsState
      })
      // console.log("State values", this.state.events[0]);
    });
  }

  render() {
    const sliderSettings = {
      dots: true,
      arrows: true,
      slidesToScroll: true,
      autoplay: true
    }

    const styles = {
      cardMedia: {
        height: "50%",
        width: "50%"
      }
    }



    return(
      <div className="Events">
        <h1>What's happening in Mudika</h1>
        {/* TODO: fix the map rendering to render Card component instead of list */}
        <ul>
          {this.state.events.map((event, i) => {
            return <li key={i}>{event.type}</li>
          })}
        </ul>
        <h1>Events</h1>
        <Divider />
        {/* TODO
          Render each event card using Mapping  
        */}
        {/* <Slider {...sliderSettings}> */}
          <Card>
            <CardHeader
              title="Ultimate Love"
              subtitle="Mudika Annual Retreat"
            />
            <CardMedia
              mediaStyle={styles.cardMedia}
            >
              <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/20728043_1668835346504405_2388021263409969642_n.jpg?oh=e786db32bfe665f221eb55c2fb755ba9&oe=5A19FDD5" alt="U-BER" />
            </CardMedia>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <br />
          <Card>
            <CardHeader
              title="U-BER"
              subtitle="Welcoming Party"
            />
            <CardMedia
              mediaStyle={styles.cardMedia}
            >
              <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/20728043_1668835346504405_2388021263409969642_n.jpg?oh=e786db32bfe665f221eb55c2fb755ba9&oe=5A19FDD5" alt="U-BER" />
            </CardMedia>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <br />
          <Card>
            <CardHeader
              title="Ultimate Love"
              subtitle="Mudika Annual Retreat"
            />
            <CardMedia
              mediaStyle={styles.cardMedia}
            >
              <img src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/20728043_1668835346504405_2388021263409969642_n.jpg?oh=e786db32bfe665f221eb55c2fb755ba9&oe=5A19FDD5" alt="U-BER" />
            </CardMedia>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
            </CardText>
          </Card>
          <br />
          {/* <h1>Event 2</h1> */}
        {/* </Slider> */}
      </div>
    );
  }
}

export default Events;