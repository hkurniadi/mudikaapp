import React, { Component } from 'react';
// import logo from './logo.svg';
import '../stylesheets/App.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerIsOpen: false
    }

    this.toggleAppBarDrawer = this.toggleAppBarDrawer.bind(this);
  }
  
  toggleAppBarDrawer = (event) => {
    event.preventDefault();
    this.setState({
      drawerIsOpen: !this.state.drawerIsOpen
    })
  };
  
  render() {
    return (
      <div className="App">
        <AppBar 
          title='Mudika Vancouver'
          onLeftIconButtonTouchTap={this.toggleAppBarDrawer}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.drawerIsOpen}
          onRequestChange={ (open) => this.setState({drawerIsOpen: open}) }
        >
          <MenuItem>News</MenuItem>
          <MenuItem>Ministries</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default App;
