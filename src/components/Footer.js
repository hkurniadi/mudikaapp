import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../stylesheets/Footer.css'
import Divider from 'material-ui/Divider';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
    this.footerPortalEl = document.getElementById('footer-portal');
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log(this.props.children);
    // document.getElementById('footer-portal').appendChild(this.el);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.getElementById('footer-portal').removeChild('div');
  }

  render() {
    return (
      <div className="Footer">
        <hr className="footer-divider"/>
        <p>Made with Faith and &hearts; by Mudika Vancouver</p>
      </div>
    )

    // Below is just an example of using React Portal
    /* return ReactDOM.createPortal(
      // this.props.children,
      <div className="Footer">
        <p>Made with Faith and &hearts; by Mudika Vancouver</p>
      </div>,
      // this.el
      this.footerPortalEl
    ) */
  }
}

export default Footer;