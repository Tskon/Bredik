import axios from 'axios';

export function setAppState(){
  axios.post('/get/state')
    .then(response => {
      return{
        type: 'SET_STATE',
        payload: response.parseJSON
      }
    });
}