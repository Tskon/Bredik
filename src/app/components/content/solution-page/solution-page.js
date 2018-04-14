import React from 'react';

export default class SolutionPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Solution name</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci cum enim maiores omnis rem tenetur? Dicta
          dolores ducimus excepturi explicabo facilis hic inventore mollitia natus nemo placeat, porro ut vitae.</p>
        <div className="codepen-wrapper">
          <iframe scrolling='no' title='Some pen'
                  src='//codepen.io/TsKon/embed/EEzBbZ/?height=235&theme-id=0&default-tab=css,result&embed-version=2'
                  frameBorder='no' allowFullScreen='true'/>
        </div>
      </div>
    )
  }
}