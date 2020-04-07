const ASSETLIST = "album/ASSETLIST";

export const setAssetList = (assetList) => ({ type: ASSETLIST, assetList });

const initialState = [];

const assetList = (state = initialState, action) => {
  switch (action.type) {
    case ASSETLIST:
      state = action.assetList;
      return state;
    default:
      return state;
  }
};

export default assetList;
