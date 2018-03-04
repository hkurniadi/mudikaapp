import React, { Component } from 'react';

// Stylesheets
import "../stylesheets/Events.css";
import {Card, CardHeader, CardMedia, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

// Assests
import uberImg from '../assets/uber-welcomingparty.jpg';
// import ultimateLoveImg from '';

// Data API
import dataAPI from '../api/dataAPI';

class Events extends Component {
  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    dataAPI('/events')
      .then(res => this.setState({ events: res}))
      .catch(err => console.log(err));
  }

  render() {
    const styles = {
      cardMedia: {
        height: "50%",
        width: "50%"    
      }
    }

    return(
      <div className="Events component">
        <h1 className="component-title">Events</h1>
        {/* TODO: fix 'src' path name */}
        <Divider />
        {this.state.events.map((event, i) => {
          return (
            <div key={i}>
              <Card>
                <CardHeader
                    title={event.category + " - " + event.title}
                    subtitle={event.date}
                  />
                <CardMedia
                  mediaStyle={styles.cardMedia}
                >
                  <img className="event-image" src={uberImg} />
                </CardMedia>
                <CardText>
                  {event.description}
                </CardText>
              </Card>
              <br />
            </div>
          )
        })}    
      </div>
    );
  }
}

export default Events;

{/* <Card>
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
          <br /> */}