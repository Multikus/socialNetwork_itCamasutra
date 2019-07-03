import React from 'react';
import css from './profile.module.css';
import MyPosts from './Posts/MyPosts/MyPosts';

const Profile = () => {
  return <div className={css.content}>
    <div className={css.profile__img_box}>
      <img className={css.profile__img} src="http://bishop.usssulaco.ru/_bl/1/50247209.png" alt="космический корабль" />
    </div>
    <div>
      ava + description
    </div>
    <MyPosts />
  </div>

}

export default Profile;