import { useInView } from 'react-intersection-observer';

import styles from '../../styles/components/projects/projects-heading.module.scss';

const ProjectsHeading = () => {
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div className={styles.wrapper}>
      <section
        className={headingInView ? `${styles.projectsHeading} floatFromTop` : 'hidden'}
        ref={headingRef}
      >
        <div>
          <h1>My projects</h1>
          <div className='spacer primary'></div>
        </div>
        <div className={`quote ${styles.quote}`}>
          <p>
            “Simplicity is the soul of
            <span className='secondary'> efficiency</span> .” <br />
            <small>~ Austin Freeman</small>
          </p>
        </div>
      </section>
      <div className='line fit primary'></div>
    </div>
  );
};

export default ProjectsHeading;
