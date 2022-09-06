import React from "react";
import "./modal.css";
const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <span
          //   onClick={() => {
          //     exitModal();
          //   }}
          className="close"
        >
          &times;
        </span>

        {props.children}
      </div>
    </div>
  );
};

export default Modal;
