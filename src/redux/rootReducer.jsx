// import { accountDetailsReducer } from "./Reducers/accountDetailsReducer";
// import { financeReducer } from "./Reducers/financeReducer";
// import { indexReducer } from "./Reducers/indexReducer";

import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
