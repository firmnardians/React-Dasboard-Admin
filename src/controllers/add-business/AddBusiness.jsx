import React, { Component } from "react";
import Empty from "../../components/empty/Empty";
import Overlay from "../../components/overlay/Overlay";
import "../../components/modal/modal.css";
import Input from "../../components/input/Input";
import TextArea from "../../components/text-area/TextArea";
import CardBusiness from "../../components/card/card-business/CardBusiness";

export class AddBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      hideOverlayModal: true
    };
  }

  clickModalOverlay = () => {
    this.setState({
      hideOverlayModal: !this.state.hideOverlayModal
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json =>
        this.setState({
          business: json
        })
      );
  }

  render() {
    return (
      <>
        <Overlay
          className={this.state.hideOverlayModal}
          onClick={this.clickModalOverlay}
        />

        <div
          className={
            this.state.hideOverlayModal
              ? "modal"
              : "modal transition modal-active"
          }
        >
          <div className="modal-title">
            <h2>Add Business</h2>
          </div>

          <div className="modal-content">
            <Input
              className={
                this.state.hideOverlayModal
                  ? "modal-input"
                  : "modal-input transition modal-input-active"
              }
              title="Title"
              type="text"
            />
            <TextArea
              className={
                this.state.hideOverlayModal
                  ? "text-area"
                  : "text-area transition text-area-active"
              }
              placeholder="Deskripsi"
            />
          </div>

          <div className="modal-footer">
            <div className="card-flex">
              <div className="card-grid-modal">
                <div
                  className="discard-button-modal"
                  onClick={this.clickModalOverlay}
                >
                  <h4>Discard</h4>
                </div>
              </div>
              <div className="card-grid-modal">
                <div className="save-button-modal">
                  <h4>Save</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Empty
          titleEmpty="Kamu tidak memiliki bisnis"
          titleButton="Buat bisnis baru"
          onClick={this.clickModalOverlay}
        />

        {this.state.business.map(item => {
          return (
            <CardBusiness
              key={item.id}
              title={item.title}
              description={item.body}
            />
          );
        })}
      </>
    );
  }
}

export default AddBusiness;
