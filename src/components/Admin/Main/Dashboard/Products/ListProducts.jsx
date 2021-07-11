// import React from "react";
// import { useState } from "react";

// const ListProducts = () => {
//   const [stateProducts, setStateProducts] = useState([
//     {
//       image:
//         "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-1.jpg",
//       name: "Polyscias Fabian",
//       price: "$60.000",
//     },
//     {
//       image:
//         "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-2.jpg",
//       name: "Polyscias Fabian",
//       price: "$70.000",
//     },
//     {
//       image:
//         "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-3.jpg",
//       name: "Polyscias Fabian",
//       price: "$80.000",
//     },
//     {
//       image:
//         "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-4.jpg",
//       name: "Polyscias Fabian",
//       price: "$90.000",
//     },
//   ]);

//   let dataProducts = stateProducts.map((data, index) => (
//     <tr key={index}>
//       <th scope="row">{index + 1}</th>
//       <td>
//         <img src={data.image}></img>
//       </td>
//       <td>{data.name}</td>
//       <td>{data.price}</td>
//       <td>
//         <div className="btn-group" role="group" aria-label="Basic example">
//           <button type="button" className="btn btn-primary">
//             Edit
//           </button>
//           <button type="button" className="btn btn-danger">
//             Delete
//           </button>
//         </div>
//       </td>
//     </tr>
//   ));

//   return (
//     <table className="table">
//       <thead>
//         <tr>
//           <th scope="col">#</th>
//           <th scope="col">Images</th>
//           <th scope="col">Name</th>
//           <th scope="col">Price</th>
//           <th scope="col">Action</th>
//         </tr>
//       </thead>
//       <tbody>{dataProducts}</tbody>
//     </table>
//   );
// };

// export default ListProducts;

import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";

function Image() {
  return (
    <div>
      <img src="http://landing.engotheme.com/html/hamadryad/demo/images/products/product-1.jpg"></img>
    </div>
  );
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
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "image",
      headerName: "Image",
      width: 200,
      // renderCell: (params) => {
      //   return <Image></Image>;
      // },
    },
    { field: "name", headerName: "Name", width: 200 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "action",
      headerName: "Action",
      disableClickEventBubbling: true,
      width: 300,
      renderCell: (params) => {
        return <ButtonGroup></ButtonGroup>;
      },
    },
  ];

  const [stateProducts, setStateProduct] = useState([
    {
      id: "1",
      image: (
        <img src="http://landing.engotheme.com/html/hamadryad/demo/images/products/product-1.jpg"></img>
      ),
      name: "Polyscias Fabian 1",
      price: "$60.000",
    },
    {
      id: "2",
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-2.jpg",
      name: "Polyscias Fabian 2",
      price: "$70.000",
    },
    {
      id: "3",
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-3.jpg",
      name: "Polyscias Fabian 3",
      price: "$80.000",
    },
    {
      id: "4",
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-4.jpg",
      name: "Polyscias Fabian 4",
      price: "$90.000",
    },
    {
      id: "5",
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-4.jpg",
      name: "Polyscias Fabian 4",
      price: "$90.000",
    },
    {
      id: "6",
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-4.jpg",
      name: "Polyscias Fabian 4",
      price: "$90.000",
    },
    {
      id: "7",
      image:
        "http://landing.engotheme.com/html/hamadryad/demo/images/products/product-4.jpg",
      name: "Polyscias Fabian 4",
      price: "$90.000",
    },
  ]);

  const rows = stateProducts;

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
