import { combineReducers } from "redux";
import album from "./album";
import asset from "./asset";
import assetList from "./assetList";
import selectedAssetList from "./selectedAssetList";
import loading from "./loading";
import remocon from "./remocon";
import post from "./post";
import progress from "./progress";

const rootReducer = combineReducers({
  album,
  asset,
  assetList,
  selectedAssetList,
  loading,
  remocon,
  post,
  progress,
});

export default rootReducer;
