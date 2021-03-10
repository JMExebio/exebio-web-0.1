import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/rood-reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import trunk from "redux-thunk";

const store = createStore(
  rootReducers,
  composeWithDevTools(
    applyMiddleware(trunk),
  )
);
export default store;
