import React from 'react';
import './styles.scss';
import JokesComponent from '../JokesComponent';

function FavoritedJokesContainer(props) {
  const { favoritedJokes, removeJokeFromFavorites, isLoading } = props;

  return (
    <section className="jokes-container favorited-jokes-container">
      <h1>Favorited Jokes</h1>
      <JokesComponent
        jokes={favoritedJokes}
        onClick={removeJokeFromFavorites}
        isLoading={isLoading}
      />
    </section>
  );
}

export default FavoritedJokesContainer;
