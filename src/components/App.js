import React, { Component } from 'react';
// import logo from './logo.svg';
import '../stylesheets/App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // drawerIsOpen: false,
      popoverIsOpen: false,
      targetOrigin: {
        horizontal: 'left',
        vertical: 'top'
      }
    }
    // Functions 'this' binding
    // this.toggleAppBarDrawer = this.toggleAppBarDrawer.bind(this);
    this.toggleAppBarPopover = this.toggleAppBarPopover.bind(this);
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
  
  handleClosePopover = (event) => {
    this.setState({
      popoverIsOpen: false
    })
  }

  render() {
    const menuStyle = {
      textAlign: 'left'
    };

    const popoverStyle = {
      width: '100%',
      textAlign: 'center'
    };

    return (
      <div className="App">
        <AppBar 
          title='Mudika Vancouver'
          // onLeftIconButtonTouchTap={this.toggleAppBarDrawer}
          onTitleTouchTap={this.toggleAppBarPopover}
          showMenuIconButton={false}
        />
        <Popover
          open={this.state.popoverIsOpen}
          onRequestClose={this.handleClosePopover}
          anchorEl={this.state.anchorEl}
          style={popoverStyle}
          targetOrigin={this.state.targetOrigin}
        >
          <Menu>
            <MenuItem>News</MenuItem>
            <MenuItem>Ministries</MenuItem>
          </Menu>
        </Popover>

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

export default App;
