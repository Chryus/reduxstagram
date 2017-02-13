const posts = (state=[], action) => {
  console.log(state, action);
  const i = action.index;
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const post = state[i];
      post.likes + 1;
      return [
        ...state.slice(0, i), // everything before index
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i+1) // everything after index
      ]
    default:
      return state;
  }
}

export default posts;