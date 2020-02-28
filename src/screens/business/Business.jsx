import React, { Component } from "react";
import AddBusiness from "../../controllers/AddBusiness/AddBusiness";

export class Business extends Component {
  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>My Business</h1>
        </div>

        <AddBusiness />
      </div>
    );
  }
}

export default Business;
