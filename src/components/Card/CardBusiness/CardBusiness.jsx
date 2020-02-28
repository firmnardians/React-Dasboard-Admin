import React from "react";
import "./CardBusiness.css";
import ButtonMedium from "../../Button/ButtonMedium";

const CardBusiness = props => {
  return (
    <>
      <div key={props.id} className="card-business-app">
        <div className="card-business-title">
          <h3>{props.data.title}</h3>
        </div>
        <div className="card-business-description">
          <p>{props.data.description}</p>
        </div>
        <div className="card-business-footer">
          <div className="card-flex">
            <div className="card-left">
              <ButtonMedium
                onClick={() => props.updateBusiness(props.data)}
                title="Update"
              />
            </div>
            <div className="crad-right">
              <ButtonMedium
                onClick={() => props.removeBusiness(props.data.id)}
                title="Remove"
                className="btn-danger"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBusiness;
