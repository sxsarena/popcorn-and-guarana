import React from 'react';

import styles from './search-bar.module.scss';

const SearchBar: React.FC = () => {
  return (
    <form className={styles.searchBar}>
      <fieldset className={styles['searchBar-box']}>
        <legend>Formulário de busca</legend>
        <div className={styles['searchBar-group']}>
          <input className={styles['searchBar-input']} type="text" placeholder="Pesquise por filmes, cinemas..." />
          <button className={styles['searchBar-submit']} type="submit">
            <svg className={styles['searchBar-icon']} width="24" height="24">
              <use xlinkHref="#icon-search"></use>
            </svg>
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default SearchBar;
