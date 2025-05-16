// pages/Profile.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';

function Profile() {
  const navigate = useNavigate();

  const handleCreateProfile = (formData) => {
    // Save user to localStorage (simulating backend storage)
    localStorage.setItem('user', JSON.stringify(formData));
    console.log('Profile Created:', formData);

    alert('Profile Created Successfully!');
    navigate('/login');
  };

  return (
    <div>
      <h1>Create Profile</h1>
      <ProfileForm onSubmit={handleCreateProfile} />
    </div>
  );
}

export default Profile;
