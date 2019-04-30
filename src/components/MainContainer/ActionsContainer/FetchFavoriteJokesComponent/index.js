import React, { useState } from 'react';
import './styles.scss';

function FetchFavoriteJokesComponent(props) {
  const { fetchingFavorites, setFetchingFavorites } = props;

  const className = fetchingFavorites
    ? 'aside-element active'
    : 'aside-element';
  const label = fetchingFavorites
    ? 'Stop Fetching'
    : 'Fetch Favorites from server';

  return (
    <div
      className={className}
      onClick={() => setFetchingFavorites(!fetchingFavorites)}
    >
      {label}
    </div>
  );
}

export default FetchFavoriteJokesComponent;
