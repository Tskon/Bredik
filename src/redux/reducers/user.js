const initialUserState = {};

export function user(state = initialUserState, action = {}) {
  switch (action.type) {
    case 'SOME_TYPE':
      return {...state};


    default:
      return state;
  }
}