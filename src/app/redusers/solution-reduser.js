export function getSolutions(state = {solutions: [], isFulfilled: false}, action) {

  switch (action.type) {

    case 'GET_SOLUTIONS_PENDING': {
      break;
    }

    case 'GET_SOLUTIONS_FULFILLED': {
      state = {
        ...state,
        isFulfilled: true,
        solutions: action.payload
      };
      break;
    }

    case 'GET_SOLUTIONS_REJECTED': {
      state = {
        ...state,
        isFulfilled: false
      }
    }
  }

  return state;
}