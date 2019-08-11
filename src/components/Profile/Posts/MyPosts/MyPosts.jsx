import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

  let postsElements  = props.posts.map ( (p) => <Post like={p.like} message={p.message} /> );

  let newPostElement = React.createRef(); //создаём пустую ссылку на элемент

  let addPost = () => {
    debugger
    let text = newPostElement.current.value; //берем значение HTML элемента
    props.addPost(text); // вызываем функцию добавления поста из файла state.js
  } //(text) передаётся как параметр для фунции addPost из файла satae.js

  return (
    <div className={css.myPosts_wrapp}>
      <h3>My posts</h3>
       <div className={css.post_box}>
          {/* привязали ссылку к конкретному элементу */}
          <textarea ref={ newPostElement } name="NewPost" cols="50" rows="5"></textarea>

          <button onClick={ addPost }   className={css.addBtn_post}>Add post</button>

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