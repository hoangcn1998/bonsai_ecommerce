import React from "react";
import FormInformation from "./FormInfomation";
import Order from "./Order";

const ContentCheckout = () => {
  return (
    <div className="container-fluid">
      <div className="row checkout">
        <div className="col-lg-7">
          <FormInformation></FormInformation>
        </div>
        <div className="col-lg-5  ">
          <Order></Order>
        </div>
      </div>
    </div>
  );
};

export default ContentCheckout;
