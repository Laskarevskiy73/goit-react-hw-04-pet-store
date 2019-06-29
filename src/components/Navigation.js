import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './css/Navigation.module.css';

const Navigation = () => (
  <ul className={style.backgroundNav}>
    <NavLink
      to="/"
      exact
      className={style.nav}
      activeClassName={style.navActive}
    >
      Home
    </NavLink>
    <NavLink to="/pets" className={style.nav} activeClassName={style.navActive}>
      Pets
    </NavLink>
    <NavLink
      to="/about"
      className={style.nav}
      activeClassName={style.navActive}
    >
      About
    </NavLink>
  </ul>
);

export default Navigation;
