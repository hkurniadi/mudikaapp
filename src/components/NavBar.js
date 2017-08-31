import React, { Component } from 'react';

import '../stylesheets/NavBar.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';

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

  goToHomePage = (event) => {
    return <Redirect push={true} to="/"/>;
  }

  // closeWelcomeModal = (event) => {
  //   this.setState({
  //     welcomeModalIsOpen: false
  //   })
  // }
  
  render() {

    const menuStyle = {
      textAlign: 'center'
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
          title='Explore Mudika'
          titleStyle={{color: '#f05f40'}}
          onTitleTouchTap={this.toggleAppBarPopover}
          iconElementLeft={<IconButton><Link to="/"><ActionHome/></Link></IconButton>}
          onLeftIconButtonTouchTap={() => {this.goToHomePage()}}
          className="navigation"
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
          <Menu style={menuStyle} onItemTouchTap={this.closePopover}>
            <MenuItem><NavLink to="/about">About</NavLink></MenuItem>
            <MenuItem><NavLink to="/events">Events</NavLink></MenuItem>
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