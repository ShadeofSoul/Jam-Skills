import {
  AUTH_USER,
  REGISTER_USER,
  LOGOUT_USER,
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
    default:
      return state;
  }
};
