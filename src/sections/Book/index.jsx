import React from 'react'; 
import styles from './styles.module.scss';

const Book = () => {
  return(
    <div className={styles.book}>
      <h4>Book here</h4>
      <div className={styles.bookingContainer}>
        <div className={styles.wrapperApplication}>
          <div>
            <p>How many people?</p>
            <input type="text" placeholder='2 people'/>
          </div>
          <div>
            <p>Name</p>
            <input type="text" placeholder='Full name'/>
          </div>
        </div>

        <div className={styles.wrapperApplication}>
          <div>
            <p>When is your date?</p>
            <input type="text" placeholder='17-02-2022'/>
          </div>
          <div>
            <p>Email</p>
            <input type="text" placeholder='Your email address'/>
          </div>
        </div>

        <div className={styles.wrapperApplication}>
          <div>
            <p>Time</p>
            <input type="text" placeholder='10:00am'/>
          </div>
          <div>
            <p>Phone</p>
            <input type="text" placeholder='Your phone' />
          </div>
        </div>
      </div>
      <button>submit</button>
    </div>
  )
}

export default Book;