import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './css/ReturnBtn.module.css';

const ReturnBtn = () => (
  <NavLink to="/pets" className={style.linkReturn}>
    <button className={style.btnReturn} type="button">
      <i className={`material-icons ${style.arrowLeftBtn}`}>
        keyboard_backspace
      </i>
      Return
    </button>
  </NavLink>
);

export default ReturnBtn;
