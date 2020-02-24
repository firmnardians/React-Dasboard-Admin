import React, { Component } from "react";
import Empty from "../../components/empty/Empty";

export class Business extends Component {
  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>My Business</h1>
        </div>

        <Empty
          titleEmpty="Kamu tidak memiliki bisnis"
          titleButton="Buat bisnis baru"
        />
      </div>
    );
  }
}

export default Business;
