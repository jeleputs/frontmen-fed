import React from 'react';
import './styles.scss';
import FetchFavoriteJokesComponent from './FetchFavoriteJokesComponent';

function ActionsContainer(props) {
  return (
    <aside>
      <FetchFavoriteJokesComponent {...props} />
      <div className="author">
        <a target="ric_github" href="https://github.com/jeleputs">
          Ric Aguilera
          <div className="pull-right my-picture" />
        </a>
      </div>
    </aside>
  );
}

export default ActionsContainer;
