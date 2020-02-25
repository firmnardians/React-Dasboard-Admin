import React, { Component } from "react";

export class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      titleCategory: "",
      allCategory: JSON.parse(localStorage.getItem("category")) || [],
      showTodoType: "all",
      searchTerm: "",
      showDetailModal: false,
      showDetailIsOf: ""
    };
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  };

  onTitleChange = titleCategory => {
    this.setState({ titleCategory });
  };

  createCategory = () => {
    let categoryList = [];
    let categoryItem = {};
    let { titleCategory } = this.state;

    if (!titleCategory) return;
    //mendapatkan localstorage yang tersimpan sebelumnya
    const previousList = JSON.parse(localStorage.getItem("category"));
    if (previousList !== "" && Array.isArray(previousList)) {
      categoryList = [...previousList];
    }

    //menghasilkan id berdasarkan milisecond
    const d = new Date();
    const id = d.valueOf();
    categoryItem = { id: id, titleCategory };
    categoryList.push(categoryItem);
  };

  render() {
    return <div></div>;
  }
}

export default AddCategory;
