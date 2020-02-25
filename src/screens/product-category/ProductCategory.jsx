import React, { Component } from "react";
import "../../components/modal/modal.css";
import Empty from "../../components/empty/Empty";
import Overlay from "../../components/overlay/Overlay";
import ModalAddProduct from "../../components/modal/ModalAddProduct";

export class ProductCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true
    };
  }

  createCategory = () => {
    this.setState(state => ({
      active: !state.active
    }));
  };

  render() {
    return (
      <div className="card-content-app">
        <div className="card-content-title">
          <h1>Product category </h1>
        </div>

        <Empty
          titleEmpty="You don't have a category product"
          titleButton="
          Create category"
          onClick={this.createCategory}
        />

        <Overlay className={this.state.active} onClick={this.createCategory} />

        <ModalAddProduct
          className={this.state.active}
          onClick={this.createCategory}
        />
      </div>
    );
  }
}

export default ProductCategory;
