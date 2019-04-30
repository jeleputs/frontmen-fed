import React from 'react';
import './styles.scss';

function JokesComponent(props) {
  const { jokes, onClick } = props;
  console.log('hasta aquí llega el jokes', jokes);

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
