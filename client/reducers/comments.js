const comments = (state=[], action) => {
  console.log(state, action);
  switch (action.type) {
    case 'ADD_COMMENT':
    default:
      return state;
  }
}

export default comments;