import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './filter.module.css';

interface IProps {
  filters?: {
    name: string
    checked?: boolean
  }[]
}

interface IState {
  list?: {
    name: string
    checked?: boolean
  }[];
}

class Filter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      list: props.filters
    }
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.filters !== this.props.filters) {
      this.setState({ list: this.props.filters });
    }
  }

  handleChange = (name: string) => {
    return () => this.setState({
      list: this.state.list?.map(item => {
        if (item.name === name) {
          item.checked = !item.checked;
        }
        return item;
      })
    });
  };

  render() {
    const { list } = this.state;

    return (
      <div className={styles.filterList}>
        <h2 className={styles['filterList-title']}>Filmes</h2>
        <ul className={styles['filterList-list']}>
          {list?.map(item => {
            return (
              <li className={styles['filterList-item']} key={item.name}>
                <label className={styles['filterList-label']}>
                  <input type="checkbox" className={styles['filterList-input']} onChange={this.handleChange(item.name)} />
                  <span className={classnames(styles['filterList-checkbox'], {
                    [styles['filterList-checkbox--checked']]: item.checked
                  })}></span>
                  <span className={styles['filterList-text']}>{item.name}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
}

export default Filter;
