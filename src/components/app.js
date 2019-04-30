import React, { useState, useEffect } from 'react';
import './app.scss';
import ActionsContainer from './ActionsContainer';
import JokesListContainer from './JokesListContainer';
import FavoritedJokesContainer from './FavoritedJokesContainer';

function App() {
  const API = 'https://api.icndb.com/jokes/random/10';

  const [jokes, setJokes] = useState([]);
  const [favoritedJokes, setFavoritedJokes] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        setJokes(data.value);
      });
  }, []);

  function addJokeToFavorites(joke) {
    setFavoritedJokes([
      ...favoritedJokes.filter(thisJoke => {
        if (thisJoke.id !== joke.id) {
          return thisJoke;
        }
      }),
      joke
    ]);

    setJokes([
      ...jokes.filter(thisJoke => {
        if (thisJoke.id !== joke.id) {
          return thisJoke;
        }
      })
    ]);
  }

  function removeJokeFromFavorites(joke) {
    setJokes([
      ...jokes.filter(thisJoke => {
        if (thisJoke.id !== joke.id) {
          return thisJoke;
        }
      }),
      joke
    ]);

    setFavoritedJokes([
      ...favoritedJokes.filter(thisJoke => {
        if (thisJoke.id !== joke.id) {
          return thisJoke;
        }
      })
    ]);
  }

  return (
    <div className="container">
      <header>
        Chuck Norris jokes app
        <div className="pull-right my-picture" />
        <div className="pull-right">Ric Aguilera</div>
      </header>
      <main>
        <ActionsContainer />
        <JokesListContainer
          jokes={jokes}
          addJokeToFavorites={addJokeToFavorites}
        />
        <FavoritedJokesContainer
          jokes={favoritedJokes}
          removeJokeFromFavorites={removeJokeFromFavorites}
        />
      </main>
      <footer />
    </div>
  );
}

export default App;
