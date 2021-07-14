import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas/index";
// import productSaga from "./sagas/productSaga";

const sagaMiddleware = createSagaMiddleware();

const Store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default Store;
