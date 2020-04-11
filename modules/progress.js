const PROGRESS_STATE = "progress/PROGRESS";

export const setProgress = (percent) => ({ type: PROGRESS_STATE, percent });

const initialState = 0;

const progress = (state = initialState, action) => {
  switch (action.type) {
    case PROGRESS_STATE:
      state = action.percent;
      return state;
    default:
      return state;
  }
};

export default progress;
