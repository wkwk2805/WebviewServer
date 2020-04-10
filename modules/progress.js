const SHOW_PROGRESS = "progress/PROGRESS";
const PROGRESS_STATE = "progress/PROGRESS";
const HIDE_PROGRESS = "progress/PROGRESS";

export const setPercent = (percent) => ({ type: PROGRESS_STATE, percent });
export const showProgress = () => ({ type: SHOW_PROGRESS });
export const hideProgress = () => ({ type: HIDE_PROGRESS });

const initialState = { visible: false, percent: 0 };

const progress = (state = initialState, action) => {
  switch (action.type) {
    case PROGRESS_STATE:
      state = { visible: true, percent: action.percent };
      return state;
    case SHOW_PROGRESS:
      state = { visible: true };
      return state;
    case HIDE_PROGRESS:
      state = { visible: false };
      return state;
    default:
      return state;
  }
};

export default progress;
