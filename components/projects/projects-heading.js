import styles from '../../styles/components/projects/projects-heading.module.scss';

const ProjectsHeading = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.projectsHeading}>
        <div>
          <h1>My projects</h1>
          <div className='spacer primary'></div>
        </div>
        <div className={`quote ${styles.quote}`}>
          <p>
            “Simplicity is the soul of
            <span className='primary'> efficiency</span> .” <br />
            <small>~ Austin Freeman</small>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProjectsHeading;
