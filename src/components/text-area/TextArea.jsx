import React from "react";
import "./textarea.css";

const TextArea = props => {
  return (
    <>
      <div className="text-area-group">
        <textarea
          className={props.className}
          name={props.name}
          id={props.id}
          cols={props.cols}
          placeholder={props.placeholder}
          rows={props.rows}
          onChange={props.onChange}
        ></textarea>
      </div>
    </>
  );
};

export default TextArea;
