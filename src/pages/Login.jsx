// pages/Login.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = (credentials) => {
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (
      savedUser &&
      credentials.email === savedUser.email &&
      credentials.password === savedUser.password
    ) {
      login();
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLogin} error={error} />
       <p>If you don't have a profile yet <a href="/profile">Click here</a></p>
    </div>
  );
}

export default Login;
