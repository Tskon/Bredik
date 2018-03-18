export function appState (state = {}, action){
  switch (action.type){
    case 'SET_STATE': {
      state = {...state, appState: action.payload};
      break;
    }
  }
  return state;
}