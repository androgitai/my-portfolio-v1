import React from 'react';
import styles from '../../styles/components/conatct/contact-body.module.scss';
import ContactForm from '../form/contact-form';

const ContactBody = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.contactBody}>
        <h3>
          Contact Me to start your next project!
          <div className='line secondary center'></div>
        </h3>
        <ContactForm />
      </section>
      <div className='line secondary fit'></div>
    </div>
  );
};

export default ContactBody;
