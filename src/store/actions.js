import { DELETE_ITEM, DUPLICATE_ITEM, GET_DATA_SUCCESS, SAVE_EDITED_ITEM } from "./constants";

export const deleteItemAction = (id) => ({
    type: DELETE_ITEM,
    payload: {
        id,
    },
});

export const duplicateItemAction = ( index, item) => ({
    type: DUPLICATE_ITEM,
    payload: {
        index,
        item,
    },
});

export const saveItemAction = (id, name) => ({
    type: SAVE_EDITED_ITEM,
    payload: {
        id,
        name,
    },
});

export const getDataSuccessAction = (data) => ({
    type: GET_DATA_SUCCESS,
    payload: {
        data,
    },
});