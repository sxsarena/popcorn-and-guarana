import React, { useState } from 'react';

import { IMovie } from '../../store/movies/types';

import styles from './card.module.css';

interface OwnProps {
  movie?: IMovie,
}

const Card: React.FC<OwnProps> = ({ movie }: OwnProps) => {
  if (!movie) {
    return null;
  }

  const [trailer, setTrailer] = useState('');

  const addDefaultSrc = (evt: React.ChangeEvent<HTMLImageElement>) => {
    evt.target.src = 'https://ingresso-a.akamaihd.net/catalog/Content/img/placeholder-movie-image-4359a6ad34.jpg';
  }

  const handleClick = (evt: React.SyntheticEvent<EventTarget>) => {
    const trailer = movie?.trailers && movie.trailers[movie.trailers.length-1];
    if (trailer) {
      evt.preventDefault();

      setTrailer(trailer.embeddedUrl);
      window.scrollTo(0, 0);
    }
  };

  const handleClose = () => {
    setTrailer('');
  }

  return (
    <article data-testid="card" className={styles.card}>
      <a className={styles['card-link']} href={movie?.siteURL} onClick={handleClick}>
        <figure className={styles['card-imageWrap']}>
          <img data-testid="card-image" className={styles['card-image']} src={movie?.thumb} alt={movie?.title} onError={addDefaultSrc} />
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
      {trailer !== '' &&
        <div className={styles['card-trailer']}>
          <div className={styles['card-trailer-container']}>
            <div className={styles['card-trailer-videoWrap']}>
              <a className={styles['card-trailer-link']} href={movie?.siteURL}>Mais detalhes > </a>
              <button className={styles['card-trailer-close']} onClick={handleClose}>Fechar</button>
              <iframe width="560" height="315" className={styles['card-trailer-video']} src={trailer}></iframe>
            </div>
          </div>
        </div>}
    </article>
  )
}

export default Card;
