import React from 'react';
import css from './Dialogs.module.css'; 
import { NavLink } from 'react-router-dom';

//Тег выводит список пользователей, переключает пользователей при переходе
const DialogItem = (props) => {
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> 
        </div>
    )
}

//Тег выводит список сообщений и разметку для каждого сообщения
const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'}
]

//создаёт новый массив на основе старого
// и передаёт в разметку  данные для тега DiaogsItem
let dialogsElements = dialogs
    .map( (d) => <DialogItem name={d.name} id={d.id} /> );

//d = dialog  было поставленно сокращение т.к. тут понятно что работаем с диалогами
//m = message аналогично диалогу, сокращение.


//создаёт новый массив с сообщениями и передаёт в тег Message
let messagesElements = messages 
    .map( (m) => <Message message={m.message} id={m.id} /> );

//Тег отрисовывает разметку на странице
const Dialogs = (props) => {
    return (
        <div className={css.dialogs_box}>
            <div className={css.dialogs_items}>
            {/* пример развёрнутой записи */}
            {/* <DialogItem name={dialogs[1].name} id={dialogs[1].id} />  */}
                { dialogsElements }
            </div>
            <div className={css.messages}>
            {/* Как было раньше. Нужно было в каждое сообщение передать пропс с текстом */}
            {/* <Message message={messages[2].message} id={messages[2].id} /> */}
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;