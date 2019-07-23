import React from 'react';
import Loadable from 'react-loadable';
import Spinkit from 'react-spinkit';
import style from './components/css/Spinkit.module.css';

const Loading = () => (
  <div className={style.baseStyleContainer}>
    <Spinkit name="ball-scale-multiple" className={style.loading} />
  </div>
);

export const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loading,
});

export const Pets = Loadable({
  loader: () => import('./pages/Pets'),
  loading: Loading,
});

export const Pet = Loadable({
  loader: () => import('./pages/Pet'),
  loading: Loading,
});

export const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loading,
});
