export function getArticlesList() {

  fetch('/artticle-get-list').then(resp => {
    const contentType = resp.headers.get("content-type");
    // if(contentType && contentType.includes("application/json")) {
      return resp.json();
    // }
    throw new TypeError("Oops, we haven't got JSON!");
  }).then(json => {
    console.log(JSON.parse(json))
  });

  return {
    type: "GET_ARTICLES_LIST"
  }
}