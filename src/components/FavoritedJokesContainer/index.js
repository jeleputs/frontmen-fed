import React, { Component } from 'react';
import './styles.scss';
import JokesComponent from '../JokesComponent';

class FavoritedJokesContainer extends Component {
  render() {
    return (
      <section>
        <h1>Favorited Jokes</h1>
        <JokesComponent />
      </section>
    );
  }
}

export default FavoritedJokesContainer;
