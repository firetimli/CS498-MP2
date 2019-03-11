import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import _ from 'lodash'
import Header from './components/LayOut/Header';
import Search from './components/pages/Search';
import Gallery from './components/pages/Gallery/GalleryView';
import MovieView from './components/pages/Movie/MovieView';
import MovieList from './components/pages/Movie/MovieList';
import 'semantic-ui-css/semantic.min.css';

import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    base_url:' https://api.themoviedb.org/3/search/movie?api_key=b5dfb26907f0f3639b367a382925d30e&',
    movie_url:'https://api.themoviedb.org/3/movie/',
    tag_url:'https://api.themoviedb.org/3/discover/movie?api_key=b5dfb26907f0f3639b367a382925d30e&language=en-US&',
    title:'',
    limit: 8,
    movielist:[],
    gallerylist:[],
    current_movie_idx:0,
    property:['popularity','popularity','release_date','release_date'],
    order:['desc','asc','desc','asc']
    }


  componentDidMount(){
  }

  SearchMovie(title, Orderby){

    this.state.title = title
    console.log(Orderby)
    axios.get(`${this.state.base_url}query=${title}`).then(
      res =>{
        var results = res.data.results;
        let property = this.state.property[Orderby];
        let order = this.state.order[Orderby];
        results = _.orderBy(results,[property],[order])
        this.setState({movielist: results});
      }

    )
  }

  GotoMovie(idx){
    // axios.get(`${this.state.movie_url}${id}?api_key=b5dfb26907f0f3639b367a382925d30e`).then(
    //   res =>{
    //     this.setState({current_movie: res.data})
    //   }
    // )
    this.setState({current_movie_idx: idx})
    this.setState({current_movie: this.state.movielist[idx]})
    // console.log(this.state.current_movie)
  }

  GotoNext(){
    if(this.state.current_movie_idx < this.state.movielist.length-1){
      this.state.current_movie_idx++
      this.setState({current_movie:this.state.movielist[this.state.current_movie_idx]})
    }
  }

  GotoPrev(){
    if(this.state.current_movie_idx > 0){
      this.state.current_movie_idx--
      this.setState({current_movie:this.state.movielist[this.state.current_movie_idx]})
    }
  }

  EmptyList(){
    this.setState({movielist: []});
  }

  ShowGallery(tag){
    axios.get(`${this.state.tag_url}with_genres=${tag}`).then(
      res =>{
        this.setState({movielist: res.data.results});
      }

    )
  }


  render() {
    return (
      <Router>
      <div className="App">
          <Header EmptyList = {this.EmptyList.bind(this)}/>

          <Route exact path = '/' render = {props => (
              <React.Fragment>

                <Search SearchMovie = {this.SearchMovie.bind(this)}/>
                <div className = "ListContainer">
                  <MovieList movielist ={this.state.movielist} GotoMovie = {this.GotoMovie.bind(this)}/>
                </div>
              </React.Fragment>

          )}/>

        <Route exact path= "/gallery" render={props => (
                  <Gallery movielist ={this.state.movielist} ShowGallery={this.ShowGallery.bind(this)} GotoMovie = {this.GotoMovie.bind(this)}/>
            )}/>

          <Route exact path= "/movie" render = {props => (
              <MovieView movie={this.state.current_movie} GotoPrev = {this.GotoPrev.bind(this)} GotoNext = {this.GotoNext.bind(this)}/>
            )}/>
      </div>
      </Router>
    );
  }
}

export default App;
