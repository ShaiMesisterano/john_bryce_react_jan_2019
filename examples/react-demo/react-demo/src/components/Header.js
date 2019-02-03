import React, { Component } from 'react';
import Copyrights from './Copyrights';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              
            </li>
            <li className="nav-item dropdown">
              
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                
              </div>
            </li>
            <li className="nav-item">
              <Copyrights year="2022" company="John Bryce" />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
