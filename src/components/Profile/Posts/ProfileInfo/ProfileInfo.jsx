import React from 'react';
import css from './ProfileInfo.module.css';



const ProfileInfo = () => {
  return (
    <div className={css.profile_info}>
      <div className={css.profile__img_box}>
        <img className={css.profile__img} src="http://bishop.usssulaco.ru/_bl/1/50247209.png" alt="космический корабль" />
      </div>
      <div className={css.profile_description}>
        ava + description
      </div>

    </div>
  )
}

export default ProfileInfo;