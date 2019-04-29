import React, { Component } from 'react';
import './styles.scss';
import JokesComponent from '../JokesComponent';

class FavoritedJokesContainer extends Component {
  render() {
    return (
      <section className="jokes-container favorited-jokes-container">
        <h1>Favorited Jokes</h1>
        <JokesComponent />
      </section>
    );
  }
}

export default FavoritedJokesContainer;
