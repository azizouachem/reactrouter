import React, { useState } from 'react';
import MovieList from '/MovieList';
import Filter from './Filter';
import MovieDescriptionPage from './MovieDescriptionPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [movies, setMovies] = useState([
    // Movies array with description and trailerLink...
  ]);

  // Rest of the code...

  return (
    <Router>
      <div className="app">
        <h1>Movie Library</h1>
        <Switch>
          <Route exact path="/">
            <Filter
              titleFilter={titleFilter}
              ratingFilter={ratingFilter}
              onTitleFilterChange={handleTitleFilterChange}
              onRatingFilterChange={handleRatingFilterChange}
            />
            <MovieList movies={filteredMovies} />
          </Route>
          <Route path="/movie/:id">
            <MovieDescriptionPage movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;



