const ALBUMINFO = "album/ALBUMINFO";

export const setAlbumInfo = (album) => ({ type: ALBUMINFO, album });

const initialState = {};

const album = (state = initialState, action) => {
  switch (action.type) {
    case ALBUMINFO:
      state = action.album;
      return state;
    default:
      return state;
  }
};

export default album;
