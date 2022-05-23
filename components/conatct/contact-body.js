import React from 'react';
import styles from '../../styles/components/conatct/contact-body.module.scss';
import ContactForm from '../form/contact-form';

const ContactBody = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.contactBody}>
        <ContactForm />
      </section>
      <div className='line secondary fit'></div>
    </div>
  );
};

export default ContactBody;
