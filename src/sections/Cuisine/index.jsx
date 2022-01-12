import React from 'react';
import styles from './styles.module.scss';

const Cuisine = () => {
  return(
    <div className={styles.cuisine} id='events'>
      <p className={styles.title}>Traditional cuisine made easy</p>
      <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
      <div className={styles.boxCircle}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
      <div className={styles.newNavigation}>
        <a href="#">Meals</a>
        <a href="#">Spices</a>
        <a href="#">Book</a>
        <a href="#">Gallery</a>
      </div>
    </div>
  )
}

export default Cuisine;