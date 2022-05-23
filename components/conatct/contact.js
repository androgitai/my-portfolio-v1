import React from 'react';
import styles from '../../styles/components/conatct/contact.module.scss';
import ContactForm from '../form/contact-form';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.contact}>
        <h1>Contact</h1>
        <div className='spacer  secondary'></div>
        <ContactForm />
      </section>
      <div className='line secondary fit'></div>
    </div>
  );
};

export default Contact;
