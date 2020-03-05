import React from 'react';

import Header from '../../components/header';
import SVG from '../../components/svg';

import styles from './app.module.scss';

interface Props {
  children: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children }: Props) => (
  <div>
    <SVG />
    <Header />
    <div className={styles.main}>
      {children}
    </div>
  </div>
);

export default AppLayout;
