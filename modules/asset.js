const ASSETINFO = "album/ASSETINFO";

export const setAssetInfo = (asset) => ({ type: ASSETINFO, asset });

const initialState = {};

const asset = (state = initialState, action) => {
  switch (action.type) {
    case ASSETINFO:
      state = action.asset;
      return state;
    default:
      return state;
  }
};

export default asset;
