import React, { Component } from "react";
import DetailTransactions from "../../components/detail-transactions/DetailTransactions";

class Report extends Component {
  render() {
    return (
      <>
        <div className="card-content-app">
          <div className="card-content-title">
            <h1>Report</h1>
          </div>
          <div className="card-app">
            <DetailTransactions />
          </div>
        </div>
      </>
    );
  }
}

export default Report;
