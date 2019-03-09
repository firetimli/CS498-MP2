import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import PropTypes from 'prop-types'

class Header extends React.Component {
  render () {
    return (
      <header className = "HeaderStyle">
        <h1>IMDP TOP 250 MOVIE DIRECTORY</h1>
        <Link  className="linkStyle"   onClick={this.props.EmptyList} to="/" >Search</Link>
        <Link className="linkStyle"  onClick={this.props.EmptyList} to="/gallery" >Gallery</Link>
      </header>

    )
  }
}

export default Header;
