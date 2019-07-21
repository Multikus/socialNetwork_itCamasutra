import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';

let posts = [
  {id: 1, message:'Hi! How are you?', like: 21},
  {id: 2, message:'It\'s my first message', like: 13},
  {id: 3, message:'Закончил 25 урок', like: 25}
]

let postsElements  = posts
  .map ( (p) => <Post like={p.like} message={p.message} /> );


const MyPosts = () => {
  return (
    <div className={css.myPosts_wrapp}>
      <h3>My posts</h3>
       <div className={css.post_box}>
          <textarea name="NewPost" cols="50" rows="5"></textarea>
          <button className={css.addBtn_post}>Add post</button>
        </div>

        <div className={css.posts}>
          {/* пример старой записи */}
          {/* like - атрибут, дальше передаём имя переменной с массивом */}
          {/* массив posts указываем номер элемента [0] массива  */}
          {/* затем указываем ключ из списка массива like */}
          {/* <Post like={posts[0].like} message={posts[0].message} /> */}
          { postsElements }
        </div>
    </div>
  )
}

export default MyPosts;