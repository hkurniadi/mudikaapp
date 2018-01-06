import React, { Component } from 'react';

// Stylesheets
import "../stylesheets/Events.css";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Slider from 'react-slick';

// Assests
import uberImg from '../assets/uber-welcomingparty.jpg';
// import ultimateLoveImg from '';

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
        <h1>Events</h1>
        {/* TODO: fix the map rendering to render Card component instead of list */}
        {/* <ul>
          {this.state.events.map((event, i) => {
            return <li key={i}>{event.type}</li>
          })}
        </ul> */}
        {/* <h1>Events</h1> */}
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
              <img className="event-image" src={uberImg} />
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
              <img className="event-image" src={uberImg} />
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