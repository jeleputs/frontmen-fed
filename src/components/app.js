import React, { useState } from 'react';
import './app.scss';
import MainContainer from './MainContainer';
import LoginContainer from './LoginContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [userCredentials, setUserCredentials] = useState({});

  return (
    <Router>
      <Route
        exact
        path="/dashboard"
        render={props => (
          <MainContainer
            {...props}
            userCredentials={userCredentials}
            setUserCredentials={setUserCredentials}
          />
        )}
      />
      <Route
        path="/"
        render={props => (
          <LoginContainer
            {...props}
            userCredentials={userCredentials}
            setUserCredentials={setUserCredentials}
          />
        )}
      />
    </Router>
  );
}

export default App;
