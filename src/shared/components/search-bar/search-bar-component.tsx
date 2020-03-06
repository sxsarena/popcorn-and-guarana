import React, { Fragment, useState } from 'react';
import classnames from 'classnames';

import styles from './search-bar.module.css';

interface IProps {
  searchMovie(term: string): void
}

const SearchBar: React.FC<IProps> = ({ searchMovie }: IProps) => {
  const [showMobile, setShowMobile] = useState(false);
  const [term, setTerm] = useState('');

  const handleClick = () => {
    setShowMobile(!showMobile);
  };

  const handleTerm = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(evt.target.value);
  };

  const handleSearch = (term: string) => {
    return () => searchMovie(term);
  };

  return (
    <Fragment>
      <button className={classnames(styles['searchBar-button--mobile'], {
        [styles['searchBar-button--active']]: showMobile
      })} type="button" onClick={handleClick}>
        <svg className={styles['searchBar-icon']} width="24" height="24">
          <use xlinkHref="#icon-search"></use>
        </svg>
      </button>
      <form className={classnames(styles.searchBar, {
        [styles['searchBar--dialog']]: showMobile
      })}>
        <fieldset className={styles['searchBar-box']}>
          <legend>Formulário de busca</legend>
          {showMobile && <h3 className={styles['searchBar-title']}>O que você procura?</h3>}
          <div className={styles['searchBar-group']}>
            <input className={styles['searchBar-input']} type="text" placeholder="Pesquise por filmes, cinemas..." onChange={handleTerm}  />
            <button className={styles['searchBar-button']} type="button" onClick={handleSearch(term)} >
              <svg className={styles['searchBar-icon']} width="24" height="24">
                <use xlinkHref="#icon-search"></use>
              </svg>
            </button>
          </div>
        </fieldset>
      </form>
    </Fragment>
  );
};

export default SearchBar;
