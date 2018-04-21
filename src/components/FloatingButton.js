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
      menuIsExpanded: false
    }
    
    this.floatingButtonRoot = document.getElementById('floating-button-root');

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // Component receives new floatingMenuState prop value
    this.setState((prevState) => {  
      return {
        menuIsExpanded: nextProps.floatingMenuState
      }
    })
  }

  toggleMenu(event) {
    if (this.state.menuIsExpanded) {
      // Close the menu on click when it is open
      this.setState((prevState) => {
        // console.log("Previous state", prevState);  
        return {
          menuIsExpanded: !prevState.menuIsExpanded
        }
      })
    } else {
      // Open the menu on click when it is close
      this.setState((prevState) => {
        // console.log("Previous state", prev State);
        return {
          menuIsExpanded: !prevState.menuIsExpanded
        }
      })
    }
    
  }

  render() {
    return (
      ReactDOM.createPortal(
        <div>
          {this.state.menuIsExpanded ? <FloatingMenu handleMenuItemClick={this.toggleMenu}/> : null }
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