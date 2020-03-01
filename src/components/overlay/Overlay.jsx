import React from "react";
import "./Overlay.css";

const Overlay = props => {
  return (
    <div>
      <div
        className={
          props.className
            ? "overlay "
            : "overlay transition-overlay overlay-active "
        }
        onClick={props.onClick}
      ></div>
    </div>
  );
};

export default Overlay;
