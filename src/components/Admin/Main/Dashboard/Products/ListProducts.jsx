import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import React, { useEffect, useState } from "react";
import urlApi from '../../../../../urlApi';

function Image(image) {
  let style = {
    width: "50px",
    height: "70px",
  };

  return <img style={style} alt={image.src} src={image.src}></img>;
}

function ButtonGroup({ params, deleteProduct }) {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">
        Edit
      </button>
      <button type="button" className="btn btn-danger" onClick={() => deleteProduct(params)}>
        Delete
      </button>
    </div>
  );
}

function ListProducts() {

  const columns = [
    { field: "categoryId", headerName: "CategoryName", width: 180 },
    {
      field: "bigPicture",
      headerName: "Image",
      width: 150,
      renderCell: (params) => {
        return <Image src={params.row.bigPicture}></Image>;
      },
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "id", headerName: "Id", width: 150 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "createdAt", headerName: "CreatedAt", width: 150 },
    {
      field: "action",
      headerName: "Action",
      disableClickEventBubbling: true,
      width: 150,
      renderCell: (params) => {
        return <ButtonGroup deleteProduct={deleteProduct} params={params}  ></ButtonGroup>;
      },
    },
  ];

  useEffect(() => {
    axios
      .get(`${urlApi}products`)
      .then(function (response) {
        console.log(response)
        const { data } = response;
        const formatproducts = formatData(data);
        console.log(formatproducts)
        setStateProducts(formatproducts);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [stateProduct, setStateProducts] = useState([]);

  const formatData = (products) => {
    return products.map((item) => {
      const { categoryId, name, bigPicture, price, id, createdAt } = item;
      return {
        id,
        categoryId: `category${categoryId}`,
        bigPicture,
        name,
        price,
        createdAt: new Date(createdAt).toDateString(),
      };
    });
  }

  const removeProduct = (Product) => {
    return stateProduct.filter(product => product.id !== Product.id);
  }

  const deleteProduct = (params) => {
    console.log(params.id)
    axios.delete(`${urlApi}products/${params.id}`)
      .then(function (response) {
        const newProduct = removeProduct(params);
        setStateProducts(newProduct)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={stateProduct}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
}

export default ListProducts;

