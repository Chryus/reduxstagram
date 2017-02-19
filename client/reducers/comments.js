const postComments = (state=[], action) => {
  console.log('STATE', state);
  console.log('ACTION', action);
  switch(action.type) {
    case 'ADD_COMMENT':
      // return the existing state plus new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // return new state w/o deleted comment
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
  return state;
}

const comments = (state=[], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;