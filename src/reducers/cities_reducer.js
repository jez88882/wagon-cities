import { SET_CITIES } from "../actions";

export default (state, action) => {
  if (state === undefined) {
    return [];
  }
  // handle action--------------check type of action
  switch (action.type) {
    case SET_CITIES:
      return action.payload;
    default:
      return state;
  }
};
