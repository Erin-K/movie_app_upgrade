import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './App.css';
import Movie from './Movie'

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    const { data: { data: { movies }}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
    // == console.log(movies.data.data.movies);
    console.log(movies)
    this.setState({movies: movies, isLoading: false})
  }
  componentDidMount() {
    this.getMovies();

  };
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? 'Loading...' : 
          movies.map(movie => 
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.poster}
            />
          )
        }
      </div>
    );
  }
}

export default App;
