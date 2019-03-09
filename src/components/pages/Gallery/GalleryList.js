import React from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'

class GalleryList extends React.Component {
  render () {
    return (
      this.props.movielist.map((movie, idx)=>(
      <GalleryItem key={movie.id} movie={movie} idx={idx} GotoMovie = {this.props.GotoMovie}/>
    ))
  )
  }
}

export default GalleryList;
