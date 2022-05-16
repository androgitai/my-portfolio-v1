import styles from '../../styles/components/hero.module.scss';
import Orbit from '../ui/orbit';
import Welcome from '../load/welcome';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Welcome />
      <div className={styles.heroTxt}>
        <h2>
          Hi! I'm <span>Andras Kelemen</span>
        </h2>
        <div className={styles.line}></div>
        <p>Web Developer &#38; Entrepreneur</p>
      </div>
      <Orbit />
    </section>
  );
};

export default Hero;
