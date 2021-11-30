import {
  AUTH_USER,
  REGISTER_USER,
  LOGOUT_USER,
  UPDATE_USER_PHOTO,
  GET_MY_INDEX_TABLE,
  GET_DOCS_TABLE,
  AUTH_ERROR,
  GET_TESTS,
} from "../helpers";

const initialState = {
  user: null,
  success: false,
  errorMessage: null,
  token: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return { ...state, ...action.payload };
    case AUTH_USER:
      return { ...state, ...action.payload };
    case REGISTER_USER:
      return { ...state, ...action.payload };
    case LOGOUT_USER:
      return initialState;
    case GET_TESTS:
      return { ...state, ...action.payload };
    case UPDATE_USER_PHOTO:
      return { ...state, user: { ...state.user, photo: action.payload } };
    case GET_MY_INDEX_TABLE:
      return { ...state, myIndexes: action.payload };
    case GET_DOCS_TABLE:
      return { ...state, docs: action.payload };
    default:
      return state;
  }
};
