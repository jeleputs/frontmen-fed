import React, { Component } from 'react';
import './styles.scss';
import JokesComponent from '../JokesComponent';

class JokesListContainer extends Component {
  render() {
    return (
      <section>
        <h1>Fresh new jokes</h1>
        <JokesComponent />
      </section>
    );
  }
}

export default JokesListContainer;
