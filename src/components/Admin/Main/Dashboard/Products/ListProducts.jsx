import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProductsStart } from "../../../../../redux/actions/productAction";
import ConfirmationDialog from "../../../../common/ConfirmationDialog/ConfirmationDialog";
import React, { useEffect, useState } from "react";

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
  const [sortModel, setSortModel] = React.useState([
    {
      field: 'createdAt',
      sort: 'desc',
    },
  ]); 
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

  const categoryName = (categoryId) => {
    switch (categoryId) {
      case 1:
          return "Cactus"
        break;
      case 2:
        return "Succulent"
        break;
      case 3:
        return "Flower"
        break;
      case 4:
        return "Feng Shui Tree"
        break;
    
      default:
        break;
    }
  }

  const formatData = dataProducts.map((item) => {

      const { categoryId, name, bigPicture, price, id, createdAt } = item;
      return {
        id,
        categoryId: categoryName(categoryId),
        bigPicture,
        name,
        price,
        createdAt: new Date(createdAt).toISOString()
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
    <div style={{ height: "70vh", width: "100%" }}>
      <DataGrid
        rows={formatData}
        columns={columns}
        pageSize={10}
        sortModel={sortModel}
      />
      <ConfirmationDialog open={openConfirm} onClose={closeConfirm} onOk={handleDelete} title={'product'}/>
    </div>
  );
}

export default ListProducts;

