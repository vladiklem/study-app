import {
  DELETE_ITEM,
  DUPLICATE_ITEM,
  GET_DATA_SUCCESS,
  SAVE_EDITED_ITEM,
} from "./constants";

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case GET_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload.data.map((item, index) => ({
          ...item,
          id: item.created + index,
        })),
      };
    case DELETE_ITEM:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };
    case DUPLICATE_ITEM:
      return {
        ...state,
        data: [
          ...state.data.slice(0, action.payload.index),
          { ...action.payload.item, id: Date.now() },
          ...state.data.slice(-(state.data.length - action.payload.index)),
        ],
      };
    case SAVE_EDITED_ITEM:
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.name }
            : item
        ),
      };
  }
};
