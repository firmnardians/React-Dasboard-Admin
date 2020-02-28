import React, { Component } from "react";
import "./Select.css";

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
    this.klik = this.klik.bind(this);
  }

  klik() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <>
        <div className="button-select" onClick={this.klik}>
          {this.props.name}
          <i className="material-icons icon-center pl-5">arrow_drop_down</i>
        </div>
        <div
          className={
            this.state.active
              ? "option-card-select"
              : "option-card-select-active"
          }
        >
          <ul>
            <li className="list-option">Pisang</li>
            <li className="list-option">Semangka</li>
            <li className="list-option">Pepaya</li>
          </ul>
        </div>
      </>
    );
  }
}

export default Select;
