import { compose, createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), composeEnhancers())
);

// ===============================================================================================

// import { createStore, applyMiddleware, combineReducers, compose } from "redux";
// import thunk from "redux-thunk";
// import reduxLogger from "redux-logger";
// import rootReducers from "./modules";

// const configureStore = (reducers = {}, preloadedState = {}, middlewares = []) =>
//   createStore(
//     combineReducers({ ...rootReducers, ...reducers }),
//     preloadedState,
//     compose(
//       applyMiddleware(...middlewares, thunk, reduxLogger),
//       window.__REDUX_DEVTOOLS_EXTENTION__ &&
//         window.__REDUX_DEVTOOLS_EXTENTION__()
//     )
//   );

// export default configureStore;
