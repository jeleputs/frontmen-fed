import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginContainer(props) {
  const [user, setUser] = useState({});

  function validateLogin() {
    props.history.push('/dashboard');
  }

  return (
    <div className="login-form">
      <input type="text" id="user" />
      <input type="password" id="password" />
      <button onClick={() => validateLogin()}>Ingresar</button>
    </div>
  );
}

export default LoginContainer;
