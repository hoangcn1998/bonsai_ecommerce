import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

function Image(image) {
  let style = {
    width: "50px",
    height: "70px",
  };

  return <img style={style} src={image.src}></img>;
}

function ButtonGroup() {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">
        Edit
      </button>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

function ListProducts() {
  const columns = [
    { field: "categoryId", headerName: "IdCategory", width: 150 },
    {
      field: "bigPicture",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        console.log(params);
        return <Image src={params.row.bigPicture}></Image>;
      },
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "id", headerName: "Id", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "action",
      headerName: "Action",
      disableClickEventBubbling: true,
      width: 150,
      renderCell: (params) => {
        return <ButtonGroup></ButtonGroup>;
      },
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then(function (response) {
        console.log(response);
        const { data } = response;
        const formatProducts = formatData(data);
        setStateProduct(formatProducts);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [stateProducts, setStateProduct] = useState([]);

  const formatData = (products) => {
    return products.map((item) => {
      const { categoryId, name, bigPicture, price, id } = item;
      return {
        id,
        categoryId,
        bigPicture,
        name,
        price,
      };
    });
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={stateProducts}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default ListProducts;
