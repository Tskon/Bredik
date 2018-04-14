import axios from 'axios';

export function getSolutions(categoryStr) {
  return {
    type: 'GET_SOLUTIONS',
    payload: axios.post('/get/solutions/' + categoryStr)
  }
}