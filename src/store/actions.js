import { DELETE_ITEM, EDIT_ITEM, GET_ITEMS_SUCCESS } from "./constants";

export const getItemsSuccess = (data) => ({
    type: GET_ITEMS_SUCCESS,
    payload: {
        data,
    },
});

export const deleteItem = (id) => ({
    type: DELETE_ITEM,
    payload: {
        id,
    },
});

export const editItem = (id, newName) => ({
    type: EDIT_ITEM,
    payload: {
        id,
        newName,
    },
});
