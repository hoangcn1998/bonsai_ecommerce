import React from "react";
import "./style.scss";
import BannerProducts from "../Products/BannerProducts/BannerProducts";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import ProductShopPage from "./ProductShopPage/ProductShopPage";
import Pagination from "./Pagination/Pagination";
import Instagram from "../Products/Instagram/Instagram";

const ShopPage = () => {
  return (
    <div>
      <BannerProducts></BannerProducts>
      <DropdownMenu></DropdownMenu>
      <ProductShopPage></ProductShopPage>
      <Pagination></Pagination>
      <Instagram></Instagram>
    </div>
  );
};

export default ShopPage;
