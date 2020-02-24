import React, { Component } from "react";
import ButtonBig from "../../components/button/ButtonBig";
import "./createOutlet.css";

export class CreateOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.createOutlet = this.createOutlet.bind(this);
  }

  createOutlet() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <>
        <div
          className={
            this.state.active ? "overlay " : "overlay transition overlay-active"
          }
          onClick={this.createOutlet}
        ></div>
        <div
          className={
            this.state.active
              ? "modalCreateOutlet transition"
              : "modalCreateOutlet transition modalCreateOutlet-active"
          }
        >
          <div className="modal-title">
            <h2>Create Outlet</h2>
          </div>
          <div className="modal-content">
            <p>test</p>
          </div>
          <div className="modal-footer">
            <div className="card-flex">
              <div className="card-grid-modal">
                <div
                  className="discard-button-modal"
                  onClick={this.createOutlet}
                >
                  <h4>Discard</h4>
                </div>
              </div>
              <div className="card-grid-modal">
                <div className="save-button-modal" onClick={this.createOutlet}>
                  <h4>Save</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ButtonBig title="Create Outlet" onClick={this.createOutlet} />
      </>
    );
  }
}

export default CreateOutlet;
