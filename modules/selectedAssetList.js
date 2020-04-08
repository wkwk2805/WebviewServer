const ADD_SELECTED_ASSET = "selectedAssetList/ADD_SELECTED_ASSET";
const REMOVE_SELECTED_ASSET = "selectedAssetList/REMOVE_SELECTED_ASSET";
const REMOVE_ALL_SELECTED_ASSET = "selectedAssetList/REMOVE_ALL_SELECTED_ASSET";

export const addSelectedAsset = (selectedAsset) => ({
  type: ADD_SELECTED_ASSET,
  selectedAsset,
});

export const removeSelectedAsset = (selectedAsset) => ({
  type: REMOVE_SELECTED_ASSET,
  selectedAsset,
});

export const removeAllSelectedAsset = () => ({
  type: REMOVE_ALL_SELECTED_ASSET,
});

const initialState = [];

const selectedAssetList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SELECTED_ASSET:
      state = state.concat(action.selectedAsset);
      return state;
    case REMOVE_SELECTED_ASSET:
      state = state.filter((e) => e.id !== action.selectedAsset.id);
      return state;
    case REMOVE_ALL_SELECTED_ASSET:
      state = [];
      return state;
    default:
      return state;
  }
};

export default selectedAssetList;
