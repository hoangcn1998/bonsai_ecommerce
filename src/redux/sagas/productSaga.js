import { put, takeEvery, call } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_PRODUCTS } from "../actions-constants/products-constant";
import actions from "../actions/index";

const { productActions } = actions;
const { getProductsSc } = productActions;

function* productSaga() {
    yield  takeEvery(GET_PRODUCTS, fetchProduct);
}

function* fetchProduct() {
    try {
        let res = yield call(getAllproduct);
        if(res.status == '200') {
             yield put(getProductsSc(res.data));
        }
    }catch(error) {
        console.error();
    }
}

function getAllproduct() {
    return axios.get("http://localhost:3000/api/products")
}


export default productSaga;
