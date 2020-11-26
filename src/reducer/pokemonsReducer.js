import {
  FETCH_BEGIN,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  SET_NEXT_PAGE,
  SET_PREV_PAGE,
} from "./actions";

const pokemonsReducer = (state, action) => {
  switch (action.type) {
    case FETCH_BEGIN:
      return {
        ...state,
        loading: true,
        data: [],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: "Hubo un error",
      };
    case SET_PREV_PAGE:
      return {
        ...state,
        url: action.payload,
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonsReducer;
