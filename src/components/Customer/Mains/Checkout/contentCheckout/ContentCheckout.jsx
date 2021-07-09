import React from "react";
import FormInformation from "./FormInfomation";
import Order from "./Order";

const ContentCheckout = () => {
  return (
    <div className="container">
      <div className="row checkout">
        <div className="col-lg-4">
          <FormInformation></FormInformation>
        </div>
        <div className="col-lg-8">
          <Order></Order>
        </div>
      </div>
    </div>
  );
};

export default ContentCheckout;
