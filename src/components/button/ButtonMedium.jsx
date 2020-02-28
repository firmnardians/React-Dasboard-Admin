import React from "react";
import "./Button.css";

const ButtonMedium = props => {
  return (
    <>
      <div
        className={`btn btn-primary mr-20 cursor-pointer ds-inline-blok btn-medium ${props.className}`}
        onClick={props.onClick}
      >
        {props.title}
      </div>
    </>
  );
};

export default ButtonMedium;
