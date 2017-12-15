import React, { Component } from 'react';

import '../stylesheets/NavBar.css';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import BurgerMenu from 'material-ui/svg-icons/navigation/more-vert';

import { NavLink, Link, Redirect } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // drawerIsOpen: false,
      popoverIsOpen: false,
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
        // welcomeModalIsOpen: true
      },
    }

    this.goToHomePage = this.goToHomePage.bind(this);
  }

  // toggleAppBarDrawer = (event) => {
  //   event.preventDefault();
  //   this.setState({
  //     drawerIsOpen: !this.state.drawerIsOpen
  //   })
  // };

  toggleAppBarPopover = (event) => {
    event.preventDefault();
    // console.log(event.currentTarget);
    this.setState({
      popoverIsOpen: !this.state.popoverIsOpen,
      anchorEl: event.currentTarget
    })
  }
  
  closePopover = (event) => {
    this.setState({
      popoverIsOpen: false
    })
  }

  goToHomePage(event) {
    // return <Redirect push to="/"/>;
    alert("Hellow");
  }

  // closeWelcomeModal = (event) => {
  //   this.setState({
  //     welcomeModalIsOpen: false
  //   })
  // }
  
  render() {
    // const welcomeModalActions = [
    //   <RaisedButton 
    //     label="Discover Mudika"
    //     modal={true}
    //     onClick={this.closeWelcomeModal}
    //     primary={true}
    //   />
    // ]

    return (
        <AppBar 
          titleStyle={{color: '#f05f40'}}
          className="navigation-bar mobile-nav-bar"
          showMenuIconButton={false} 
        >
          <NavLink to="/" id="navbar-home-button">Mudika Vancouver</NavLink>
        </AppBar>
    );
  }
}

export default NavBar;

{/* <div className="NavBar"> */}
 {/* <Popover
          open={this.state.popoverIsOpen}
          onRequestClose={this.closePopover}
          animated={true}
          anchorEl={this.state.anchorEl}
          className="popover-div"
          targetOrigin={this.state.targetOrigin}
        >
          <Menu className="popover-menu" onItemTouchTap={this.closePopover}>
            <MenuItem><NavLink to="/about">About</NavLink></MenuItem>
            <Divider />
            <MenuItem><NavLink to="/events">Events</NavLink></MenuItem>
            <Divider />
            <MenuItem><NavLink to="/ministries">Ministries</NavLink></MenuItem>
          </Menu>
        </Popover> */}
      // </div>