import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './filter.module.css';

interface Props {
  types?: {
    id: number,
    name: string,
    alias: string,
    display: boolean
    checked?: boolean
  }[]
}

const Filter: React.FC<Props> = ({ types }: Props) => {
  const [list, setList] = useState(types);

  const handleChange = (id: number) => {
    return () => setList(list?.map(item =>{
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    }));
  };

  return (
    <div className={styles.filterList}>
      <h2 className={styles['filterList-title']}>Filmes</h2>
      <ul className={styles['filterList-list']}>
        {list?.map(item => {
          return (
            <li className={styles['filterList-item']} key={item.id}>
              <label className={styles['filterList-label']}>
                <input type="checkbox" className={styles['filterList-input']} onChange={handleChange(item.id)} />
                <span className={classnames(styles['filterList-checkbox'], {
                  [styles['filterList-checkbox--checked']]: item.checked
                })}></span>
                <span className={styles['filterList-text']}>{item.alias}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default Filter;
