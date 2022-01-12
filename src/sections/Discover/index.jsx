import React from 'react';
import TitleComponent from '../Plate/TitleComponent';
import WrapperBox from './WrapperBox'
import styles from './styles.module.scss';
import icon1 from '../../ui/images/vector1.png';
import icon2 from '../../ui/images/vector2.png';
import icon3 from '../../ui/images/vector3.png';
import icon4 from '../../ui/images/vector4.png';
import icon5 from '../../ui/images/vector5.png';
import icon6 from '../../ui/images/vector6.png';


const Discover = () => {
  return(
    <div className={styles.discover}>
      <div className={styles.discoverContainer}>
        <TitleComponent title={'Discover'} subTitle={'our new menu'}/>
        <div className={styles.discoverMenu}>
          <WrapperBox icon={icon1} title={'Tikka Chicken'} price={'14,95$'}/>
          <WrapperBox icon={icon4} title={'soup of the day'} price={'7,95$'}/>
          <WrapperBox icon={icon2} title={'Plain papadums'} price={'1,95$'}/>
          <WrapperBox icon={icon5} title={'yellow curry'} price={'15,95$'}/>
          <WrapperBox icon={icon3} title={'chicken curry'} price={'12,95$'}/>
          <WrapperBox icon={icon6} title={'spicy meatballs'} price={'18,95$'}/>
        </div>
      </div>
    </div>
  )
}

export default Discover;