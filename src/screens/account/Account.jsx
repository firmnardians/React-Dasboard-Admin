import React, { Component } from "react";
import "./account.css";

export class Account extends Component {
  constructor(props) {
    super(props);
    let dataMonth = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember"
    ];
    let getDate = new Date();
    let getMonth = getDate.getMonth();
    let getToday = `${getDate.getDate()} ${
      dataMonth[getMonth]
    } ${getDate.getFullYear()}`;

    let getRegist = Math.floor(Math.random() * 12) - getMonth + 1;
    this.state = {
      name: "Ade Firman Ardiansyah",
      number: "08139897475",
      email: "firmnardians@gmail.com",
      password: "******",
      regisDate: ` 21 ${dataMonth[getRegist]} ${getDate.getFullYear() - 1}`,
      lastLogin: getToday
    };
  }

  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>Account</h1>
        </div>

        <div className="card-app">
          <div className="card-detail-account">
            <div className="card-account">
              <div className="card-flex">
                <div className="detail-info-account">
                  <h3>Name</h3>
                </div>
                <div className="data-info-account">
                  <h3>{this.state.name}</h3>
                </div>
                <div className="trigger-info-account">
                  <h3>Change name</h3>
                </div>
              </div>
            </div>

            <div className="card-account">
              <div className="card-flex">
                <div className="detail-info-account">
                  <h3>Phone Number</h3>
                </div>
                <div className="data-info-account">
                  <h3>{this.state.number}</h3>
                </div>
                <div className="trigger-info-account">
                  <h3>Change number</h3>
                </div>
              </div>
            </div>

            <div className="card-account">
              <div className="card-flex">
                <div className="detail-info-account">
                  <h3>Email</h3>
                </div>
                <div className="data-info-account">
                  <h3>{this.state.email}</h3>
                </div>
                <div className="trigger-info-account">
                  <h3>Change email</h3>
                </div>
              </div>
            </div>

            <div className="card-account">
              <div className="card-flex">
                <div className="detail-info-account">
                  <h3>Password</h3>
                </div>
                <div className="data-info-account">
                  <h3>{this.state.password}</h3>
                </div>
                <div className="trigger-info-account">
                  <h3>Change Password</h3>
                </div>
              </div>
            </div>

            <div className="card-account">
              <div className="card-flex">
                <div className="detail-info-account">
                  <h3>Registration</h3>
                </div>
                <div className="data-info-account">
                  <h3>{this.state.regisDate}</h3>
                </div>
                <div className="trigger-info-account">
                  <h3></h3>
                </div>
              </div>
            </div>

            <div className="card-account">
              <div className="card-flex">
                <div className="detail-info-account">
                  <h3>Last Login</h3>
                </div>
                <div className="data-info-account">
                  <h3>{this.state.lastLogin}</h3>
                </div>
                <div className="trigger-info-account">
                  <h3></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
