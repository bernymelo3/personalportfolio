import React from 'react';
import ProfilePageContent from '../sub/ProfilePageContent';

const ProfilePage = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="profile-content">
      <video
        autoPlay
        muted
        loop
        className="profile-video absolute h-full w-full object-cover"
        src="/profileBackground.webm"
      />
      <ProfilePageContent />
    </div>
  );
};

export default ProfilePage;
