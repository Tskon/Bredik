const initialUserState = {};

export function article(state = initialUserState, action = {}) {
  switch (action.type) {
    case 'GET_ARTICLES_LIST_SUCCESS':
      return {...state, articlesList: action.data};
    default:
      return state;
  }
}