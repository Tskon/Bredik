export function getSolutions(state = {solutions: [], isFulfilled: false}, action) {

  switch (action.type) {

    case 'GET_SOLUTIONS_PENDING': {
      break;
    }

    case 'GET_SOLUTIONS_FULFILLED': {
      state = {
        ...state,
        isFulfilled: true,
        solutions: action.payload.data,
        htmlCssJs: action.payload.data.filter((item) => {
          return item['section-id'] === 1
        }),
        javascript: action.payload.data.filter((item) => {
          return item['section-id'] === 2
        }),
        wordpress: action.payload.data.filter((item) => {
          return item['section-id'] === 3
        }),
        loomla: action.payload.data.filter((item) => {
          return item['section-id'] === 4
        }),
        drupal: action.payload.data.filter((item) => {
          return item['section-id'] === 5
        })
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