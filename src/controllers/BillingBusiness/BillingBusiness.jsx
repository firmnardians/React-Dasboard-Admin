import React, { Component } from "react";
import axios from "axios";
import "../../components/Select/Select.css";

export class BillingBusiness extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billingBusiness: []
    };
  }

  getFromAPI = () => {
    axios.get("http://localhost:3004/business").then(response => {
      this.setState({
        billingBusiness: response.data
      });
    });
  };

  componentDidMount() {
    this.getFromAPI();
  }

  render() {
    return (
      <>
        <select className="select-group" name="" id="">
          {this.state.billingBusiness.map(item => {
            return <option key={item.id}>{item.title}</option>;
          })}
        </select>
      </>
    );
  }
}

export default BillingBusiness;
