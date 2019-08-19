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
            ]    
        }
    },
    getState () {
        return this._state;
    },
    _callSubscriber() { //метод store. Бывшая функция rerenderEntireTree. Уведомляет подписчика
        console.log('state changed');
    },
    addPost () { // функцию переделали в метод добавления нового поста.
    let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText, // забираем значение из массива в state.js
        like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = ''; //обнуляем поле сообщения после добавления
        this._callSubscriber(this._state);
    },
    //функция отслеживает изменения в textarea передаёт в BLL и обратно через пропсы
    updateNewPost (newText) { //переделали в метод
        debugger;
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    //избавляемся от циклической зависимости для функции rerenderEntireTree
    //получаем rerenderEntireTree в параметрах этой функции
    subscribe (observer) {
        this._callSubscriber = observer; //observer - это паттерн. 
    }
}

export default store; 