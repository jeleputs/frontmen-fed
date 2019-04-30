import React from 'react';
import './styles.scss';

function JokesComponent(props) {
  const { jokes, onClick } = props;

  return (
    <ul>
      {jokes.map(joke => (
        <li key={joke.id} onClick={() => onClick(joke)}>
          {joke.joke}
        </li>
      ))}
    </ul>
  );
}

export default JokesComponent;
