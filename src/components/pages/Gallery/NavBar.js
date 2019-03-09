import React from 'react'
import PropTypes from 'prop-types'
import {NavBarCSS, Button} from './NavBar.module.scss'
import 'semantic-ui-react'
class NavBar extends React.Component {
  render () {
    return(
      <div className={NavBarCSS}>
        <button className="ui primary button" onClick={this.props.ShowGallery.bind(this,"27")}>Horror</button>
        <button className="ui primary button" onClick={this.props.ShowGallery.bind(this,"28")}>Action</button>
        <button className="ui primary button" onClick={this.props.ShowGallery.bind(this,"35")}>Comedy</button>
        <button className="ui primary button" onClick={this.props.ShowGallery.bind(this,"80")}>Crime</button>
        <button className="ui primary button" onClick={this.props.ShowGallery.bind(this,"16")}>Animation</button>
      </div>
    )
  }
}

export default NavBar;
