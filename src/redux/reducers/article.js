const initialUserState = {};

export function article(state = initialUserState, action = {}) {
  switch (action.type) {
    case 'GET_ARTICLES_LIST_SUCCESS':
      console.log(action.data);
      return {...state};


    default:
      return state;
  }
}