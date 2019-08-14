import React from 'react';
import css from './profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';
import ProfileInfo from './Posts/ProfileInfo/ProfileInfo';
import { addPost } from './../redux/state';

const Profile = (props) => {
  return (
    <div className={css.profile}>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts} 
               newPostText={props.profilePage.newPostText} 
               addPost={props.addPost} 
               updateNewPost={props.updateNewPost} />
    </div>
  )
}

export default Profile;
