import React, { Component } from "react";
import "../../components/modal/modal.css";
import Empty from "../../components/empty/Empty";
import { v4 as uuidv4 } from "uuid";

export class ProductCategory extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      active: true,
      list: []
    };
  }

  createCategory = () => {
    this.setState(state => ({
      active: !state.active
    }));
  };

  addCategory = () => {
    const Items = {
      id: uuidv4(),
      value: this.input.current.value,
      date: new Date().toUTCString()
    };

    if (localStorage.getItem("list") == null) {
      const list = [];
      list.push(Items);
      localStorage.setItem("list", JSON.stringify(list));
    } else {
      const list = JSON.parse(localStorage.getItem("list"));
      list.push(Items);
      localStorage.setItem("list", JSON.stringify(list));
    }
    this.setState({
      list: JSON.parse(localStorage.getItem("list"))
    });
    this.createCategory();
  };

  componentDidMount() {
    const list = window.localStorage.getItem("list");
    const parsedList = JSON.parse(list);
    if (list == null) {
      return false;
    } else {
      this.setState({
        list: parsedList
      });
      console.log(this.state.list);
    }
  }

  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>Product category {this.state.active} </h1>
        </div>

        <Empty
          titleEmpty="You don't have a category product"
          titleButton="
          Create category"
          onClick={this.createCategory}
        />

        <>
          {this.state.list.map(item => {
            return <p key={item.id}>{item.value}</p>;
          })}
        </>

        <div
          className={
            this.state.active
              ? "overlay "
              : "overlay transition overlay-active "
          }
          onClick={this.createCategory}
        ></div>
        <div
          className={
            this.state.active ? "modal" : "modal transition modal-active"
          }
        >
          {/* header modal */}
          <div className="modal-title">
            <h2>Create category</h2>
          </div>
          {/* header modal */}

          {/* content modal */}
          <div className="modal-content">
            <div className="card-input-modal">
              <input
                className={
                  this.state.active
                    ? "modal-input"
                    : "modal-input transition modal-input-active"
                }
                type="text"
                name="password"
                id="inputModalCategory"
                ref={this.input}
              />
              <label htmlFor="inputModalCategory" className="label-modal">
                <h4>New Category</h4>
              </label>
            </div>
          </div>
          {/* content modal */}

          {/* Footer modal */}
          <div className="modal-footer">
            <div className="card-flex">
              <div className="card-grid-modal">
                <div
                  className="discard-button-modal"
                  onClick={this.createCategory}
                >
                  <h4>Discard</h4>
                </div>
              </div>
              <div className="card-grid-modal">
                <div className="save-button-modal" onClick={this.addCategory}>
                  <h4>Save</h4>
                </div>
              </div>
            </div>
            {/* Footer modal */}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCategory;
