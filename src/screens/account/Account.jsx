import React, { Component } from "react";
import ButtonBig from "../../components/button/ButtonBig";
import "./account.css";
import "../../components/modal/modal.css";

// Start - Data dummy untuk regiter dan last login
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
// Finish - Data dummy untuk regiter dan last login

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Ade Firman Ardiansyah",
      number: "08139897475",
      email: "firmnardians@gmail.com",
      password: "luwakwhitecoffe",
      regisDate: ` 21 ${dataMonth[getRegist]} ${getDate.getFullYear() - 1}`,
      lastLogin: getToday,

      active: true // untuk memanipulasi data styling
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.editProfile = this.editProfile.bind(this);
  }

  handleChangeName(e) {
    this.setState({ name: e.target.value });
  }
  handleChangeNumber(e) {
    this.setState({ number: e.target.value });
  }
  handleChangeEmail(e) {
    this.setState({ email: e.target.value });
  }
  handleChangePassword(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  // memunculkan modal
  editProfile() {
    this.setState(state => ({
      active: !state.active
    }));
  }
  // memunculkan modal

  render() {
    let dummyPass = "••••••••";
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
              </div>
            </div>

            <div className="card-account">
              <div className="card-flex">
                <div className="detail-info-account">
                  <h3>Password</h3>
                </div>
                <div className="data-info-account">
                  <h3 type="password">{dummyPass}</h3>
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
              </div>
            </div>
          </div>
          <ButtonBig title="Edit Profile" onClick={this.editProfile} />

          {/* Modal */}
          <div
            className={
              this.state.active
                ? "overlay "
                : "overlay transition overlay-active "
            }
            onClick={this.editProfile}
          ></div>
          <div
            className={
              this.state.active ? "modal" : "modal transition modal-active"
            }
          >
            <div className="modal-title">
              <h2>Edit profile</h2>
            </div>

            {/* Modal Content */}
            <form onSubmit={this.handleSubmit}>
              <div className="modal-content">
                <div className="card-flex">
                  <div className="card-grid">
                    <div className="card-input-modal">
                      <input
                        className={
                          this.state.active
                            ? "modal-input"
                            : "modal-input transition modal-input-active"
                        }
                        type="text"
                        name="password"
                        id="inputModalName"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                      />
                      <label htmlFor="inputModalName" className="label-modal">
                        <h4>Name</h4>
                      </label>
                    </div>
                  </div>

                  <div className="card-grid">
                    <div className="card-input-modal">
                      <input
                        className={
                          this.state.active
                            ? "modal-input"
                            : "modal-input transition modal-input-active"
                        }
                        type="email"
                        name="password"
                        id="inputModalEmail"
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                      />
                      <label htmlFor="inputModalEmail" className="label-modal">
                        <h4>Email</h4>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="card-flex">
                  <div className="card-grid">
                    <div className="card-input-modal">
                      <input
                        className={
                          this.state.active
                            ? "modal-input"
                            : "modal-input transition modal-input-active"
                        }
                        type="number"
                        name="password"
                        id="inputModalPhoneNumber"
                        value={this.state.number}
                        onChange={this.handleChangeNumber}
                      />
                      <label
                        htmlFor="inputModalPhoneNumber"
                        className="label-modal"
                      >
                        <h4>Phone number</h4>
                      </label>
                    </div>
                  </div>

                  <div className="card-grid">
                    <div className="card-input-modal">
                      <input
                        className={
                          this.state.active
                            ? "modal-input"
                            : "modal-input transition modal-input-active"
                        }
                        type="password"
                        name="password"
                        id="inputModalPassword"
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                      />
                      <label
                        htmlFor="inputModalPassword"
                        className="label-modal"
                      >
                        <h4>Password</h4>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal Content */}

              <div className="modal-footer">
                <div className="card-flex">
                  <div className="card-grid-modal">
                    <div
                      className="discard-button-modal"
                      onClick={this.editProfile}
                    >
                      <h4>Discard</h4>
                    </div>
                  </div>
                  <div className="card-grid-modal">
                    <div
                      className="save-button-modal"
                      onClick={this.editProfile}
                    >
                      <h4>Save</h4>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Modal */}
        </div>
      </div>
    );
  }
}

export default Account;
