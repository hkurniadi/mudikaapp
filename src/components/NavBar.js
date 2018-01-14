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

import {Tabs, Tab} from 'material-ui/Tabs';

import { NavLink, Link, Redirect } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    // Tabs stylesheet
    this.tabsStyle = {
      backgroundColor: "transparent"
    }
  }
  
  render() {
    return (
        <AppBar 
          titleStyle={{color: '#f05f40'}}
          className="navigation-bar mobile-nav-bar"
          showMenuIconButton={false}
        >
          <NavLink to="/" id="navbar-home-tab">Mudika Vancouver</NavLink>
          <Tabs 
            className="navbar-large-screen-tabs"
            tabItemContainerStyle={this.tabsStyle}
          >
            <Tab 
              className="navbar-tab"
              label={<Link to="/about">About</Link>}
            />
            <Tab label="Events"
              className="navbar-tab" 
              label={<Link to="/events">Events</Link>}
            />
            <Tab label="Ministries"
              className="navbar-tab"
              label={<Link to="/ministries">Ministries</Link>}
            />
          </Tabs>
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