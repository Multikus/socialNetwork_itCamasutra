import React from 'react';
import s from '../style/DeskNews.module.css';


const Desknews = () => {
  return <div className={s.title_posts}>
    <h1>My news</h1>

    <div className={s.item}>
      New post
        <div className={s.item}>
          New post 1
        </div>
        <div className={s.item}>
          New post 2
        </div>
    </div>
  </div>
}

export default Desknews;