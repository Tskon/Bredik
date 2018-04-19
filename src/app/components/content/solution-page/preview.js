import React from 'react';
import {Link} from 'react-router-dom';

export default class Preview extends React.Component {
  render() {
    let content;
    if (this.props.data) {
      content = (
        <div className="card__title-wrapper">
          <h3 className="card__title">{this.props.data.title}</h3>
          <p className="card__description">{this.props.data.description}</p>
        </div>
      )
    }

    return (
      <div className="card">
        <img src="/img/cube.jpg" className="card__image" alt="solution image"/>
        {content}
          <Link className="card__link" to={`/demo/${this.props.data['section-id']}/${this.props.data.id}`}>
            ДЕМО
          </Link>
        <p className="card__dev-stack">HTML/CSS/JavaScript</p>
      </div>
    )
  }
}