import React from 'react'
import PropTypes from 'prop-types'
import MovieItem from './MovieItem'

class MovieList extends React.Component {
  render () {
    return (
      this.props.movielist.map((movie, idx)=>(
      <MovieItem key={movie.id} movie={movie} idx={idx} GotoMovie = {this.props.GotoMovie}/>
    ))
  )
  }
}

export default MovieList;
