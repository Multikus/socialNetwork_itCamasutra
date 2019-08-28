import React from 'react';
import css from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/state';


const MyPosts = (props) => {

  let postsElements  = props.posts.map ( (p) => <Post like={p.like} message={p.message} /> );

  let newPostElement = React.createRef(); //создаём пустую ссылку на элемент

  let addPost = () => {
    if(newPostElement.current.value.length === 0) {
      return false;
    } else {
      //props.addPost(); // вызываем функцию добавления поста из файла state.js
      props.dispatch(addPostActionCreator());
    }
  } 

  let onPostChange = () => { //функция обработчика события
    let text = newPostElement.current.value; //берет значение value чтобы отлавливать попытку изменения
    // props.updateNewPost(text);//функция из state для добавления информации
    //заменили на вызов одного метода dispatch 
    props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className={css.myPosts_wrapp}>
      <h3>My posts</h3>
       <div className={css.post_box}>
          {/*  ref={ newPostElement } привязали ссылку к конкретному элементу */}
          {/*  onChange={onPostChange} добавили обработчик события */}
          <textarea class='testText'  ref={ newPostElement } onChange={onPostChange} value={props.newPostText} />

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