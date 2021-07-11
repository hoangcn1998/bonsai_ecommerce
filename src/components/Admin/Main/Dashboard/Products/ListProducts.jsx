import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import { useEffect } from "react";

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
    { field: "id", headerName: "Id", width: 60 },
    { field: "idCategory", headerName: "IdCategory", width: 150 },
    { field: "idProduct", headerName: "IdProduct", width: 150 },
    {
      field: "image",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return <Image src={params.row.image}></Image>;
      },
    },
    { field: "name", headerName: "Name", width: 150 },
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
        const { categoryId, id, bigPicture, name, price } = response.data[0];

        let dataProducts = {
          id: response.data.length + 1,
          idCategory: categoryId,
          idProduct: id,
          image: bigPicture,
          name,
          price,
        };

        setStateProduct([...stateProducts, dataProducts]);

        console.log(categoryId);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [stateProducts, setStateProduct] = useState([]);

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
