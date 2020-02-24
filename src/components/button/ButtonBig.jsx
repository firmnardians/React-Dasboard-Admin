import React from "react";

function ButtonBig(props) {
  return (
    <>
      <div className="btn-primary mr-20" onClick={props.onClick}>
        {props.title}
      </div>
    </>
  );
}

export default ButtonBig;
