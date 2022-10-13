import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import rootReducer from "./rootReducer";

export const store = createStore(rootReducer);