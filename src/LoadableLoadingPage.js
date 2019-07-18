import Loadable from 'react-loadable';
import Loader from './components/Loader';

export const Home = Loadable({
  loader: () => import('./pages/Home'),
  loading: Loader,
});

export const Pets = Loadable({
  loader: () => import('./pages/Pets'),
  loading: Loader,
});

export const Pet = Loadable({
  loader: () => import('./pages/Pet'),
  loading: Loader,
});

export const About = Loadable({
  loader: () => import('./pages/About'),
  loading: Loader,
});
