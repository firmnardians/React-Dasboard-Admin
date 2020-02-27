import React from "react";
import ButtonBig from "../../button/ButtonBig";
import "./CardBusiness.css";

const CardBusiness = props => {
  return (
    <>
      <div key={props.id} className="card-business-app">
        <div className="card-business-title">
          <h4>{props.data.title}</h4>
          <p>{props.data.id}</p>
        </div>
        <div className="card-business-description">
          <p>{props.data.description}</p>
        </div>
        <ButtonBig
          onClick={() => props.removeBusiness(props.data.id)}
          title="Remove"
        />
      </div>
    </>
  );
};

export default CardBusiness;
