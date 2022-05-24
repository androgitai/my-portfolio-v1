import { useInView } from 'react-intersection-observer';

import styles from '../../styles/components/conatct/contact-heading.module.scss';

const ContactHeading = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className={styles.wrapper}>
      <section
        className={headingInView ? `${styles.contactHeading} floatFromTop` : 'hidden'}
        ref={headingRef}
      >
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
