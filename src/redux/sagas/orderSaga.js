import { put, takeEvery, call } from "@redux-saga/core/effects";
import axios from "axios";
import { ADD_ORDER } from "../actions-constants/order-constant";
import actions from "../actions/index";
import url from "../../urlApi"


const { orderActions } = actions;
const { addOrderSc, addOrderEr } = orderActions;

function* orderSaga() {
    yield takeEvery(ADD_ORDER, orderStart);
}

function* orderStart(data) {
    console.log(data.payload)
    const { fullname, deleveryAddress, orderNotes, phoneNumber, cart } = data.payload
    try {
        let res = yield call(order, { fullname, deleveryAddress, orderNotes, phoneNumber, cart });
        console.log('res', res)
        if (parseInt(res.status) === 201) {
            yield put(addOrderSc(res.data));
        }
    } catch (error) {
        console.log(`error message--->`, error);
        yield put(addOrderEr(error));
    }
}

function order(data) {
    return axios.post(`${url}orders`, data)
}

export default orderSaga;
