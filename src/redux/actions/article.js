export function getArticlesList() {
  const myInit = {
    method: 'POST',
    cache: 'default'
  };

  fetch('/article-get-list', myInit).then(resp => {
    return resp.json();

  }).then(json => {
    console.log(json)
  });

  return {
    type: "GET_ARTICLES_LIST"
  }
}