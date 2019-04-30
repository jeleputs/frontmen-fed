import React from 'react';
import './styles.scss';
import JokesComponent from '../JokesComponent';

function JokesListContainer(props) {
  const { jokes, addJokeToFavorites } = props;

  return (
    <section className="jokes-container jokes-list-container">
      <h1>Fresh Jokes From The Server</h1>
      <JokesComponent jokes={jokes} onClick={addJokeToFavorites} />
    </section>
  );
}

export default JokesListContainer;
