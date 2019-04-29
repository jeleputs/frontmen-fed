import React, { Component } from 'react';
import './styles.scss';
import FetchFavoriteJokesComponent from './FetchFavoriteJokesComponent';

class ActionsContainer extends Component {
  render() {
    return (
      <aside>
        <FetchFavoriteJokesComponent />
        <div className="author">
          <a target="ric_github" href="https://github.com/jeleputs">
            Ric Aguilera
            <div className="pull-right my-picture" />
          </a>
        </div>
      </aside>
    );
  }
}

export default ActionsContainer;
