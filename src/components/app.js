import React, { Component } from 'react';
import './app.scss';
import ActionsContainer from './ActionsContainer';
import JokesListContainer from './JokesListContainer';
import FavoritedJokesContainer from './FavoritedJokesContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          Chuck Norris jokes app
          <div className="pull-right my-picture" />
          <div className="pull-right">Ric Aguilera</div>
        </header>
        <main>
          <ActionsContainer />
          <JokesListContainer />
          <FavoritedJokesContainer />
        </main>
        <footer />
      </div>
    );
  }
}

export default App;
