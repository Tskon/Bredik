import axios from 'axios';

export function getSolutions() {
  return {
    type: 'GET_SOLUTIONS',
    payload: axios.post('/get/solutions/').then(console.log('nice'))
  }
}