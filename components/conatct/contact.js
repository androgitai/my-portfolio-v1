import React from 'react';
import styles from '../../styles/components/conatct/conatct.module.scss';
import ContactForm from '../form/contact-form';

const Contact = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.contact}>
        <h1>Contact</h1>
        <div className='line secondary'></div>
        <ContactForm />
      </section>
    </div>
  );
};

export default Contact;
