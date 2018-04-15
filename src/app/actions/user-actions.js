import axios from 'axios';

export function getUser(){
  return {
    type: 'GET_USER',
    payload: axios.post('/get/user')
  }
}