import { Fragment } from 'react';
import styles from '../../styles/components/home/section-contact.module.scss';
import ContactForm from '../form/contact-form';

const SectionContact = () => {
  return (
    <section className={styles.contact}>
      <div className='quote'>
        <p>
          "What you can do <span className='secondary'>today</span> ,
        </p>
        <p>
          don't leave it for <span className='secondary'>tomorrow</span> "
        </p>
        <div className='spacer center secondary'></div>
      </div>
      <h2>
        Contact Me<div className='spacer secondary'></div>
      </h2>
      <ContactForm />
      <h3>Let's start your next project today!</h3>
      <div className='spacer center secondary'></div>
      <div></div>
    </section>
  );
};

export default SectionContact;
