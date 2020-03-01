import React, { Component } from "react";
import BillingBusiness from "../../controllers/BillingBusiness/BillingBusiness";

export class Billing extends Component {
  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>Billing</h1>
        </div>
        <div className="card-app">
          <div className="card-app-title">
            <h2>Select your business</h2>
          </div>
          <div className="my-business-select">
            <BillingBusiness />
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
