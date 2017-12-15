import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import PopMenu from './PopMenu.js';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import '../stylesheets/HoverButton.css';

class HoverButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsExpanded: false,
      menuComponent: null
    }
    this.hoverButtonRoot = document.getElementById('hover-button-root');

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
          menuComponent: <PopMenu handleMenuItemClick={this.toggleMenu}/>
        }
      })
    }
    
  }

  render() {
    return (
      /* ReactDOM.createPortal(
        <button className="hover-menu-button" onClick={this.toggleMenu}>
          {this.state.menuComponent}
          <h1 className="hover-menu-button">{this.state.menuTitle}</h1>
        </button>,
        this.hoverButtonRoot
      ) */
      ReactDOM.createPortal(
        <div className="hover-menu">
          {this.state.menuComponent}
          <FloatingActionButton 
            className="hover-menu-button"
            onClick={this.toggleMenu}
          >
            <MoreVertIcon />
          </FloatingActionButton>
        </div>,
        this.hoverButtonRoot
      )
    )
  }
}

export default HoverButton;