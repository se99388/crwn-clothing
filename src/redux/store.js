import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga'
import combineReducers from "./root-reducer";

const sagaMiddlewre = createSagaMiddleware();
const middelwares = [sagaMiddlewre];
if (process.env.NODE_ENV === "development") {
  middelwares.push(logger)
}
export const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(...middelwares))
);

sagaMiddlewre.run(rootSaga);

export const persistor = persistStore(store);
// export default { store, persistor };
