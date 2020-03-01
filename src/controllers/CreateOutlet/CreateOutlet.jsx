import React, { Component } from "react";
import ButtonBig from "../../components/Button/ButtonBig";
import Overlay from "../../components/Overlay/Overlay";
import ModalCreateOutlet from "../../components/Modal/ModalCreateOutlet";

export class CreateOutlet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOverlay: false
    };
  }

  clickModalOverlay = () => {
    this.setState({
      isModalOverlay: !this.state.isModalOverlay
    });
  };

  render() {
    return (
      <>
        <Overlay
          className={!this.state.isModalOverlay}
          onClick={this.clickModalOverlay}
        />
        <ModalCreateOutlet
          className={!this.state.isModalOverlay}
          discard={this.clickModalOverlay}
        />
        <ButtonBig
          title="Create Outlet"
          className="mr-20"
          onClick={this.clickModalOverlay}
        />
      </>
    );
  }
}

export default CreateOutlet;
