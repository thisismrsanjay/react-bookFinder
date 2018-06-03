import React, { Component } from 'react';


class Header extends Component {
   
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >BookFinder</a>
        </nav>
      </div>
    );
  }
}

export default Header;