import utils from 'service/utils';

export function getArticlesList() {
  return (dispatch) => {
    utils.post('/article-get-list', (resp) => {
      dispatch(getArticlesListSuccess(resp))
    });
  }

}

function getArticlesListSuccess(data) {
  return {
    type: "GET_ARTICLES_LIST",
    data
  }
}