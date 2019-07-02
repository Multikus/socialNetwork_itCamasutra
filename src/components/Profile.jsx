import React from 'react';
import Desknews from './DeskNews';
import classes from '../style/profile.module.css';

const Profile = () => {
  return <div className={classes.content}>
    <div className={classes.profile__img_box}>
      <img className={classes.profile__img} src="http://bishop.usssulaco.ru/_bl/1/50247209.png" alt="космический корабль" />
    </div>

    <div className={classes.header_avatar__box}>  
      <div className={classes.profile__avatar}>
        <img className={classes.profile__avatar_img} src="https://wxpcdn.gcdn.co/dcont/fb/image/crew4_1024.png" alt="Аватарка" />
      </div>

      <div className={classes.profile__title_box}>
        <h1 className={classes.profile_title__name}>Nikolai</h1>
        <span className={classes.profile_title__dateBirth}>19.05.1985</span>
        <span className={classes.profile_title__city}>Saint-Peterspurg</span>
        <span className={classes.profile_title__education}>UPI</span>
        <span className={classes.profile_title__my_site}>www.google.com</span>
      </div>
    </div>

    <Desknews />

  </div>

}

export default Profile;