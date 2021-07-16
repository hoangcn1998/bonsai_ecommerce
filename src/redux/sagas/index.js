import productActionWatcher from './productSaga';
import authActionWatcher from './authSaga';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        productActionWatcher(),
        authActionWatcher()
    ])
}

