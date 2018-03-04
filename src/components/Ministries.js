import React, { Component } from 'react';

// Stylesheets
import '../stylesheets/Ministries.css';
import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';

// Assets
import cellGroupImg from '../assets/cell-group-image.jpg';
import eventsImg from '../assets/event-image.jpg';
import marketingImg from '../assets/marketing-image.jpg';
// import liturgyImg from '../assets/liturgy-image.jpg';
import choirImg from '../assets/choir-image.jpg';
import worshipBandImg from '../assets/worship-band-image.jpg';

// Data API
import dataAPI from '../api/dataAPI';


class Ministries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellGroupTile: false,
      eventsTile: false,
      marketingTile: false,
      liturgyTile: false,
      choirTile: false,
      worshipBandTile: false,
      ctaIsOpen: false,
      ministries: [],
      // TODO: move these image uploads to the server
      ministryImages: {
        cellGroupImg: cellGroupImg,
        eventsImg: eventsImg,
        marketingImg: marketingImg,
        liturgyImg: choirImg,
        choirImg: choirImg,
        worshipBandImg: worshipBandImg
      }
    }
  };
  
  componentDidMount() {
    dataAPI('/ministries')
      .then(res => this.setState({ministries: res}))
      .catch(err => console.log(err));
    
    // Displaying "Join Us" snackbar by timing
    setTimeout(this.showCTAelement, 3000);
  }

  openMinistryDetail = (e) => {
    // console.log("incoming event", e.currentTarget.id);
    let clickedTile = e.currentTarget.id;
    // console.log("status", this.state[clickedTile]);
    this.setState({
      [clickedTile]: !this.state[clickedTile]
    })
  };

  closeMinistryDetail = (e) => {
    this.setState({
      cellGroupTile: false,
      eventsTile: false,
      marketingTile: false,
      liturgyTile: false,
      choirTile: false,
      worshipBandTile: false
    })
  };

  showCTAelement = () => {
    // TODO: find the algorihtm to check the bottom of a page
    // console.log("inner height", window.innerHeight);
    // console.log("pageyoffset", window.pageYOffset);
    // console.log("document.body.offsetHeight", document.body.offsetHeight);
    
    /* Option 1 - by scroll */
    /* console.log("scrolly position", window.scrollY);
    if (window.scrollY > 0) {
    // if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight ) {
      this.setState({
        ctaIsOpen: true
      });
    } else {
      this.setState({
        ctaIsOpen: false
      });
    } */

    /* Option 2 - by time */
    // NOTES: When a tile is clicked, the snackbar somehow opens up too
    this.setState({
      ctaIsOpen: true
    })
  }

  sendJoinEmail = () => {
    alert("You just joined a ministry");
    this.setState({
      ctaIsOpen: false
    })
  }

  render() {
    return(
      <div className="Ministries component">
        <h1 className="component-title">Ministries</h1>
        <p className="ministries-description">Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." - 1 Peter 4:10</p>
        <GridList
          cellHeight={'auto'}
          className="grid-list"
        >
        {this.state.ministries.map((ministry, i) => {
          return (
            <GridTile
              className="tile"
              key={i}
              title={ministry.title}
            >
              <img 
                id={ministry.shortName}
                className="ministries-image"
                src={this.state.ministryImages[ministry.thumbnail]}
                alt={ministry.title} 
                onClick={this.openMinistryDetail}
              />
              <Dialog
                title={ministry.title}
                modal={false}
                open={this.state[ministry.shortName]}
                onRequestClose={this.closeMinistryDetail}
              >
                {ministry.description}
              </Dialog>
            </GridTile>
          )
        })}
        </GridList>
        
        {/* A pop-up call-to-action bar to join */}
        <Snackbar 
          open={this.state.ctaIsOpen}
          action={"Join Us!"}
          onActionTouchTap={this.sendJoinEmail}
          className="callToActionJoinMinistry"
          message="We'd love to have you serving with us"
        />
      </div>
    );
  }
}

export default Ministries;