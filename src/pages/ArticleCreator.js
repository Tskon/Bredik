import React from 'react';

class ArticleCreator extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <div>
          <label htmlFor="articleTitle">Название статьи</label>
          <input type="articleTitle"/>
        </div>
        <div>
          <label htmlFor="articleBody">Текст статьи</label>
          <textarea name="articleBody" id="" cols="30" rows="10">
            sdsdsdsd
          </textarea>
        </div>
        <button>отправить</button>
      </form>
    );
  }

  onSubmit(e){
    e.preventDefault();
    console.log('onSubmit')
  }
}

export default ArticleCreator;