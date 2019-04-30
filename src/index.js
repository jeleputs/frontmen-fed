import React from 'react';
import { render } from 'react-dom';
import App from './components/app';
import './commons/styles.scss';

const reactRootElement = document.getElementById('app');

render(<App />, reactRootElement);

if (module.hot) {
  module.hot.accept();
}
