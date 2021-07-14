import React, { useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../../../redux/actions/productAction";

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

function ListProducts({ products }) {
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

  const dispatch = useDispatch();

  const dataProducts = useSelector((state) => state.products.data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);


  const formatData = dataProducts.map((item) => {
    const { categoryId, name, bigPicture, price, id } = item;
    return {
      id,
      categoryId: `category${categoryId}`,
      bigPicture,
      name,
      price,
    };
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={formatData}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
}

export default ListProducts;

// function mapStateToProps(state) {
//   const {
//     products: { data },
//   } = state;
//   return { products: data };
// }

// export default connect(mapStateToProps)(ListProducts);
