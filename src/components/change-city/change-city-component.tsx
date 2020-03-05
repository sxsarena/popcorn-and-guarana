import React from 'react';

import styles from './change-city.module.scss';

interface Props {
  currentCity?: string
}

const ChangeCity: React.FC<Props> = (Props) => {
  return (
    <div className={styles['changeCity']}>
      <h3 className={styles['changeCity-title']}>Você está em: São Paulo</h3>
      <form>
        <p className={styles['changeCity-group']}>
          <span className={styles['changeCity-selectWrap']}>
            <select className={styles['changeCity-select']}>
              <option>Estado</option>
              <option value="2">Rio Janeiro</option>
              <option value="1">São Paulo</option>
            </select>
          </span>
        </p>
        <p className={styles['changeCity-group']}>
          <span className={styles['changeCity-selectWrap']}>
            <select className={styles['changeCity-select']}>
              <option>Cidade</option>
              <option>Rio Janeiro</option>
              <option>São Paulo</option>
            </select>
          </span>
        </p>
        <p>
          <button className={styles['changeCity-button']} type="submit">Trocar Cidade</button>
        </p>
      </form>
    </div>
  )
}

export default ChangeCity;
