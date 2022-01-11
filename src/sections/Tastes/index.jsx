import React from 'react';
import Block from './Block';
import styles from './styles.module.scss';

const Tastes = () => {
  return(
    <div className={styles.tastes}>
      <div className={styles.containerTastes}>
        <Block title={'New tastes'} />
        <Block title={'New spices'} />
        <Block title={'New dishes'} />
      </div>
    </div>
  )
}

export default Tastes;