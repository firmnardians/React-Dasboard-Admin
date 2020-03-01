import React, { Component } from "react";
import DetailAccount from "../../controllers/EditAccount/EditAccount";

export class Account extends Component {
  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>Account</h1>
        </div>

        <DetailAccount />
      </div>
    );
  }
}

export default Account;
