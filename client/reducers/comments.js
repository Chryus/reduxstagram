const postComments = (state=[], action) => {
  console.log('STATE', state);
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the existing state plus new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return state;
    default:
      return state;
  }
  return state;
}

const comments = (state=[], action) => {
  console.log('STATE', state);
  console.log('ACTION', action);
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;