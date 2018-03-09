import React from 'react';

export default class TopBlock extends React.Component {
  render() {
    return (
      <div className={'top-block'}>
        <nav className="navbar navbar-light bg-light">
          <nav className="nav nav-pills flex-column flex-sm-row">
            <a className="flex-sm-fill text-sm-center nav-link active" href="#">Active</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
            <a className="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
          </nav>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </div>
    )
  }
}