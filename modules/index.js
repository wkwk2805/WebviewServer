import { combineReducers } from "redux";
import album from "./album";
import asset from "./asset";
import assetList from "./assetList";

const rootReducer = combineReducers({
  album,
  asset,
  assetList,
});

export default rootReducer;
