export default (state, action) => {
  if (state === undefined) {
    return null;
  }
  // handle action--------------check type of action
  switch (action.type) {
    case 'SELECT_CITY':
      return action.payload;
    default:
      return state;
  }
};
