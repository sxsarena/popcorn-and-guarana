import React from 'react';

import { IMovie } from '../../store/movies/types';

import styles from './card.module.css';

interface OwnProps {
  movie?: IMovie
}

const Card: React.FC<OwnProps> = ({ movie }: OwnProps) => {
  const addDefaultSrc = (evt: React.ChangeEvent<HTMLImageElement>) => {
    evt.target.src = 'https://ingresso-a.akamaihd.net/catalog/Content/img/placeholder-movie-image-4359a6ad34.jpg';
  }

  return (
    <article className={styles.card}>
      <a className={styles['card-link']} href={`/filme/`}>
        <figure className={styles['card-imageWrap']}>
          <img className={styles['card-image']} src={movie?.thumb} alt={movie?.title} onError={addDefaultSrc} />
          <ul className={styles['card-tagsList']}>
            {movie?.genres?.map(item => {
              return (
                <li className={styles['card-tagsList-item']}>
                  <span className={styles['card-tagsList-tag']}>{item}</span>
                </li>
              )
            })}
          </ul>
        </figure>
        <strong className={styles['card-title']}>{movie?.title}</strong>
      </a>
    </article>
  )
}

export default Card;
