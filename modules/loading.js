const SHOW_LOADING = "assetList/SHOW_LOADING";
const HIDE_LOADING = "assetList/HIDE_LOADING";

export const showLoading = () => ({ type: SHOW_LOADING });
export const hideLoading = () => ({ type: HIDE_LOADING });

const initialState = false;

const loading = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      state = false;
      return state;
    case HIDE_LOADING:
      state = false;
      return state;
    default:
      return state;
  }
};

export default loading;
