import React from 'react';
import styles from '../styles.module.scss'

const Block = ({title, circle}) => {
  return(
    <div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperCircle}>
          <div className={styles.circle}>{circle}</div>
        </div> 
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tation omne ullamco laboris ut aligolore</p>
      </div>
    </div>
  )
}

export default Block