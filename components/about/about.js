import AboutHeading from './about-heading';
import AboutBody from './about-body';
import styles from '../../styles/components/about/about.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <AboutHeading />
      <AboutBody />
    </div>
  );
};

export default About;
