import { put, call, takeLatest } from "redux-saga/effects";

import { GET_DATA_REQUEST } from "./constants";

import { CHARACTERS_URL } from "../../constants/index";

import {
    getDataFailureAction,
    getDataSuccessAction
} from "./actions";
import { get$ } from "../../services/fetchService";

function* getDataSaga() {
    try {
        const res = yield call(get$, CHARACTERS_URL);
        const action = res.ok ? getDataSuccessAction(res.data.results) : getDataFailureAction(res.data.error);
        yield put(action);
    } catch (error) {
        yield put(getDataFailureAction(error));
    }
}

const entitySaga = [
    takeLatest(GET_DATA_REQUEST, getDataSaga),
];

export default entitySaga;
