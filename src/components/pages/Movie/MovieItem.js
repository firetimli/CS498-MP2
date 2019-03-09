import React from 'react'
import {ItemContainer, ItemImg, ItemContent} from "./MovieItem.module.scss"
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'

class MovieItem extends React.Component {

  render () {
    const idx = this.props.idx;
    const poster_url = 'https://image.tmdb.org/t/p/w500'+this.props.movie.poster_path;
    const title = this.props.movie.title;
    const popularity = this.props.movie.popularity;
    const release_date = this.props.movie.release_date;

    return(
      <div className={ItemContainer} >
        <div className={ItemImg}>
          <img src={poster_url}/>
        </div>
        <div className={ItemContent}>
            <Link to="/movie" onClick = {this.props.GotoMovie.bind(this,idx)}><h4 className="header">{title}</h4></Link>
            <p>popularity:{popularity}</p>
            <p>{release_date}</p>
        </div>
      </div>
    )
  }
}

export default MovieItem;
