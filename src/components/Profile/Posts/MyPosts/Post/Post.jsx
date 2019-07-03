import React from 'react';
import css from './Post.module.css';


const Post = (props) => {
  return (
    <div className={css.item}>
      <img src="https://wxpcdn.gcdn.co/dcont/fb/image/crew4_1024.png" alt="Аватарка" />
      { props.message }
      <div>
        <span className={css.like}>
          like { props.like }
        </span>
      </div>
    </div>
  )
}

export default Post;