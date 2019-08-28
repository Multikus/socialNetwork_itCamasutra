const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDETE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let store = {
    _state: { //делаем приватным чтобы не было доступа внешнего.
        profilePage: {
            posts: [
                { id: 1, message: 'Hi! How are you?', like: 21 },
                { id: 2, message: 'It\'s my first message', like: 13 },
                { id: 3, message: 'Закончил 25 урок', like: 25 },
                { id: 4, message: 'Пропсами прокинул данные из index.js', like: 30 },
                { id: 5, message: 'Создал объект state, вынес данные из index.js', like: 31 }
            ],
            newPostText: ''
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
            ],
            newMessageBody: ''
        }
    },
    _callSubscriber() { //метод store. Бывшая функция rerenderEntireTree. Уведомляет подписчика
        console.log('state changed');
    },
    getState () {
        return this._state;
    },
    //избавляемся от циклическ ой зависимости для функции rerenderEntireTree
    //получаем rerenderEntireTree в параметрах этой функции
    subscribe (observer) {
        this._callSubscriber = observer; //observer - это паттерн. 
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText, // забираем значение из массива в state.js
                like: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = ''; //обнуляем поле сообщения после добавления
                this._callSubscriber(this._state);
                
        } else if(action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText; //action.newText - упаковали новый текст в объект action
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody = '';
                this._state.dialogsPage.messages.push({ id: 6, message: body });
                this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})//пример сокращенной записи
  
export const updateNewPostActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST, 
      newText: text  
    }
  }

export const sendMessageCreator = () => ({type: SEND_MESSAGE})

export const updateNewMessageBodyCreator = (body) => 
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default store; 




//ЕЩЁ ОДИН СПОСОБ ЗАПИСИ И ВЫЗОМА МЕТОДА dispatch
//Деламе методы addPost и updateNewPost приватными и затем в методе dispatch вызываем их
//ПРИМЕР
// _addPost () { 
//     let newPost = {
//         id: 6,
//         message: this._state.profilePage.newPostText, 
//         like: 0
//         };
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = ''; 
//         this._callSubscriber(this._state);
// },
// _updateNewPost (newText) { 
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
// }
// dispatch(action) {
//     if(action.type === 'ADD-POST') {
//          this._addPost();
//     } else if(action.type === 'UPDATE-NEW-POST') {
//          this._updateNewPost(action.newText);
//     }
// }


//Было два метода которые вызывались передавались в компоненту. Их заменили на метод dispatch

// addPost () { // функцию переделали в метод добавления нового поста.
//     let newPost = {
//         id: 6,
//         message: this._state.profilePage.newPostText, // забираем значение из массива в state.js
//         like: 0
//         };
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = ''; //обнуляем поле сообщения после добавления
//         this._callSubscriber(this._state);
// },


// //функция отслеживает изменения в textarea передаёт в BLL и обратно через пропсы
// updateNewPost (newText) { //переделали в метод
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
// }


