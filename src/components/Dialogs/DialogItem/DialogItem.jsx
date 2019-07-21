import React from 'react';
import css from '../../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';

//Тег выводит список пользователей, переключает пользователей при переходе
const DialogItem = (props) => {
    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink> 
        </div>
    )
}

export default DialogItem;