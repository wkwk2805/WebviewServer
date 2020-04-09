const PLAY = "play/PLAY";
const STOP = "play/STOP";

export const play = () => ({ type: PLAY });
export const stop = () => ({ type: STOP });

const initialState = false;

const video = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      state = true;
      return state;
    case STOP:
      state = false;
      return state;
    default:
      return state;
  }
};

export default video;
