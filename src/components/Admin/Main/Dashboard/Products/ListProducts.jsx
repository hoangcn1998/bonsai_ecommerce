import React from "react";
import { useState } from "react";

const ListProducts = () => {
  const [stateProducts, setStateProducts] = useState([
    {
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-1.jpg",
      name: "Polyscias Fabian",
      price: "$60.000",
    },
    {
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-2.jpg",
      name: "Polyscias Fabian",
      price: "$70.000",
    },
    {
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-3.jpg",
      name: "Polyscias Fabian",
      price: "$80.000",
    },
    {
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-4.jpg",
      name: "Polyscias Fabian",
      price: "$90.000",
    },
  ]);

  let dataProducts = stateProducts.map((data, index) => (
    <tr key={index}>
      <th scope="row">{index + 1}</th>
      <td>
        <img src={data.image}></img>
      </td>
      <td>{data.name}</td>
      <td>{data.price}</td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-primary">
            Edit
          </button>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
      </td>
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Images</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>{dataProducts}</tbody>
    </table>
  );
};

export default ListProducts;
