import React from 'react';

export default class SolutionPreview extends React.Component {
  render() {
    return (

          <div className="col-md-4 solution-page-preview">
            <div className="card mb-4 box-shadow">
              <div className="card-body">
                <img src="img/cube.jpg" className="card-img-top img-responsive" alt="Responsive image"></img>
                <p className="card-text">Адаптивный слайдер на чистом JS
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">ДЕМО</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">Скачать</button>
                  </div>
                  <small className="text-muted">JavaScript</small>
                </div>
              </div>
            </div>
          </div>

    )
  }
}