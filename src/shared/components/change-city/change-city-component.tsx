import React, { useState } from 'react';

import createHistory from '../../store/history';

import styles from './change-city.module.css';

interface IProps {
  states: {
    id: string,
    name: string
  }[],
  cities: {
    id: string,
    name: string,
    slug: string,
    state: string
  }[],
  currentCityID?: string,
  changeCity(cityID: string): void,
  loadRequest(cityID: string): void
  onSubmit(): void
}

const history = createHistory();

const ChangeCity: React.FC<IProps> = ({ states, cities, currentCityID, changeCity, loadRequest, onSubmit } : IProps) => {
  const [stateID, setStateID] = useState('');
  const [cityID, setCityID] = useState('');

  const handleState = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setCityID('');
    setStateID(evt.target.value);
  };
  const handleCity = (evt: React.ChangeEvent<HTMLSelectElement>) => setCityID(evt.target.value);

  const handleSubmit = (cityID: string) => {
    return () => {
      if (cityID && cityID !== '') {
        changeCity(cityID);
        loadRequest(cityID);

        history.push(`/?city=${cities?.filter(c => c.id === cityID)[0].slug}`);
        onSubmit();
      }
    };
  }

  return (
    <div className={styles['changeCity']}>
      <h3 className={styles['changeCity-title']}>Você está em: {cities.filter(city => city.id === currentCityID)[0].name}</h3>
      <form>
        <p className={styles['changeCity-group']}>
          <span className={styles['changeCity-selectWrap']}>
            <select className={styles['changeCity-select']} onChange={handleState}>
              <option selected={stateID === ''}>Estado</option>
                {states?.map(state => <option value={state.id} selected={state.id === stateID}>{state.name}</option>)}
            </select>
          </span>
        </p>
        <p className={styles['changeCity-group']}>
          <span className={styles['changeCity-selectWrap']}>
            <select className={styles['changeCity-select']} onChange={handleCity}>
              <option selected={cityID === ''}>Cidade</option>
              {cities?.filter(c => c.state === stateID).map(city => <option value={city.id}>{city.name}</option>)}
            </select>
          </span>
        </p>
        <p>
          <button className={styles['changeCity-button']} type="button" onClick={handleSubmit(cityID)}>Trocar Cidade</button>
        </p>
      </form>
    </div>
  )
}

export default ChangeCity;
