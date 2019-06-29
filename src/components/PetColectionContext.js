import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';
import petsColection from './pets.json';

export const PetsContext = createContext();

export default class PetColectionContext extends Component {
  static propTypes = {
    children: PropTypes.shape({}).isRequired,
  };

  state = { pets: petsColection };

  render() {
    const { children } = this.props;
    const { pets } = this.state;

    return (
      <PetsContext.Provider value={{ pets }}>{children}</PetsContext.Provider>
    );
  }
}
