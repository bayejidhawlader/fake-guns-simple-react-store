import React from "react";

const Modal = (props) => {
  console.log(props);
  return (
    <div className="bg-white">
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white text-start">
          <img className="h-72 w-full" src={props.data.img} alt="" />
          <div className=" p-4">
            <h2 className="font-bold text-lg">{props.data.name}</h2>
            <h4 className="py-2 font-bold text-base">
              Action: {props.data.action}
            </h4>
            <h3 className="font-bold text-sm">Bullet: {props.data.bullet}</h3>
          </div>

          <div className="modal-action">
            <label
              onClick={() => props.setModalData(null)}
              htmlFor="my-modal"
              className="btn"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
