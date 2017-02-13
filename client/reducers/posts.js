const posts = (state=[], action) => {
  console.log(state, action);
  switch (action.type) {
    case 'INCREMENT_LIKES':
      return state[action.index].likes + 1;
    default:
      return state;
  }
}

export default posts;