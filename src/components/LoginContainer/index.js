import React, { useState, useEffect } from 'react';
import './styles.scss';

function LoginContainer(props) {
  const API = 'http://localhost:3000/login';

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const { userCredentials, setUserCredentials } = props;

  useEffect(() => {
    console.log(userCredentials);
    if (userCredentials.token) {
      props.history.push('/dashboard');
    }
  }, []);

  function validateLogin() {
    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.err) {
          setError(data.err);
        }
        if (data.token) {
          setUserCredentials(data);
          setError('');
          setFormData({ username: '', password: '' });
          props.history.push('/dashboard');
        }
      });
  }

  function _handleKeyPress(e) {
    if (e.key === 'Enter') {
      validateLogin();
    }
  }

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { username, password } = formData;
  const errorClass = error !== '' ? 'message error' : 'message';

  return (
    <div className="login-container" onKeyPress={e => _handleKeyPress(e)}>
      <div className="login-form">
        <div className={errorClass}>{error}</div>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={e => updateFormData(e)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => updateFormData(e)}
          required
        />
        <button onClick={() => validateLogin()}>Login</button>
      </div>
    </div>
  );
}

export default LoginContainer;
