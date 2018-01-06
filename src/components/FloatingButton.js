import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FloatingMenu from './FloatingMenu.js';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import '../stylesheets/FloatingButton.css';

class FloatingButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsExpanded: false,
      menuComponent: null
    }
    this.floatingButtonRoot = document.getElementById('floating-button-root');

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    // console.log("Button is clicked");
    // console.log("State before change", this.state.menuIsExpanded);

    if (this.state.menuIsExpanded) {
      // Closing the menu on click when it is open
      this.setState((prevState) => {
        // console.log("Previous state", prevState);  
        return {
          menuIsExpanded: !prevState.menuIsExpanded,
          menuComponent: null
        }
      })
    } else {
      // Open the menu on click when it is close
      this.setState((prevState) => {
        // console.log("Previous state", prev State);
        return {
          menuIsExpanded: !prevState.menuIsExpanded,
          menuComponent: <FloatingMenu handleMenuItemClick={this.toggleMenu}/>
        }
      })
    }
    
  }

  render() {
    return (
      /* ReactDOM.createPortal(
        <button className="floating-menu-button" onClick={this.toggleMenu}>
          {this.state.menuComponent}
          <h1 className="floating-menu-button">{this.state.menuTitle}</h1>
        </button>,
        this.floatingButtonRoot
      ) */
      ReactDOM.createPortal(
        <div>
          {this.state.menuComponent}
          <FloatingActionButton 
            className="floating-menu-button"
            onClick={this.toggleMenu}
          >
            <MoreVertIcon />
          </FloatingActionButton>
        </div>,
        this.floatingButtonRoot
      )
    )
  }
}

export default FloatingButton;