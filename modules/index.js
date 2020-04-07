import { combineReducers } from "redux";
import album from "./album";
import asset from "./asset";

const rootReducer = combineReducers({
  album,
  asset,
});

export default rootReducer;
