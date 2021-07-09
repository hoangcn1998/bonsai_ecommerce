import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Categories";
import Story from "./Story/Story";
import Plants from "./Plants/Plants";
import Products from "./product";
import Instagram from "../Products/Instagram/Instagram";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Story />
      <Plants />
      <Products />
      <Instagram></Instagram>
    </div>
  );
};

export default HomePage;
