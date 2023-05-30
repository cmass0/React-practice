import React from "react";
import "./ErrorModal.css";
// import ReactDom from "react-dom";

// const Backdrop = (props) => {
//   return <div className="modal-effect" onClick={props.onReset} />;
// };

// const OverlayModal = (props) => {
//   return (
// <form id="modal">
//   <div className="top">{props.title}</div>
//   <div className="body">
//     {props.message}
//     <div>
//       <button className="modal-btn" onClick={props.onReset}>
//         Okay
//       </button>
//     </div>
//   </div>
// </form>
//   );
// };
function ErrorModal(props) {
  return (
    // <React.Fragment>
    //   {ReactDom.createPortal(
    //     <Backdrop onClick={props.onReset} />,
    //     document.getElementById("backdrop-root")
    //   )}
    //   {ReactDom.createPortal(
    //     <OverlayModal
    //       title={props.title}
    //       message={props.message}
    //       onClick={props.onReset}
    //     />,
    //     document.getElementById("errormodal-root")
    //   )}
    // </React.Fragment>
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default ErrorModal;
