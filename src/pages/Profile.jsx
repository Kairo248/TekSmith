import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save user to localStorage
    localStorage.setItem('user', JSON.stringify(formData));

    
    // normarlly I'd send this to a backend.
    console.log('Profile Created:', formData);

    // Simulate saving profile and go to login
    alert('Profile Created Successfully!');
    navigate('/login');
  }

  return (
    <div>
        <h1>Create Profile</h1>
        <form onSubmit={handleSubmit}>
            <input 
              type="text"
              name='name'
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
             />
            <input 
             type="email"
             name="email"
             placeholder="Your email"
             value={formData.email}
             onChange={handleChange}
             required
             />
            <input
             type="password"
             name="password"
             placeholder="Enter password"
             value={formData.password}
             onChange={handleChange}
             required
             />
             <button type="submit">Create Profile</button>
        </form>
    </div>
  )
};

export default Profile;
