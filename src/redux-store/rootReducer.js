import { combineReducers } from "redux";

import entityReducer from "./entity/reducer";

const rootReducer = combineReducers({
    entity: entityReducer,
});

export default rootReducer;