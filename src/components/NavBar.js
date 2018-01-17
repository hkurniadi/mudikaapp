import React, { Component } from 'react';

// Material UI components
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';

// Import Mudika Logo
import mudikaLogo from '../assets/mudikalogo-fire.png';

// Stylesheets
import '../stylesheets/NavBar.css';

// React-router components
import { NavLink, Link } from 'react-router-dom';

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
          iconElementLeft={<img className="mudika-logo-img" src={mudikaLogo} />}
          showMenuIconButton={true}
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
            <Tab label="Mass"
              className="navbar-tab"
              label={<Link to="/mass">Mass</Link>}
            />
          </Tabs>
        </AppBar>
    );
  }
}

export default NavBar;