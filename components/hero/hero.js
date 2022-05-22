import styles from '../../styles/components/home/hero.module.scss';
import Orbit from '../ui/orbit';
import Welcome from '../load/welcome';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Welcome />
      <div className={styles.heroTxt}>
        <h1>
          Hi! I'm <span>Andras Kelemen</span>
        </h1>
        <div className={styles.line}></div>
        <p>Web Developer &#38; Entrepreneur</p>
      </div>
      <Orbit />
      <div className={`${styles.scroll}`}>
        <p>scroll me</p>
      </div>
    </section>
  );
};

export default Hero;
