import { combineReducers } from "redux";
import album from "./album";
import asset from "./asset";
import assetList from "./assetList";
import selectedAssetList from "./selectedAssetList";
import loading from "./loading";
import remocon from "./remocon";
import post from "./post";

const rootReducer = combineReducers({
  album,
  asset,
  assetList,
  selectedAssetList,
  loading,
  remocon,
  post,
});

export default rootReducer;
