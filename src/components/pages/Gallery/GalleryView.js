import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import GalleryList from './GalleryList'
import {Content} from './Gallery.module.scss'

class GalleryView extends React.Component {
  render () {
    return(
      <React.Fragment>
        <NavBar ShowGallery = {this.props.ShowGallery}/>
        <div className={Content}>
          <GalleryList movielist={this.props.movielist} GotoMovie = {this.props.GotoMovie}/>
        </div>
      </React.Fragment>
    )

  }
}

export default GalleryView;
