import React from "react";

const Modal = props => {
  return (
    <>
      {/* Modal start */}
      <div
        className={props.className ? "modal" : "modal transition modal-active"}
      >
        {/* header modal */}
        <div className="modal-title">
          <h2>{props.titleModal}</h2>
        </div>
        {/* header modal */}

        {/* content modal */}
        <div className="modal-content">
          {props.child}
          {props.child2}
        </div>
        {/* content modal */}

        {/* Footer modal */}
        <div className="modal-footer">
          <div className="card-flex">
            <div className="card-grid-modal">
              <div className="discard-button-modal" onClick={props.discard}>
                <h4>Batal</h4>
              </div>
            </div>
            <div className="card-grid-modal">
              <div className="save-button-modal" onClick={props.save}>
                <h4>Simpan</h4>
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

export default Modal;
