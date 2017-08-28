import React, { Component } from 'react';

// import '../stylesheets/NavBar.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // drawerIsOpen: false,
      popoverIsOpen: false,
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      },
      // welcomeModalIsOpen: true
    }
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

  // closeWelcomeModal = (event) => {
  //   this.setState({
  //     welcomeModalIsOpen: false
  //   })
  // }
  
  render() {
    const menuStyle = {
      textAlign: 'left'
    };

    const popoverStyle = {
      width: '100%',
      textAlign: 'center'
    };

    // const welcomeModalActions = [
    //   <RaisedButton 
    //     label="Discover Mudika"
    //     modal={true}
    //     onClick={this.closeWelcomeModal}
    //     primary={true}
    //   />
    // ]

    return (
      <div className="NavBar">
        {/* <Dialog
          open={this.state.welcomeModalIsOpen}
          actions={welcomeModalActions}
        >
          Welcome to Mudika Vancouver!
        </Dialog> */}
        <AppBar 
          title='Mudika Vancouver'
          onTitleTouchTap={this.toggleAppBarPopover}
          iconElementLeft={<IconButton><Link to="/"><ActionHome/></Link></IconButton>}
          // onLeftIconButtonTouchTap={}
          // onLeftIconButtonTouchTap={this.toggleAppBarDrawer}
          // showMenuIconButton={false}
        />
        <Popover
          open={this.state.popoverIsOpen}
          onRequestClose={this.closePopover}
          animated={true}
          anchorEl={this.state.anchorEl}
          style={popoverStyle}
          targetOrigin={this.state.targetOrigin}
        >
          <Menu onItemTouchTap={this.closePopover}>
            <MenuItem><NavLink to="/events" activeClassName="selected">Events</NavLink></MenuItem>
            <MenuItem><NavLink to="/ministries">Ministries</NavLink></MenuItem>
          </Menu>
        </Popover>

        {/* <Events></Events> */}
        {/* <Drawer
          docked={false}
          width={200}
          open={this.state.drawerIsOpen}
          onRequestChange={ (open) => this.setState({drawerIsOpen: open}) }
         >
          <Menu style={menuStyle}>
            <MenuItem>News</MenuItem>
            <MenuItem>Ministries</MenuItem>
          </Menu>
        </Drawer> */}
      </div>
    );
  }
}

export default NavBar;