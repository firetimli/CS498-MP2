import React from 'react'
import PropTypes from 'prop-types'
import { Card, Label } from 'semantic-ui-react'
import { MovieView as MovieViewCss, MovieViewHeader,NavView, ImageContainer } from './MovieView.module.scss'


class MovieView extends React.Component {

  render () {
    const poster_url = 'https://image.tmdb.org/t/p/w500'+this.props.movie.poster_path
    const title = this.props.movie.title;
    const popularity = this.props.movie.popularity;
    const release_date = this.props.movie.release_date;
    const overview = this.props.movie.overview

    return(
      <Card className={MovieViewCss}>
        <Card.Content className="Content">

          <div className={NavView}>
            <div className="ui blue basic button" onClick={this.props.GotoPrev.bind(this)}>
              <i className="left arrow icon"></i>
            </div>
            <div className="ui blue basic button" onClick={this.props.GotoNext.bind(this)}>
              <i className="right arrow icon"></i>
            </div>
          </div>

            <Card.Header className={MovieViewHeader}>
              {title}
            </Card.Header>
            <Card.Meta>
              Popularity: {popularity }
            </Card.Meta>
            <Card.Meta>
              release_date: {release_date}
            </Card.Meta>
            <div className={ImageContainer}>
              <img src={poster_url} alt={``}/>
            </div>
            <Card.Description>{overview}</Card.Description>
      </Card.Content>

    </Card>
    )
  }
}

export default MovieView;
