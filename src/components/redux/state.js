import { rerenderEntireTree } from "../../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi! How are you?', like: 21 },
            { id: 2, message: 'It\'s my first message', like: 13 },
            { id: 3, message: 'Закончил 25 урок', like: 25 },
            { id: 4, message: 'Пропсами прокинул данные из index.js', like: 30 },
            { id: 5, message: 'Создал объект state, вынес данные из index.js', like: 31 }
        ]
    },

    dialogsPage: {
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How is your it-kamasutra?' },
            { id: 3, message: 'Yo' }
        ],
        dialogs: [
            { id: 1, name: 'Dimych' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' }
        ]    
    }
}

// функция добавления нового поста.
export let addPost = (postMessage) => {
debugger
    let newPost = {
        id: 6,
        message: postMessage, // значение value из поля textarea
        like: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state; 