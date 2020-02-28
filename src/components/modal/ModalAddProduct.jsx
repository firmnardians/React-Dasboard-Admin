import React from "react";
import "./Modal.css";

const ModalAddProduct = props => {
  return (
    <>
      {/* Modal start */}
      <div
        className={props.className ? "modal" : "modal transition modal-active"}
      >
        {/* header modal */}
        <div className="modal-title">
          <h2>Create category</h2>
        </div>
        {/* header modal */}

        {/* content modal */}
        <div className="modal-content">
          <div className="card-input-modal">
            <input
              className={
                props.className
                  ? "modal-input"
                  : "modal-input transition modal-input-active"
              }
              type="text"
              name="category"
              id="inputModalCategory"
              ref={props.ref}
            />
            <label htmlFor="inputModalCategory" className="label-modal">
              <h4>New Category</h4>
            </label>
          </div>
        </div>
        {/* content modal */}

        {/* Footer modal */}
        <div className="modal-footer">
          <div className="card-flex">
            <div className="card-grid-modal">
              <div className="discard-button-modal" onClick={props.onClick}>
                <h4>Discard</h4>
              </div>
            </div>
            <div className="card-grid-modal">
              <div className="save-button-modal" onClick={props.onClick}>
                <h4>Save</h4>
              </div>
            </div>
          </div>
        </div>
        {/* Footer modal */}
      </div>
      {/* Modal Finish */}
    </>
  );
};

export default ModalAddProduct;
