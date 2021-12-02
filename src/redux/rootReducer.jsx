import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { testReducer } from "./reducers/testReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  test: testReducer,
});
