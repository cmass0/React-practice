import React from "react";
import "./ErrorModal.css";

function ErrorModal(props) {
  return (
    <div>
      <div className="modal-effect" onClick={props.onReset} />
      <form id="modal">
        <div className="top">{props.title}</div>
        <div className="body">
          {props.message}
          <div>
            <button className="modal-btn" onClick={props.onReset}>
              Okay
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ErrorModal;
