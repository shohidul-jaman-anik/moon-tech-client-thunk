import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cartCounter from "./middlewares/cartCounters";
import rootReducer from "./reducers/rooteReducer";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(cartCounter, thunk, logger)));

export default store;
