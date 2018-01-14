import React, { Component } from 'react';

// Import material-ui component
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

// Import react-router components
import { NavLink } from 'react-router-dom';

// Stylesheets
import '../stylesheets/FloatingMenu.css';

class FloatingMenu extends Component {
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