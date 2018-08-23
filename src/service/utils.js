export default class utils {

static post(url, cb = ()=>{}) {
  const myInit = {
    method: 'POST'
  };
  fetch(url, myInit).then(resp => {
    return resp.json();
  }).then(resp => {
    if (typeof(cb) === 'function') cb(resp);
  });
}

static get(url, cb = ()=>{}) {
  const myInit = {
    method: 'GET'
  };
  fetch(url, myInit).then(resp => {
    return resp.json();
  }).then(resp => {
    if (typeof(cb) === 'function') cb(resp);
  });
}

}