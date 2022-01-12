import React from 'react';
import styles from './styles.module.scss';
import TitleComponent from './TitleComponent';
import pic1 from '../../ui/images/ind-1-270-274.png';
import pic2 from '../../ui/images/ind-2.png';
import pic3 from '../../ui/images/ind-3.png';
import pic4 from '../../ui/images/ind-4.png';
import pic5 from '../../ui/images/ind-5.png';
import pic6 from '../../ui/images/ind-6.png';
import Block from './Block';

const Plate = () => {
  return(
    <div className={styles.plate} id="menu" >
      <div className={styles.plateContainer}>
        <TitleComponent title={'India'} subTitle={'on your plate'}/>

        <div className={styles.blockPrice}>
          <img src={pic1} alt=""  />
          <Block title="tikka chiken" price="$14.95"/>
          <img src={pic2} alt=""  />
          <Block title="spicy wedges" price="$10.95"/>
          <Block title="chiken curry" price="$14.95"/>
          <img src={pic3} alt=""  />
          <Block title="red curry" price="$18.95"/>
          <img src={pic4} alt=""  />
          <img src={pic5} alt=""  />
          <Block title="spicy veggies" price="$11.95"/>
          <img src={pic6} alt=""  />
          <Block title="spicy mix" price="$11.95"/>
        </div>
        
      </div>
    </div>
  )
}

export default Plate;