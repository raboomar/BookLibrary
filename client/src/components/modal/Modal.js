import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { dontShow } from "../../features/modal/modalSlice";
import "./modal.css";
const Modal = (props) => {
  const { value } = useSelector((state) => state.showModal);
  const dispatch = useDispatch();

  return (
    <>
      {value ? (
        <div className="modal-container">
          <div className="modal-content">
            <span
              onClick={() => {
                dispatch(dontShow());
              }}
              className="close"
            >
              &times;
            </span>

            {props.children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
