import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunkMiddleware from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

export const store = createStore(rootReducer, middlewareEnhancer);

// ===============================================================================================
