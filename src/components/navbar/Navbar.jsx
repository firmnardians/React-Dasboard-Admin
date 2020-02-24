import React, { Component } from "react";
import "./navbar.css";
import Notification from "../notification/notification";
import CreateOutlet from "../create-outlet/CreateOutlet";

class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar-app">
          <div className="card-brand">
            <h1>{this.props.brand}</h1>
          </div>
          <div className="card-navbar-menu">
            <ul className="navbar-list">
              <li className="sm-none">
                <CreateOutlet />
              </li>
              <li>
                <Notification />
              </li>
              <li>
                <i className="material-icons navbar-icon">person</i>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
