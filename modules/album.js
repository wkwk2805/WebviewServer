const ALBUM_INFO = "album/ALBUM_INFO";

export const setAlbumInfo = (album) => ({ type: ALBUM_INFO, album });

const initialState = {};

const album = (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_INFO:
      state = action.album;
      return state;
    default:
      return state;
  }
};

export default album;
