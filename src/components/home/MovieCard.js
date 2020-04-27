/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <div className="col-md-3 mb-5">
          <div className="card card-body bg-dark text-center h-100">
            <img src={movie.Poster} alt="Movie Cover" className="w-100 mb-2" />
            <h5 className="text-light card-title">
              {movie.Title} - {movie.Year}
            </h5>
            <Link to={'/movies/' + movie.imdbID} className="btn btn-primary">
              Movie Details
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>  
      </>
    )
  }
}

export default MovieCard
