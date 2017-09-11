import React, { Component } from 'react';

import '../stylesheets/Ministries.css';
import { GridList, GridTile } from 'material-ui/GridList';
import Dialog from 'material-ui/Dialog';
import Snackbar from 'material-ui/Snackbar';

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
  
  render() {
    return(
      <div className="Ministries">
        <h1>Ministries</h1>
        <p className="ministries-description">Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms." - 1 Peter 4:10</p>
        
        {/* <p>We have a lot of opportunities where you can do your part in serving the Lord. We would love to have you join us! To apply, just send an email to mudikavancouver@gmail.com, and we will connect you to a ministry coordinator!</p> */}
        {/* TODO: make a photo slideshow on each minsitry grid */}
        <GridList
          cellHeight={'auto'}
          className="grid-list"
        >
          <GridTile
            key={1}
            title={"Cell Groups"}
          >
            <img 
              id="cellGroupTile"
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/13613692_1048698641851415_871953362126539028_o.jpg?oh=39e18bd0bda19aadcf0875fe5d029e95&oe=5A13DFDC"
              alt="Cell Groups Image" 
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
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/19956797_1635408206513786_3697153409521955705_o.jpg?oh=2d21d82e7643279358240105be122f41&oe=5A2867BB"
              alt="Events Image"
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
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/19149483_1611841218870485_626310443908144366_n.jpg?oh=d6295d6ce4d8be6079325e211ccf430a&oe=5A5DA3F7"
              alt="Marketing Image"
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
              src="https://static.wixstatic.com/media/d1cbc0_95b035eca26b4d4ebbf099c0328d09c7.jpg/v1/fill/w_782,h_528,al_c,q_85,usm_0.66_1.00_0.01/d1cbc0_95b035eca26b4d4ebbf099c0328d09c7.webp"
              alt="Liturgy Image"
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
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/1524069_787030754657165_1587857533_o.jpg?oh=fdb83dbd829537d6f37ccb2a9fae9f4a&oe=5A22879F"
              alt="Choir Image"
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
              src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/13585103_1048697521851527_8971758814945814663_o.jpg?oh=1e561155cced87f8901bc3df48430325&oe=5A1AABEC"
              alt="Worship Band Image"
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