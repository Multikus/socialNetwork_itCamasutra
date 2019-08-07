import React from 'react';
import css from './profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';
import ProfileInfo from './Posts/ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={css.profile}>
      <ProfileInfo />
      <MyPosts posts={props.state.posts}/>
    </div>
  )
}

export default Profile;
