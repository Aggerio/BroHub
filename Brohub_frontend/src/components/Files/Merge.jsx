import React from 'react';
import Profile from '../Files/Profile';
import PostCard from './PostCard';

function ProfilePage() {
    return (
      <main className="flex flex-col items-center bg-white">
        <Profile />
        <PostCard />
      </main>
    );
  }
  
  export default ProfilePage;