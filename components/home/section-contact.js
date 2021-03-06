import { useInView } from 'react-intersection-observer';

import styles from '../../styles/components/home/section-contact.module.scss';
import ContactForm from '../form/contact-form';

const SectionContact = () => {
  const { ref: contactRef, inView: conatctInView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <div className={styles.wrapper}>
      <section
        className={conatctInView ? `${styles.contact} floatFromTop` : 'hidden'}
        ref={contactRef}
      >
        <div className='quote'>
          <q>
            Don't put off until tomorrow what you can do <span className='secondary'>today</span>
          </q>
          <small>~ Benjamin Franklin</small>
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
    </div>
  );
};

export default SectionContact;
