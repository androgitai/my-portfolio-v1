import { useInView } from 'react-intersection-observer';

import styles from '../../styles/components/about/about-heading.module.scss';

const AboutHeading = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className={styles.wrapper}>
      <section
        className={headingInView ? `${styles.aboutHeading} floatFromTop` : 'hidden'}
        ref={headingRef}
      >
        <div>
          <h1>About me</h1>
          <div className='spacer secondary'></div>
        </div>
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

export default AboutHeading;
