import React, { Component } from "react";

let randomNumber = Math.random();
let decimalNumber = Math.floor(randomNumber * 50);
class DetailTransactions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueNumber: decimalNumber
    };
  }

  render() {
    return (
      <>
        <div className="card-sub-app mb-20">
          <div className="card-flex">
            <div className="card-grid">
              <div className="card-count-data mt-20">
                <h3 className="text-center">Total Transactions</h3>
                <div className="card-number-data text-center">
                  {this.state.valueNumber * 3}
                </div>
                <div className="btn-primary btn-small text-center mt-20 fw-normal btn-sucess">
                  12% increase
                </div>
              </div>
            </div>
            <div className="card-grid">
              <div className="card-count-data mt-20">
                <h3 className="text-center">Done Transactions</h3>
                <div className="card-number-data text-center">
                  {this.state.valueNumber * 2}
                </div>
                <div className="btn-primary btn-small text-center mt-20 fw-normal btn-sucess">
                  12% increase
                </div>
              </div>
            </div>
            <div className="card-grid">
              <div className="card-count-data mt-20">
                <h3 className="text-center">Ongoing Transactions</h3>
                <div className="card-number-data text-center">
                  {this.state.valueNumber + 12}
                </div>
                <div className="btn-primary btn-small text-center mt-20 fw-normal btn-warning">
                  12% increase
                </div>
              </div>
            </div>
            <div className="card-grid">
              <div className="card-count-data mt-20">
                <h3 className="text-center">Cancelled Transactions</h3>
                <div className="card-number-data text-center">
                  {this.state.valueNumber + 16}
                </div>
                <div className="btn-primary btn-small text-center mt-20 fw-normal btn-warning">
                  12% increase
                </div>
              </div>
            </div>
            <div className="card-grid text-center">
              <div className="card-count-data mt-20">
                <h3 className="text-center">Void Transactions</h3>
                <div className="card-number-data text-center">
                  {this.state.valueNumber + 19}
                </div>
                <div className="btn-primary btn-small text-center mt-20 fw-normal btn-warning">
                  12% increase
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DetailTransactions;
