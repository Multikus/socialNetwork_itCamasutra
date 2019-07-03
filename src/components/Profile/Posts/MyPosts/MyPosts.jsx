import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
  return <div>
      My posts
        <div>
          <textarea name="NewPost" cols="50" rows="5"></textarea>
          <button>Add post</button>
        </div>

        <div className={css.posts}>
          <Post like='21' message='Hi! How are you?' />
          <Post like='13' message="It's my first message" />
        </div>
    </div>
}

export default MyPosts;