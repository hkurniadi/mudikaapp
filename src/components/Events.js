import React, { Component } from 'react';

import "../stylesheets/Events.css";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import Slider from 'react-slick';

class Events extends Component {
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