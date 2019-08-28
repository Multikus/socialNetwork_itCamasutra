import React from 'react';
import css from './Dialogs.module.css'; 
import Message from './../Dialogs/Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {updateNewMessageBodyCreator, sendMessageCreator} from '../redux/state';

//Тег отрисовывает разметку на странице
const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage;
//создаёт новый массив на основе старого
// и передаёт в разметку  данные для тега DiaogsItem
    let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id} />);

//d = dialog  было поставленно сокращение т.к. тут понятно что работаем с диалогами
//m = message аналогично диалогу, сокращение.

//создаёт новый массив с сообщениями и передаёт в тег Message
    
    let messagesElements = state.messages.map((m) => <Message message={m.message} id={m.id} />);
    let newMessageBody = state.newMessageBody;
    let newTextmsg = React.createRef();
    
    let sendMsg = (e) => {
        //let message = newTextmsg.current.value;
        if(newTextmsg.current.value.length === 0) {
            alert('EMTY MSG')
            return false;
          } else {
            //props.addPost(); // вызываем функцию добавления поста из файла state.js
            props.store.dispatch(sendMessageCreator());
          }
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

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
                <div>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} ref={ newTextmsg } ></textarea>
                    <button onClick={ sendMsg } >Send message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;