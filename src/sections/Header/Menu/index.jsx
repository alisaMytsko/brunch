import React from 'react';
import styles from './styles.module.scss';

const Menu = ({items, active, setActive}) => {
  return(
    <div className={active ? styles.menuActive : styles.menuNone} onClick={() => setActive(false)}>
      <ul className={styles.navBar}>
        {items.map(item => 
          <li>
            <a href={item.href}>{item.value}</a>
          </li>
          )}
      </ul>
    </div>
  )
}

export default Menu