import React from 'react';
import css from '../../Dialogs/Dialogs.module.css'; 


//Тег выводит список сообщений и разметку для каждого сообщения
const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    )
}

export default Message;