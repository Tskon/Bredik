export function getUser(state = {user: {}, isFulfilled: false}, action) {
  switch (action.type) {
    case 'GET_USER_PENDING': {
      break;
    }
    case 'GET_USER_FULFILLED': {
      state = {...state, user: action.payload.data, isFulfilled: true};
      break;
    }
  }
  return state;
}