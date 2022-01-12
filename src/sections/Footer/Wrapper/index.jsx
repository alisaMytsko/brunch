import React from 'react';
import styles from '../styles.module.scss';


const Footer = ({picture, data}) => {
  return(
    <div className={styles.wrapperBox}>
      <img src={picture} alt="" />
      <div className={styles.textBox}>
        <p className={styles.date}>{data}</p>
        <p className={styles.title}>Lorem ipsum dolor sit</p>
        <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
        <button>Read more</button>
      </div>
    </div>
  )
}

export default Footer;