import React, { Component } from 'react';
import './styles.scss';
import JokesComponent from '../JokesComponent';

function FavoritedJokesContainer(props) {
  const { jokes, removeJokeFromFavorites } = props;
  console.log('el jokes:', jokes);
  return (
    <section className="jokes-container favorited-jokes-container">
      <h1>Favorited Jokes</h1>
      <JokesComponent jokes={jokes} onClick={removeJokeFromFavorites} />
    </section>
  );
}

export default FavoritedJokesContainer;
