import { RootReducers } from "./RootReducers";

import { createStore } from "redux";

export const store = createStore(
  RootReducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
