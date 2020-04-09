const CONTENT = "content/CONTENT";
const GROUP = "content/GROUP";
const SCOPE = "content/SCOPE";

export const setContent = (content) => ({ type: CONTENT, content });
export const setGroups = (groups) => ({ type: GROUP, groups });
export const setScope = (scope) => ({ type: SCOPE, scope });

const initialState = {};

const post = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT:
      state.content = action.content;
      return state;
    case GROUP:
      state.groups = action.groups;
      return state;
    case SCOPE:
      state.scope = action.scope;
      return state;
    default:
      return state;
  }
};

export default post;
