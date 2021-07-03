import React, { useState } from "react";
import Item from "./Item/Item";
import "./style.scss";

function Category(props) {
  const [categories] = useState([
    {id: 1, name: "Table Tree Plant", count: 50},
    {id: 2, name: "Indoor Plants", count: 75},
    {id: 3, name: "House Plants", count: 50},
  ])
  return (
    <div className="category">
      <Item categories={categories} />
    </div>
  )
}

export default Category;
