import React from 'react';
import css from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return <nav className={css.nav}>
    <div className={css.item}>
      <NavLink to='/profile' activeClassName={css.active}>Profile</NavLink>
    </div>
    <div className={css.item}>
      <NavLink to='/dialogs' activeClassName={css.active}>Messages</NavLink>
    </div>
    <div className={css.item}>
      <NavLink to='/news' activeClassName={css.active}>News</NavLink>
    </div>
    <div className={css.item}>
      <NavLink to='/music' activeClassName={css.active}>Music</NavLink>
    </div>
    <div className={css.item}>
      <NavLink to='/settings' activeClassName={css.active}>Settings</NavLink>
    </div> 
  </nav>
}

export default NavBar;

//присвоение двух классов через регулярную строку
//className={`${classes.item} ${classes.active}`}