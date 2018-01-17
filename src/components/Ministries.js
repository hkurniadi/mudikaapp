import React, { Component } from 'react';

// Stylesheets
import '../stylesheets/Ministries.css';
import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';

// Assets
import cellGroupImg from '../assets/cell-group-image.jpg';
import eventImg from '../assets/event-image.jpg';
import marketingImg from '../assets/marketing-image.jpg';
// import liturgyImg from '../assets/liturgy-image.jpg';
import choirImg from '../assets/choir-image.jpg';
import worshipBandImg from '../assets/worship-band-image.jpg';


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
    }
  };
  
  componentDidMount() {
    /* This code is to show a snackbar when scroll down, can be an option for CTA button */
    // window.addEventListener("scroll", this.showCTAelement);

    /* Another option for CTA by displaying a snackbar by timing */
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
  // TODO: GridTile should be generated by Map from server data
  render() {
    return(
      <div className="Ministries component">
        <h1 className="component-title">Ministries</h1>
        <p className="ministries-description">Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." - 1 Peter 4:10</p>
        <GridList
          cellHeight={'auto'}
          className="grid-list"
        >
          <GridTile
            className="tile"
            key={1}
            title={"Cell Groups"}
          >
            <img 
              id="cellGroupTile"
              className="ministries-image"
              src={cellGroupImg}
              alt="Cell Groups" 
              onClick={this.openMinistryDetail}
            />
            <Dialog
              title="Cell Groups"
              modal={false}
              open={this.state.cellGroupTile}
              onRequestClose={this.closeMinistryDetail}
            >
              God intends for us to experience life together, and that’s why we encourage you to get into a cell group. A cell group is a weekly gathering of approximately ten people who meet, hang out, study the Word, and pray together. No matter where you are in life, it is important to have a group of people you get together with on a weekly basis to study God’s Word and have fun!
            </Dialog>
          </GridTile>
          <GridTile
            key={2}
            title={"Events"}         
          >
            <img 
              id="eventsTile"
              className="ministries-image"
              src={eventImg}
              alt="Events"
              onClick={this.openMinistryDetail}
            />
            <Dialog
              title="Events"
              modal={false}
              open={this.state.eventsTile}
              onRequestClose={this.closeMinistryDetail}
            >
              God intends for us to experience life together, and that’s why we encourage you to get into a cell group. A cell group is a weekly gathering of approximately ten people who meet, hang out, study the Word, and pray together. No matter where you are in life, it is important to have a group of people you get together with on a weekly basis to study God’s Word and have fun!
            </Dialog>
          </GridTile>
          <GridTile
            key={3}
            title={"Marketing"}          
          >
            <img
              id="marketingTile"
              className="ministries-image"
              src={marketingImg}
              alt="Marketing"
              onClick={this.openMinistryDetail}
            />
            <Dialog
              title="Marketing"
              modal={false}
              open={this.state.marketingTile}
              onRequestClose={this.closeMinistryDetail}
            >
              God intends for us to experience life together, and that’s why we encourage you to get into a cell group. A cell group is a weekly gathering of approximately ten people who meet, hang out, study the Word, and pray together. No matter where you are in life, it is important to have a group of people you get together with on a weekly basis to study God’s Word and have fun!
            </Dialog>
          </GridTile>
          <GridTile
            key={4}
            title={"Liturgy"}         
          >
            <img
              id="liturgyTile"
              className="ministries-image"
              src={"https://static.wixstatic.com/media/d1cbc0_95b035eca26b4d4ebbf099c0328d09c7.jpg/v1/fill/w_782,h_528,al_c,q_85,usm_0.66_1.00_0.01/d1cbc0_95b035eca26b4d4ebbf099c0328d09c7.webp"}
              alt="Liturgy"
              onClick={this.openMinistryDetail}
            />
            <Dialog
              title="Liturgy"
              modal={false}
              open={this.state.liturgyTile}
              onRequestClose={this.closeMinistryDetail}
            >
              God intends for us to experience life together, and that’s why we encourage you to get into a cell group. A cell group is a weekly gathering of approximately ten people who meet, hang out, study the Word, and pray together. No matter where you are in life, it is important to have a group of people you get together with on a weekly basis to study God’s Word and have fun!
            </Dialog>
          </GridTile>
          <GridTile
            key={5}
            title={"Choir"}
          >
            <img 
              id="choirTile"
              className="ministries-image"
              src={choirImg}
              alt="Choir"
              onClick={this.openMinistryDetail}
            />
            <Dialog
              title="Choir"
              modal={false}
              open={this.state.choirTile}
              onRequestClose={this.closeMinistryDetail}
            >
              God intends for us to experience life together, and that’s why we encourage you to get into a cell group. A cell group is a weekly gathering of approximately ten people who meet, hang out, study the Word, and pray together. No matter where you are in life, it is important to have a group of people you get together with on a weekly basis to study God’s Word and have fun!
            </Dialog>
          </GridTile>
          <GridTile
            key={6}
            title={"Worship Band"}
          >
            <img
              id="worshipBandTile"
              className="ministries-image"
              src={worshipBandImg}
              alt="Worship Band"
              onClick={this.openMinistryDetail}
            />
            <Dialog
              title="Worship Band"
              modal={false}
              open={this.state.worshipBandTile}
              onRequestClose={this.closeMinistryDetail}
            >
              God intends for us to experience life together, and that’s why we encourage you to get into a cell group. A cell group is a weekly gathering of approximately ten people who meet, hang out, study the Word, and pray together. No matter where you are in life, it is important to have a group of people you get together with on a weekly basis to study God’s Word and have fun!
            </Dialog>
          </GridTile>
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