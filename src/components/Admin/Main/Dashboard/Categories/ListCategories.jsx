import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import urlApi from '../../../../../urlApi'

function ButtonGroup({ params, deleteCategory }) {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">
        Edit
      </button>
      <button type="button" className="btn btn-danger" onClick={() => deleteCategory(params)}>
        Delete
      </button>
    </div>
  );
}

function ListCategories() {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "createdAt", headerName: "CreatedAt", width: 250 },
    { field: "updatedAt", headerName: "UpdatedAt", width: 250 },
    {
      field: "action",
      headerName: "Action",
      disableClickEventBubbling: true,
      width: 200,
      renderCell: (params) => {
        console.log(params)
        return <ButtonGroup deleteCategory={deleteCategory} params={params}></ButtonGroup>;
      },
    },
  ];
  // ----------------------get category----------------------
  useEffect(() => {
    axios
      .get(`${urlApi}categories`)
      .then(function (response) {
        const { data } = response;
        const formatCategories = formatData(data);
        setStateCategories(formatCategories);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  const [stateCategories, setStateCategories] = useState([]);

  const formatData = (categories) => {
    return categories.map((item) => {
      const { name, id, createdAt, updatedAt } = item;
      return {
        id,
        name,
        createdAt: new Date(createdAt).toDateString(),
        updatedAt: new Date(updatedAt).toDateString(),
      };
    });
  };
  // ----------------------delete category----------------------

  const removeCategory = (category) => {
    return stateCategories.filter(cate => cate.id !== category.id);
  }

  const deleteCategory = (params) => {
    axios.delete(`${urlApi}categories/${params.id}`)
      .then(function (response) {
        const newCategories = removeCategory(params);
        setStateCategories(newCategories)
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={stateCategories}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default ListCategories;
