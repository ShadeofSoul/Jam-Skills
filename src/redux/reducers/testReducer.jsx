import { PUT_HOL, PUT_USK, PUT_GATB } from "../helpers";

const initialState = {
  hol: null,
  usk: null,
  gatb: null,
};

export const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_GATB:
      return { ...state, ...action.payload };
    case PUT_HOL:
      return { ...state, ...action.payload };
    case PUT_USK:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
