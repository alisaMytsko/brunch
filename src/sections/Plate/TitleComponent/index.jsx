import React from 'react';
import styles from './styles.module.scss';

const TitleComponent = ({title, subTitle}) => {
  return(
    <div className={styles.blockText}>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  )
}

export default TitleComponent;