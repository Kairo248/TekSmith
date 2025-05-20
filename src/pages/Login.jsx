import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import './styles/Login.css'; 

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
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-title">Welcome Back</h1>
        <LoginForm onSubmit={handleLogin} error={error} />
        <p className="signup-prompt">
          Don’t have a profile? <a href="/profile">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
