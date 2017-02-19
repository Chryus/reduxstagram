const posts = (state=[], action) => {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
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