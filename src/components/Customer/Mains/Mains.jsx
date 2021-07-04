import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Categories";
import Story from "./Story/Story";
import Plants from "./Plants/Plants";
import Products from "./Products";
import Products from "./Products/Products";

const Mains = () => {
  return (
    <div className="mains">
      <Banner />
      <Category />
      <Story />
      <Plants />
      <Products />
      {/* <Products></Products> */}
    </div>
  );
};

export default Mains;
