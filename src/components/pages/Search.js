import React from 'react'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'
import { Search as SearchCss} from './Search.module.scss'

class Search extends React.Component {
  state = {
    title: '',
    Orderby: '0'
  };


  onSubmit = (e)=> {
    e.preventDefault();

    this.props.SearchMovie(this.state.title,this.state.Orderby);
  }

  SearchChange(e){
    this.setState({title: e.target.value});
  }

  OrderChange(e){
    this.setState({Orderby: e.target.value});
  }


  render () {
    return(
      <div className = {SearchCss}>
        <form className = "onSubmit" onSubmit = {this.onSubmit}>
          <div className="ui large icon input">
            <input
              onChange = {this.SearchChange.bind(this)}
              type="text"
              placeholder="Search..."
              name="title"
            />
            <select onChange={this.OrderChange.bind(this)}>
                <option value="0">popularity↓</option>
                <option value="1">popularity↑</option>
                <option value="2">release_data↓</option>
                <option value="3">release_data↑</option>
            </select>
            <button className="ui button" >Search</button>
          </div>



        </form>
      </div>
    )
  }
}

export default Search;
