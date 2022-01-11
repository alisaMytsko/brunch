import React from 'react';
import styles from '../styles.module.scss';

const Block = ({title, price}) => {
  return(
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do</p>
      <span>{price}</span>
    </div>
  )
}

export default Block