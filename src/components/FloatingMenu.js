import React, { Component } from 'react';

// Import material-ui component
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

// Import react-router components
import { NavLink, Link, Redirect } from 'react-router-dom';

import '../stylesheets/FloatingMenu.css';

class FloatingMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu className="floating-menu" onItemClick={this.props.handleMenuItemClick}>
        <MenuItem className="floating-menu-item"><NavLink to="/about">About</NavLink></MenuItem>
        <Divider />
        <MenuItem className="floating-menu-item"><NavLink to="/events">Events</NavLink></MenuItem>
        <Divider />
        <MenuItem className="floating-menu-item"><NavLink to="/ministries">Ministries</NavLink></MenuItem>
      </Menu>
    )
  }
}

export default FloatingMenu;