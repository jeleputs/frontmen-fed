import React, { useState, useEffect } from 'react';
import './styles.scss';
import ActionsContainer from './ActionsContainer';
import JokesListContainer from './JokesListContainer';
import FavoritedJokesContainer from './FavoritedJokesContainer';

function MainContainer(props) {
  const API = 'https://api.icndb.com/jokes/random/10';

  const [jokes, setJokes] = useState([]);
  const [favoritedJokes, setFavoritedJokes] = useState([]);

  const { userCredentials, setUserCredentials } = props;

  useEffect(() => {
    if (userCredentials.token) {
      fetch(API)
        .then(response => response.json())
        .then(data => {
          setJokes(data.value);
        });
    } else {
      props.history.push('/');
    }
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
  function logOut() {
    setUserCredentials({});
    props.history.push('/');
  }

  return (
    <div className="main-container">
      <header>
        Chuck Norris jokes app
        <div className="pull-right my-picture" onClick={() => logOut()} />
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

export default MainContainer;
