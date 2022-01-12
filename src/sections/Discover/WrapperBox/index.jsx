import React from 'react';
import styles from '../styles.module.scss';


const WrapperBox = ({icon, title, price}) => {
  return(
    <div className={styles.boxItem}>
      <div className={styles.circle}>
        <img src={icon} alt="" />
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do oculiis <span>{price}</span></p>
      </div>
    </div>
  )
}

export default WrapperBox;