import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from '../components/css/Pets.module.css';
import petColection from '../components/pets.json';

export default class Pets extends Component {
  state = { pets: [] };

  componentDidMount() {
    this.setState({ pets: petColection });
  }

  render() {
    const { pets } = this.state;

    return (
      <>
        <h2 className={style.titlePets}>Available pets</h2>
        <div className={style.mainPets}>
          <ul className={style.listPets}>
            {pets.map(pet => (
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
            ))}
          </ul>
        </div>
      </>
    );
  }
}
