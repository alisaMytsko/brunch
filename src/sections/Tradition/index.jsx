import React from 'react';
import styles from './styles.module.scss';
import spoon from '../../ui/images/testi.png';

const Tradition = () => {
  return (
    <div className={styles.tradition}>
      <div className={styles.traditionContainer}>
        <div className={styles.wrapper}>
          <h2>Indian traditional flavours</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequuntur sapiente autem eaque recusandae voluptatibus ad itaque. Nisi, eos fugiat? Quis nemo vero, sint ut odio dignissimos eaque perferendis consequuntur debitis necessitatibus perspiciatis.</p>
        </div>
        <div className={styles.wrapper}>
          <img src={spoon} />
        </div>
      </div>
    </div>
  );
};

export default Tradition;