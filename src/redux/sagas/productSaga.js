import { put, takeEvery, call } from "@redux-saga/core/effects";
import axios from "axios";
import { GET_PRODUCTS, GET_PRODUCTS_START } from "../actions-constants/products-constant";
import actions from "../actions/index";
import url from "../../urlApi"


const { productActions } = actions;
const { getProductsSc, getProductsEr } = productActions;

function* productSaga() {
    yield takeEvery(GET_PRODUCTS, fetchProduct);
    yield takeEvery(GET_PRODUCTS_START, loading)
}

function* fetchProduct() {
    try {
        let res = yield call(getAllproduct);
        if (res.status == '200') {
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

function loading() {

}


export default productSaga;
