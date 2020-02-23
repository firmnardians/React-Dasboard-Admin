import React, { Component } from "react";
import Table from "./table/Table";

export class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: ["All business", "Ayam Geprek", "Cofee Shop"]
    };
  }
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
            <select className="select-group" name="" id="">
              {this.state.business.map(items => (
                <option value={items} key={items}>
                  {items}
                </option>
              ))}
            </select>
          </div>
          <Table />
        </div>
      </div>
    );
  }
}

export default Billing;
