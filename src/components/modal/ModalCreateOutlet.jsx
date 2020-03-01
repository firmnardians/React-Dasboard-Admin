import React from "react";
import "./ModalCreateOutlet.css";

const ModalCreateOutlet = props => {
  return (
    <>
      <div
        className={
          props.className
            ? "modalCreateOutlet transition"
            : "modalCreateOutlet transition modalCreateOutlet-active"
        }
      >
        <div className="modal-title">
          <h2>Create Outlet</h2>
        </div>
        <div className="modal-content">
          <div className="card-input-modal">
            <input type="text" />
          </div>
          <input type="text" />
          <label htmlFor="">Nama Outlet</label>
        </div>
        <div className="modal-footer">
          <div className="card-flex">
            <div className="card-grid-modal">
              <div className="discard-button-modal" onClick={props.discard}>
                <h4>Discard</h4>
              </div>
            </div>
            <div className="card-grid-modal">
              <div className="save-button-modal" onClick={props.save}>
                <h4>Save</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCreateOutlet;
