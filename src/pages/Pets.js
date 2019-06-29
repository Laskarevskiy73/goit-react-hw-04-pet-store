import React from 'react';
import { Link } from 'react-router-dom';
import { PetsContext } from '../components/PetColectionContext';
import style from '../components/css/Pets.module.css';

const Pets = () => (
  <>
    <h2 className={style.titlePets}>Available pets</h2>
    <div className={style.mainPets}>
      <ul className={style.listPets}>
        <PetsContext.Consumer>
          {context =>
            context.pets.map(pet => (
              <Link
                className={style.listItemPets}
                key={pet.id}
                to={`/pets/${pet.id}`}
                props={pet}
              >
                <li>
                  <img className={style.petsImage} src={pet.image} alt="pets" />
                  <p className={style.namePet}>{pet.name}</p>
                </li>
              </Link>
            ))
          }
        </PetsContext.Consumer>
      </ul>
    </div>
  </>
);

export default Pets;
