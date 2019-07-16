import React from 'react';
import css from './profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';
import ProfileInfo from './Posts/ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className={css.profile}>
      <ProfileInfo />
      <MyPosts />
    </div>
  )
}

export default Profile;