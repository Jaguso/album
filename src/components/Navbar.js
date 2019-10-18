import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
  render() {
    return(
      <div className="navbar">
        <div className="pix">
          <a href="/">
            <p>pixyalbum</p>
          </a>
        </div>
        <div className="prod">
          <p>PRODUCTS</p>
        </div>
      </div>
    );
  }
}

export default Navbar;