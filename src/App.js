import React from 'react';
import './App.css';
import Header from './Components/Header';
import Movie from './Components/Movie';
import movies from './Json_file/movie.json';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        {movies.map((element) => (
          <Movie key={element.imdbID} title={element.Title} year={element.Year} img={element.Poster} />
        ))}
      </div>
    </div>
  );
}

export default App;
