import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu.js';

import '../stylesheets/HoverButton.css';

// This functional Menu component may be able to be converted to a class component
// function Menu(props) {
//   return (
//     <h1>This is menu yo!</h1>
//   )
// }

class HoverButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsExpanded: false,
      menuTitle: "Menu"
    }
    this.hoverButtonRoot = document.getElementById('hover-button-root');

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(event) {
    console.log("Button is clicked");
    console.log("State before change", this.state.menuIsExpanded);

    if (this.state.isExpanded) {
      this.setState((prevState) => {
        console.log("Previous state", prevState);  
        return {
          menuIsExpanded: !prevState.menuIsExpanded,
          menuTitle: "Close"
        }
      })
    } else {
      this.setState((prevState) => {
        console.log("Previous state", prevState);
        return {
          menuIsExpanded: !this.state.menuIsExpanded,
          menuTitle: "Menu"
        }
      })
    }
    
  }

  render() {
    let menu = null;
    
    if (this.state.menuIsExpanded) {
      menu = <Menu />;
    }

    return (
      ReactDOM.createPortal(
        <div>
          {menu}
          <button id="hover-menu-button" onClick={this.toggleMenu}><h1>{this.state.menuTitle}</h1></button>
        </div>,
        this.hoverButtonRoot
      )
    )
  }
}

export default HoverButton;