import React, { Component } from 'react';

import Header from '../../components/header';
import SVG from '../../components/svg';

import styles from './app.module.scss';

class AppLayout extends Component {
  render() {
    return (
      <div>
        <SVG />
        <Header />
        <div className={styles.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default AppLayout;
