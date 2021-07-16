import React, { useEffect, useState } from "react";
import BannerProducts from "../Products/BannerProducts/BannerProducts";
import Instagram from "../Products/Instagram/Instagram";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import ProductShopPage from "./ProductShopPage/ProductShopPage";
import "./style.scss";
import axios from "axios";

const ShopPage = () => {
  const [categories, setCategories] = useState([]);
  const [findCategory, setFindCategory] = useState("all");
  const [sortPrice, setSortPrice] = useState("all");

  useEffect(() => {
    try {
      axios.get("http://localhost:5000/api/categories")
        .then(res => {
          setCategories(res.data);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error)
    }
  }, []);

  function onChangeFindCategory(value) {
    setFindCategory(value)
  }

  function onChangeSortPrice(sort) {
    setSortPrice(sort);
  }

  return (
    <div>
      <BannerProducts></BannerProducts>
      <DropdownMenu
        categories={categories}
        onChangeFindCategory={onChangeFindCategory}
        onChangeSortPrice={onChangeSortPrice}
      />
      <ProductShopPage
        findCategory={findCategory}
        sortPrice={sortPrice} />
      <Instagram></Instagram>
    </div>
  );
};

export default ShopPage;
