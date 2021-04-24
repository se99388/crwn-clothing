import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import combineReducers from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const middelwares = [thunk];
if (process.env.NODE_ENV === "development") {
  // middelwares.push(logger)
}
export const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middelwares))
);
export const persistor = persistStore(store);
// export default { store, persistor };
