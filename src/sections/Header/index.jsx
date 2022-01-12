import React, {useState} from 'react';
import styles from './styles.module.scss';
import Main from './Main';
import Menu from './Menu';

const Header = () => {
  const items = [{value:'welcom', href: '#'}, {value:'menu', href: '#menu'},{value:'events', href: '#events'}, {value:'contact', href: '#contact'}]
  const [activeMenu, setActiveMenu] = useState(false)

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
          <a href="#" className={styles.logo}>brunch</a>
          
        <Menu items={items} active={activeMenu} setActive={setActiveMenu}/>

        <div className={styles.burger} onClick={() => setActiveMenu(!activeMenu)}>
          <span></span>
        </div>

      </div>
      <Main/>
    </div>
  );
};

export default Header;