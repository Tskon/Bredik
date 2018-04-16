import React from 'react';

import Preview from '~/app/components/content/solution-page/preview';

export default class SolutionsList extends React.Component {

  render() {

    let previews;
    if (this.props.solutions){
      previews = this.props.solutions.map((item, i) => {
        return <Preview key={i} data={item}/>
      })
    }

    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className="row">
          {previews || 'empty section'}
        </div>
      </div>
    )
  }
}