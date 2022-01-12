import React from 'react';
import TitleComponent from '../Plate/TitleComponent';
import Wrapper from './Wrapper';
import styles from './styles.module.scss';
import picture1 from '../../ui/images/footer1.png'
import picture2 from '../../ui/images/footer2.png'
import picture3 from '../../ui/images/footer3.png'

const Footer = () => {
  return(
    <div className={styles.footer}>
      <TitleComponent/>
      <div className={styles.wrapperFooter}>
        <Wrapper picture={picture1} data={'Food / 16th March, 2019'}/>
        <Wrapper picture={picture2} data={'Spices / 16th March, 2019'}/>
        <Wrapper picture={picture3} data={'Chiken Curry / 16th March, 2019'}/>
      </div>
    </div>
  )
}

export default Footer;