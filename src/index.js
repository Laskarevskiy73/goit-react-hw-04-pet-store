import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PetColectionContext from './components/PetColectionContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Pets from './pages/Pets';
import Pet from './pages/Pet';
import About from './pages/About';
import style from './components/css/mainStyle.module.css';

const App = () => (
  <div className={style.mainStyle}>
    <Navigation />
    <PetColectionContext>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pets/:petsId" component={Pet} />
        <Route path="/pets" component={Pets} />
        <Route path="/about" component={About} />
        <Route component={Home} />
      </Switch>
    </PetColectionContext>
  </div>
);

ReactDOM.render(
  <BrowserRouter>
    <Route component={App} />
  </BrowserRouter>,
  document.querySelector('#root'),
);
