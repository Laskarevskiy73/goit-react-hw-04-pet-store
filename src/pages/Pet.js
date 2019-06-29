import React from 'react';
import PropTypes from 'prop-types';
import { PetsContext } from '../components/PetColectionContext';
import ReturnBtn from '../components/ReturnBtn';
import style from '../components/css/Pet.module.css';

const Pet = props => (
  <PetsContext.Consumer>
    {context => {
      const foundPet = context.pets.find(
        pet => pet.id === props.match.params.petsId,
      );

      return (
        <div className={style.petPageMain}>
          <ReturnBtn />
          <p className={style.namePet}>All about {foundPet.name}</p>
          <div className={style.cardPet}>
            <img className={style.imagePet} src={foundPet.image} alt="pet" />
            <div className={style.about}>
              <p className={style.aboutPet}>
                Age: <span className={style.dataPet}>{foundPet.age}</span>
              </p>
              <p className={style.aboutPet}>
                Gender: <span className={style.dataPet}>{foundPet.gender}</span>
              </p>
              <p className={style.aboutPet}>
                Color: <span className={style.dataPet}>{foundPet.color}</span>
              </p>
              <p className={style.aboutPet}>
                Breed: <span className={style.dataPet}>{foundPet.breed}</span>
              </p>
            </div>
          </div>
          <p className={style.descriptionPet}>{foundPet.description}</p>
        </div>
      );
    }}
  </PetsContext.Consumer>
);

Pet.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      petsId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Pet;
