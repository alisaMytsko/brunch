import React from 'react';
import styles from './styles.module.scss';

const Main = () => {
  return(
    <div className={styles.main}>
      <div className={styles.containerMain}>
        <h1>Brunch</h1>
        <p>full website</p>
        <button>read more</button>
      </div>
    </div>
  )
}

export default Main;