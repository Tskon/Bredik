import axios from 'axios';

export function setAppState(){
  console.log(window.location.hash.slice(1));
    return {
          type: 'SET_STATE',
          payload: {
            user: null,
            reqUrl: '/wp'
          }
        }
}