import { all } from "redux-saga/effects";

import entitySaga from "./entity/saga";

const rootSaga = function* () {
    yield all([...entitySaga]);
};

export default rootSaga;
