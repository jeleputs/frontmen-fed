import React from 'react';
import './styles.scss';
import decodeEntities from '../../commons/decodeEntities';
import SvgLoader from '../../../commons/loader';

function JokesComponent(props) {
  const { jokes, onClick, isLoading } = props;
  var loader = '';
  if (isLoading) {
    loader = <SvgLoader />;
  }
  return (
    <div>
      <ul>
        {jokes.map(joke => (
          <li key={joke.id} onClick={() => onClick(joke)}>
            {decodeEntities(joke.joke)}
          </li>
        ))}
      </ul>
      {loader}
    </div>
  );
}

export default JokesComponent;
