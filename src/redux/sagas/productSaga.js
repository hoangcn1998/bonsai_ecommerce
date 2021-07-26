import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_PRODUCTS, DELETE_PRODUCTS_START } from "../actions-constants/products-constant";
import url from "../../urlApi";
import actions from "../actions/index";


const { productActions } = actions;
const { getProductsSc, getProductsEr, setDisplay,
    deleteProductsSuccess,
    deleteProductsError } = productActions;

function* productSaga() {
    yield takeEvery(GET_PRODUCTS, fetchProduct);
    yield takeEvery(DELETE_PRODUCTS_START, deleteItemProducts)
}

function* fetchProduct() {
  try {
    let res = yield call(getAllproduct);
    yield put(setDisplay("none"));
    if (parseInt(res.status) === 200) {
      yield put(getProductsSc(res.data));
    }
  } catch (error) {
    console.error();
    yield put(getProductsEr(error));
  }
}

function getAllproduct() {
  return axios.get(`${url}products`)
}

function* deleteItemProducts(action) {
    const { payload: productId } = action || {};
    console.log(`productId`, productId)
    try{
        let res = yield call(deleteProducts, {productId})
        console.log(res)
        if (parseInt(res.status) === 200) {
            yield put(deleteProductsSuccess(productId));
        }
    }catch (error) {
        console.log(`error message--->`, error);
        yield put(deleteProductsError(error));
    }
}

function deleteProducts({productId}) {
      return axios.delete(`${url}products/${productId}` )
}

export default productSaga;
