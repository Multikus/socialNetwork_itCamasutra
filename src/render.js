import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost } from './components/redux/state';
import { BrowserRouter } from 'react-router-dom';
import { updateNewPost } from './components/redux/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPost={updateNewPost}/>
        </BrowserRouter>, document.getElementById('root'));
}



  