import React from 'react';
import styles from '../../styles/components/conatct/contact-heading.module.scss';

const ContactHeading = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.contactHeading}>
        <h1>Contact</h1>
        <div className='spacer  secondary'></div>
        <div className={`quote ${styles.quote}`}>
          <p>
            “Strive not to be a success, but rather to be of
            <span className='primary'> value</span>.” <br />
            <small>~ Albert Einstein</small>
          </p>
        </div>
      </section>
      <div className='line fit secondary'></div>
    </div>
  );
};

export default ContactHeading;
