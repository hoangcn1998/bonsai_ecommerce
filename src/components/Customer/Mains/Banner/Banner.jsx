import React from "react";
import "./style.scss";

function Banner(props) {
  return (
    <div className="banner">
      <div className="banner__overlay" />
      <div className="banner__title">
        <h2>Spring House </h2>
        <h2>Plant The Perfect Choise!</h2>
        <p>Bring Fresher To Your Architecture</p>
        <button className="btn btn--primary banner__title-group">
          <div className="banner__title-group--overlay"></div>
          <span>Shop Now</span>
          <span><i className="fa fa-long-arrow-right"></i></span>
        </button>
      </div>
    </div>
  )
}

export default Banner;
