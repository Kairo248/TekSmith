import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../components/ProfileForm';
import './styles/Profile.css';

function Profile() {
  const navigate = useNavigate();

  const handleCreateProfile = (formData) => {
    localStorage.setItem('user', JSON.stringify(formData));
    console.log('Profile Created:', formData);

    alert('Profile Created Successfully!');
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Create Profile</h1>
        <ProfileForm onSubmit={handleCreateProfile} />
        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Profile;
