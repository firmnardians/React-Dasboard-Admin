import React, { Component } from "react";
import DetailAccount from "../../components/DetailAccount/DetailAccount";
import ButtonMedium from "../../components/Button/ButtonMedium";
import Overlay from "../../components/Overlay/Overlay";
import Modal from "../../components/Modal/Modal.jsx";
import Input from "../../components/Input/Input";

export class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOverlayModal: true
    };
  }

  clickOverlayModal = () => {
    // console.log("test");
    this.setState({
      isOverlayModal: !this.state.isOverlayModal
    });
  };

  render() {
    return (
      <>
        <Overlay
          className={this.state.isOverlayModal}
          onClick={this.clickOverlayModal}
        />
        <Modal
          className={this.state.isOverlayModal}
          titleModal="Edit Akun"
          discard={this.clickOverlayModal}
          save={this.clickOverlayModal}
          child={
            <Input
              title="Nama"
              type="text"
              className={this.state.isOverlayModal}
            />
          }
        />

        <div className="card-app">
          <div className="card-detail-account">
            <DetailAccount info="Nama" title="Ade Firman Ardiansyah" />
            <DetailAccount info="Email" title="firmnardians@gmail.com" />
            <DetailAccount info="Telephone" title="081398907475" />
            <DetailAccount info="Password" title="Password" />
            <DetailAccount info="Registrasi" title="Password" />
            <DetailAccount info="Terakhir login" title="Password" />
          </div>
          <ButtonMedium onClick={this.clickOverlayModal} title="Edit Akun" />
        </div>
      </>
    );
  }
}

export default Account;
