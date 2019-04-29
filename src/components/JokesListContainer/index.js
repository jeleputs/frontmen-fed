import React, { Component } from 'react';
import './styles.scss';
import JokesComponent from '../JokesComponent';

class JokesListContainer extends Component {
  render() {
    return (
      <section className="jokes-container jokes-list-container">
        <h1>Fetch New Jokes</h1>
        <JokesComponent />
      </section>
    );
  }
}

export default JokesListContainer;
