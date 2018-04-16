import React from 'react';

import Preview from '~/app/components/content/solution-page/preview';

export default class HtmlCss extends React.Component {

  render() {
    console.log('html', this.props.solutions);
    let previews = [];
    if (this.props.solutions){
      previews = this.props.solutions.map((item, i) => {
        <Preview id={i} data={item}/>
      })
    }

    return (
      <div>
        <h1>HTML + CSS модули</h1>
        <div className="row">
          {previews}
        </div>
      </div>
    )
  }
}