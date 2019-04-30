import React from 'react';
import './styles.scss';
import decodeEntities from '../../commons/decodeEntities';

function JokesComponent(props) {
  const { jokes, onClick } = props;

  return (
    <ul>
      {jokes.map(joke => (
        <li key={joke.id} onClick={() => onClick(joke)}>
          {decodeEntities(joke.joke)}
        </li>
      ))}
    </ul>
  );
}

export default JokesComponent;
