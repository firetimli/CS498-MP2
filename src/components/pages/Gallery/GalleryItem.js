import React from 'react'
import PropTypes from 'prop-types'
import {ItemContainer} from './GalleryItem.module.scss'
import { Link } from 'react-router-dom';


class GalleryItem extends React.Component {
  render () {
    const idx = this.props.idx;
    const poster_url = 'https://image.tmdb.org/t/p/w500'+this.props.movie.poster_path;
    const title = this.props.movie.title;
    return(
      <div className={ItemContainer} >
          <Link to="/movie" onClick = {this.props.GotoMovie.bind(this,idx)}>
            <img src={poster_url}/>
          </Link>
      </div>
    )
  }
}

export default GalleryItem;
