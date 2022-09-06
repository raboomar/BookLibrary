import React from "react";
import "./modal.css";
const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-content">{props.children}</div>
    </div>
  );
};

export default Modal;
