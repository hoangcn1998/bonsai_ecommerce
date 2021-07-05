import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Categories";
import Story from "./Story/Story";
import Plants from "./Plants/Plants";
import Products from "./product";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Story />
      <Plants />
      <Products />
    </div>
  );
};

export default HomePage;
