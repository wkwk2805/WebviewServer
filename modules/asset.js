const ASSET_INFO = "asset/ASSET_INFO";

export const setAssetInfo = (asset) => ({ type: ASSET_INFO, asset });

const initialState = {};

const asset = (state = initialState, action) => {
  switch (action.type) {
    case ASSET_INFO:
      state = action.asset;
      return state;
    default:
      return state;
  }
};

export default asset;
