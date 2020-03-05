import React from 'react';

import { IMovie } from '../../store/movies/types';

import styles from './card.module.css';

interface OwnProps {
  movie?: IMovie
}

const Card: React.FC<OwnProps> = ({ movie }: OwnProps) => {
  // const image?: string = movie?.images.filter(item => item.type === 'PosterPortrait')[0];

  console.log(movie?.images);

  return (
    <article className={styles.card}>
      <a className={styles['card-link']} href={`/filme/`}>
        <figure className={styles['card-imageWrap']}>
          <img className={styles['card-image']} src={'#'} alt={movie?.title} />
          <ul className={styles['card-tagsList']}>
            {movie?.genres.map(item => {
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
