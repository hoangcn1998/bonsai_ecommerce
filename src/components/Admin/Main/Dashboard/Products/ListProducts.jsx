import React, { useEffect, useState  } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProductsStart } from "../../../../../redux/actions/productAction";
import ConfirmationDialog from "../../../Common/ConfirmationDialog/ConfirmationDialog";

function Image(image) {
  let style = {
    width: "50px",
    height: "70px",
  };

  return <img style={style} alt={image.src} src={image.src}></img>;
}

function ButtonGroup({ params, openConfirmModal }) {
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      <button type="button" className="btn btn-primary">
        Edit
      </button>
      <button type="button" className="btn btn-danger" onClick={() => openConfirmModal(params)}>
        Delete
      </button>
    </div>
  );
}

function ListProducts() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
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
        return <ButtonGroup openConfirmModal={openConfirmModal} params={params}  ></ButtonGroup>;
      },
    },
  ];


  const dispatch = useDispatch();
  const dataProducts = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.isLoading);

  console.log(`isLoading`, isLoading)
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const formatData = dataProducts.map((item) => {
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
  
  // ----------------- delete Products-------------------

  const openConfirmModal = (params) => {
    setOpenConfirm(true);
    setSelectedProductId(params.id);
  }

  const closeConfirm = () => {
    setOpenConfirm(false);
  }

  const handleDelete = () => {
    dispatch(deleteProductsStart(selectedProductId));
    closeConfirm();
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={formatData}
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
      <ConfirmationDialog open={openConfirm} onClose={closeConfirm} onOk={handleDelete}/>
    </div>
  );
}

export default ListProducts;

