import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { Home, Pets, Pet, About } from './LoadableLoadingPage';
import PetColectionContext from './components/PetColectionContext';
import Navigation from './components/Navigation';
import style from './components/css/mainStyle.module.css';

const App = () => (
  <div className={style.mainStyle}>
    <Navigation />
    <PetColectionContext>
      <Switch>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className={style.switchWrapper}
        >
          <Route path="/" exact component={Home} />
          <Route path="/pets/:petsId" component={Pet} />
          <Route path="/pets" component={Pets} />
          <Route path="/about" component={About} />
          <Redirect to="/" />
        </AnimatedSwitch>
      </Switch>
    </PetColectionContext>
  </div>
);

export default App;
