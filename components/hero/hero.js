import Image from 'next/image';
import styles from '../../styles/components/hero.module.scss';
import Orbit from './orbit';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWelcome}>
        <h1 className={styles.welcomeTop}>Welcome to</h1>
        <h1 className={styles.welcomeBot}>
          <span>byAndro</span>
        </h1>
      </div>
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
