const ASSET_LIST = "assetList/ASSET_LIST";

export const setAssetList = (assetList) => ({ type: ASSET_LIST, assetList });

const initialState = [];

const assetList = (state = initialState, action) => {
  switch (action.type) {
    case ASSET_LIST:
      state = action.assetList;
      return state;
    default:
      return state;
  }
};

export default assetList;
