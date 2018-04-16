import React from 'react';
import {Link} from 'react-router-dom';

export default class Preview extends React.Component {
  render() {
    let content;
    console.log(this.props.data)
    if (this.props.data) {
      content = (
        <div>
          <p>{this.props.data.title}</p>
          <p>{this.props.data.description}</p>
        </div>
      )
    }

    return (
      <div className="col-sm-6 col-md-4 col-lg-3 ">
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <img src="img/cube.jpg" className="card-img-top img-responsive" alt="Responsive image"/>
            {content}
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/demo/${this.props.data['section-id']}/${this.props.data.id}`}>
                <button type="button" className="btn btn-sm btn-outline-secondary">ДЕМО</button>
              </Link>
            </div>
            <small className="text-muted">JavaScript</small>
          </div>
        </div>
      </div>

    )
  }
}