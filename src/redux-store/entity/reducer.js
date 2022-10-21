import {
  DELETE_ITEM,
  DUPLICATE_ITEM,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  SAVE_EDITED_ITEM,
} from "./constants";

import { FETCH_STATUSES } from "../../constants/index";

const initialState = {
  characters: [],
  status: FETCH_STATUSES.IDLE,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_REQUEST:
      return {
        ...state,
        status: FETCH_STATUSES.REQUEST,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        status: FETCH_STATUSES.SUCCESS,
        characters: action.payload.data.map((item, index) => ({
          ...item,
          id: item.created + index,
        })),
      };

    case DELETE_ITEM:
      return {
        ...state,
        characters: state.data.filter((item) => item.id !== action.payload.id),
      };
    case DUPLICATE_ITEM:
      return {
        ...state,
        characters: [
          ...state.data.slice(0, action.payload.index),
          { ...action.payload.item, id: Date.now() },
          ...state.data.slice(-(state.data.length - action.payload.index)),
        ],
      };
    case SAVE_EDITED_ITEM:
      return {
        ...state,
        characters: state.data.map((item) =>
          item.id === action.payload.id
            ? { ...item, name: action.payload.name }
            : item
        ),
      };
    default:
      return { ...state };
  }
};

export default reducer;
