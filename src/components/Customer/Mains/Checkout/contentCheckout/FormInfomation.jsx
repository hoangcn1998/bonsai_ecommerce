import React from "react";

const FormInformation = () => {
  return (
    <div className="userform">
      <h1>Billing Information</h1>
      <input type="text" className="form-control" placeholder="Name"></input>
      <input
        type="text"
        className="form-control"
        placeholder="Phone number"
      ></input>
      <input
        type="text"
        className="form-control"
        placeholder="Delivery address"
      ></input>
      <textarea
        className="form-control"
        rows="5"
        placeholder="Order notes"
      ></textarea>
      <button type="button" className="btn btn-light">
        Order
      </button>
    </div>
  );
};

export default FormInformation;
