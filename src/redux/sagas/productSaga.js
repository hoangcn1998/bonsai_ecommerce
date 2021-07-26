import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import url from "../../urlApi";
import { DELETE_PRODUCTS, GET_PRODUCTS } from "../actions-constants/products-constant";
import actions from "../actions/index";


const { productActions } = actions;
const { getProductsSc, getProductsEr, setDisplay } = productActions;

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, fetchProduct);
  yield takeEvery(DELETE_PRODUCTS, deleteItemProducts)
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

function* deleteItemProducts(data) {
  console.log(data)
  try {
    let res = yield call(deleteProducts, { data })
    console.log(res)
  } catch (error) {
    console.error()
  }
}

function deleteProducts(data) {
  console.log(data.data.payload)
  return axios.delete(`${url}products/${data.data.payload}`)
}

export default productSaga;
