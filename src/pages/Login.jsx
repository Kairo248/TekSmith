import React from 'react';
import { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
 const { login } = useAuth();
 const navigate = useNavigate();

 const [credentials, setCredentials] = useState({ email: '', password: ''});
 const [error, setError] = useState('');

 const handleChange = (e) => {
    setCredentials(prev => ({
        ...prev,
        [e.target.name]: e.target.value 
    }));
 };

 const handleLogin = (e) => {
    e.preventDefault();

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
 }

 return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button  type="submit" >Log In</button>
        {error && <p>{error}</p>}
      </form>
    </div>
 )
};

export default Login;
