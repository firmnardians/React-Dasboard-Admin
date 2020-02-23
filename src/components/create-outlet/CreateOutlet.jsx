import React, { Component } from "react";
import "../modal/modal.css";

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

  componentDidMount() {
    window.addEventListener("popstate", this.createOutlet);
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
              ? "modal transition"
              : "modal transition modal-active"
          }
        >
          <h2>Create new outlet</h2>
        </div>

        <div
          className="btn-primary mr-20 cursor-pointer"
          onClick={this.createOutlet}
        >
          {this.props.title}
        </div>
      </>
    );
  }
}

export default CreateOutlet;
