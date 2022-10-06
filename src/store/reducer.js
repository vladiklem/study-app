import { DELETE_ITEM, EDIT_ITEM, GET_ITEMS_SUCCESS } from "./constants";

export const reducer = (state, action) => {
    switch (action.type) {
        case GET_ITEMS_SUCCESS:
            return ({
                ...state,
                data: action.payload.data,
            });
        case DELETE_ITEM:
            return ({
                ...state,
                data: state.data.filter(),
            });
        case EDIT_ITEM:
            return ({
                ...state,
                data: state.data.map(),
            })
    }
}