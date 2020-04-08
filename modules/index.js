import { combineReducers } from "redux";
import album from "./album";
import asset from "./asset";
import assetList from "./assetList";
import selectedAssetList from "./selectedAssetList";
import loading from "./loading";

const rootReducer = combineReducers({
  album,
  asset,
  assetList,
  selectedAssetList,
  loading,
});

export default rootReducer;
