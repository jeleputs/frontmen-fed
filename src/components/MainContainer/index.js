import React, { useState, useEffect, useRef } from 'react';
import './styles.scss';
import ActionsContainer from './ActionsContainer';
import JokesListContainer from './JokesListContainer';
import FavoritedJokesContainer from './FavoritedJokesContainer';
import useStateWithSessionStorage from '../commons/useStateWithSessionStorage';

function MainContainer(props) {
  const API = 'https://api.icndb.com/jokes/random/';

  const [jokes, setJokes] = useState([]);
  const [favoritedJokes, setFavoritedJokes] = useStateWithSessionStorage(
    'chuckNorrisApp/favoritedJokes',
    []
  );
  const [fetchingFavorites, setFetchingFavorites] = useState(false);
  const { userCredentials, setUserCredentials } = props;

  useEffect(async () => {
    if (userCredentials.token) {
      const res = await fetch(API + '10');
      const response = await res.json();
      const jokes = await response;
      setJokes(jokes.value);
    } else {
      props.history.push('/');
    }
  }, []);

  customIntervalEffect(() => {
    appendJoke();
  }, 5000);

  function customIntervalEffect(callback, delay) {
    const prevCallback = useRef();
    useEffect(() => {
      prevCallback.current = callback;
    }, [callback]);
    useEffect(() => {
      function tick() {
        prevCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  async function appendJoke() {
    if (favoritedJokes.length < 10 && fetchingFavorites) {
      let joke = {};
      do {
        const res = await fetch(API + '1');
        const response = await res.json();
        joke = await response.value[0];
      } while (
        favoritedJokes
          .map(joke => joke.id)
          .find(el => {
            el === joke.id;
          })
      );
      setFavoritedJokes([...favoritedJokes, joke]);
    }
    if (favoritedJokes.length >= 10) {
      setFetchingFavorites(false);
    }
  }

  function addJokeToFavorites(joke) {
    if (favoritedJokes.length >= 10) return false;

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
    setFavoritedJokes([]);
    setUserCredentials({});
    props.history.push('/');
  }

  return (
    <div className="main-container">
      <header>
        Chuck Norris jokes app
        <div className="pull-right logout-link" onClick={() => logOut()}>
          Logout
        </div>
        <div className="pull-right">{`${userCredentials.user.firstname} ${
          userCredentials.user.lastname
        }`}</div>
      </header>
      <main>
        <ActionsContainer
          fetchingFavorites={fetchingFavorites}
          setFetchingFavorites={setFetchingFavorites}
        />
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
