import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

/** import des reducers */
import shops from "./modules/shop/reducer";

const store = createStore(
  combineReducers({
    // reducers go here
    shops
  }),
  applyMiddleware(logger)
);
export { store };
