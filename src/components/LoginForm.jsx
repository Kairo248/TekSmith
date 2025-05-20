import React, { useState } from 'react';
import './LoginForm.css'; // ← Import the CSS styles

function LoginForm({ onSubmit, error }) {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(credentials);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={credentials.email}
        onChange={handleChange}
        required
        className="login-input"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={credentials.password}
        onChange={handleChange}
        required
        className="login-input"
      />
      <button type="submit" className="login-button">Log In</button>
      {error && <p className="login-error">{error}</p>}
    </form>
  );
}

export default LoginForm;
