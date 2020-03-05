import React from 'react';

import styles from './card.module.scss';

const Card: React.FC = () => {
  const card = {
    id: "22971",
    title: "Dois Irmãos - Uma Jornada Fantástica",
    images: [
      {
        url: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-cartaz.jpg",
        type: "PosterPortrait"
      },
      {
        url: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/22971-destaque.jpg",
        type: "PosterHorizontal"
      }
    ],
    completeTags: [{ name: "Estreia Hoje", background: "", color: "" }],
    tags: ["Em Alta"]
  }

  const image = card.images.filter(item => item.type === 'PosterPortrait')[0];
  const tags = card.tags;

  if (card.completeTags.length > 0) {
    tags.push(card.completeTags[0].name);
  }

  return (
    <article className={styles.card}>
      <a className={styles['card-link']} href="">
        <figure className={styles['card-imageWrap']}>
          <img className={styles['card-image']} src={image.url} />
          <ul className={styles['card-tagsList']}>
            {tags?.map(item => {
              return (
                <li className={styles['card-tagsList-item']}>
                  <span className={styles['card-tagsList-tag']}>{item}</span>
                </li>
              )
            })}
          </ul>
        </figure>
        <strong className={styles['card-title']}>{card.title}</strong>
      </a>
    </article>
  )
}

export default Card;
