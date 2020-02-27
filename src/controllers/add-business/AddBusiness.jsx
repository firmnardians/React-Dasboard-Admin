import React, { Component } from "react";
import ButtonBig from "../../components/button/ButtonBig";
import Overlay from "../../components/overlay/Overlay";
import "../../components/modal/modal.css";
import Input from "../../components/input/Input";
import TextArea from "../../components/text-area/TextArea";
import CardBusiness from "../../components/card/card-business/CardBusiness";
import axios from "axios";

export class AddBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      hideOverlayModal: true,
      isLoading: true,
      isEmpty: true,

      createBusiness: {
        id: 1,
        title: "",
        description: ""
      }
    };
  }

  clickModalOverlay = () => {
    this.setState({
      hideOverlayModal: !this.state.hideOverlayModal
    });
  };

  getDataAPI = () => {
    axios
      .get("http://localhost:3004/business?_sort=id&_order=desc")
      .then(
        response => {
          this.setState({
            business: response.data,
            isLoading: false
          });
        }
        // console.log(response);
      )
      .catch(error => {
        console.log(error);
      });
  };

  postDataAPI = () => {
    axios
      .post("http://localhost:3004/business", this.state.createBusiness)
      .then(() => {
        // console.log(result);
        this.getDataAPI();
      });
  };

  handleCreateBusiness = event => {
    let getId = new Date().getTime();
    // console.log(`ini id saya ${getId}`);

    // console.log("cek onchange", event.target.value);
    let newCreateBusiness = { ...this.state.createBusiness }; // mengcopy / duplicat ke varibel baru
    // console.log(event.target.name);

    newCreateBusiness["id"] = getId;
    newCreateBusiness[event.target.name] = event.target.value;

    this.setState(
      {
        createBusiness: newCreateBusiness
      }
      // () => {
      //   console.log(this.state.createBusiness);
      // }
    );
  };

  clickRemoveBusiness = data => {
    axios.delete(`http://localhost:3004/business/${data}`).then(() => {
      this.getDataAPI();
    });
  };

  clickSubmitBusiness = () => {
    // console.log("submit work");
    // console.log(this.state.createBusiness);
    this.postDataAPI();
    this.clickModalOverlay();
  };

  componentDidMount() {
    this.getDataAPI();
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading....</p>;
    }
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
              name="title"
              onChange={this.handleCreateBusiness}
            />
            <TextArea
              className={
                this.state.hideOverlayModal
                  ? "text-area"
                  : "text-area transition text-area-active"
              }
              name="description"
              placeholder="Deskripsi"
              onChange={this.handleCreateBusiness}
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
                  <h4 onClick={this.clickSubmitBusiness}>Save</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ButtonBig title="Buat bisnis baru" onClick={this.clickModalOverlay} />

        <div className="card-flex">
          <div className="row">
            {this.state.isEmpty &&
              this.state.business.map(item => {
                return (
                  <div key={item.id} className="column">
                    <CardBusiness
                      key={item.id}
                      data={item}
                      removeBusiness={this.clickRemoveBusiness}
                    />
                  </div>
                );
              })}
            {!this.state.isEmpty && <p>Data Kosong</p>}
          </div>
        </div>
      </>
    );
  }
}

export default AddBusiness;
