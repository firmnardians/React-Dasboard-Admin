import React from "react";

const ButtonBig = props => {
  return (
    <>
      <div
        className={`btn-primary mr-20 cursor-pointer ds-inline-blok ${props.className}`}
        onClick={props.onClick}
      >
        {props.title}
      </div>
    </>
  );
};

export default ButtonBig;
