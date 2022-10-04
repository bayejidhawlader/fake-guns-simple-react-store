import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleGun = (props) => {
  const [modalData, setModalData] = useState({});

  const { gun, countIncrease } = props;
  const { img, name, action } = gun;
  //   console.log(gun);

  //   console.log(modalData)

  return (
    <div>
      <div className="card w-full h-full shadow-xl">
        <figure className="">
          <img className="h-72 w-full" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{action}</div>
          </h2>
          <div className="card-actions ">
            <button
              onClick={() => countIncrease()}
              className="btn btn-secondary"
            >
              Add To Cart
            </button>
            {/* <button className="">Details</button> */}
            <label
              onClick={() => setModalData(gun)}
              htmlFor="my-modal"
              className="btn btn-success modal-button"
            >
              Details
            </label>
          </div>
        </div>
      </div>
      {modalData && (
        <Modal data={modalData} setModalData={setModalData}></Modal>
      )}
    </div>
  );
};

export default SingleGun;
