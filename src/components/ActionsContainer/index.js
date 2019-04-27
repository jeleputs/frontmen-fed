import React, { Component } from 'react';
import './styles.scss';
import FavoriteAJokeComponent from './FavoriteAJokeComponent';
import UnfavoriteAJokeComponent from './UnfavoriteAJokeComponent';
import FetchFavoriteJokesComponent from './FetchFavoriteJokesComponent';

class ActionsContainer extends Component {
  render() {
    return (
      <aside>
        <FavoriteAJokeComponent />
        <UnfavoriteAJokeComponent />
        <FetchFavoriteJokesComponent />
      </aside>
    );
  }
}

export default ActionsContainer;
