import React, { Component } from 'react';
import Slider from 'react-slick';

class Events extends Component {
  render() {
    const sliderSettings = {
      dots: true,
      arrows: true,
      slidesToScroll: true,

    }

    return(
      <div>
        <h1>What's happening in Mudika</h1>
        <Slider {...sliderSettings}>
          <h2>Event 1</h2>
          <h2>Event 2</h2>
          <h2>Event 3</h2>
        </Slider>
      </div>
    );
  }
}

export default Events;