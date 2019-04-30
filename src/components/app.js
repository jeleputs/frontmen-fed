import React from 'react';
import './app.scss';
import MainContainer from './MainContainer';
import LoginContainer from './LoginContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainContainer} />
      <Route path="/login" component={LoginContainer} />
    </Router>
  );
}

export default App;
