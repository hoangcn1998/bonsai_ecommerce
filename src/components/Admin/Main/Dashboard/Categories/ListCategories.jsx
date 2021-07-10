import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

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

function ListCategories() {
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 500 },
    {
      field: "action",
      headerName: "Action",
      disableClickEventBubbling: true,
      width: 200,
      renderCell: (params) => {
        return <ButtonGroup></ButtonGroup>;
      },
    },
  ];

  const [stateCategories, setStateCategories] = useState([
    {
      id: "1",
      name: "Polyscias Fabian 1",
    },
    {
      id: "2",
      name: "Polyscias Fabian 2",
    },
    {
      id: "3",
      name: "Polyscias Fabian 3",
    },
    {
      id: "4",
      name: "Polyscias Fabian 4",
    },
    {
      id: "5",
      name: "Polyscias Fabian 4",
    },
    {
      id: "6",
      name: "Polyscias Fabian 4",
    },
    {
      id: "7",
      name: "Polyscias Fabian 4",
    },
  ]);

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
