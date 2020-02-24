import React from "react";

function ButtonMedium(props) {
  return (
    <>
      <div
        className="btn-primary mr-20 cursor-pointer ds-inline-blok"
        onClick={props.onClick}
      >
        {props.title}
      </div>
    </>
  );
}

export default ButtonMedium;
