import React from "react";
import "./CardBusiness.css";

const CardBusiness = props => {
  return (
    <>
      <div className="card-business-app">
        <div className="card-business-title">
          <h4>{props.title}</h4>
        </div>
        <div className="card-business-description">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default CardBusiness;
