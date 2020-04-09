import { combineReducers } from "redux";
import album from "./album";
import asset from "./asset";
import assetList from "./assetList";
import selectedAssetList from "./selectedAssetList";
import loading from "./loading";
import remocon from "./remocon";

const rootReducer = combineReducers({
  album,
  asset,
  assetList,
  selectedAssetList,
  loading,
  remocon,
});

export default rootReducer;
