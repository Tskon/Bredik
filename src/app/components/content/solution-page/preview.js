import React from 'react';
import {Link} from 'react-router-dom';

export default class SolutionPreview extends React.Component {
  render() {
    console.log(this.props.data)
    return (
      <div className="col-sm-6 col-md-4 col-lg-3 ">
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <img src="img/cube.jpg" className="card-img-top img-responsive" alt="Responsive image"/>
            <p className="card-text">Адаптивный слайдер на чистом JS
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to="/demo">
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