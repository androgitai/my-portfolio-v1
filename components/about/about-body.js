import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/components/about/about-body.module.scss';
import Button from '../ui/button';

const AboutBody = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.aboutBody}>
        <div className={styles.aboutBodyTitle}>
          <h2>
            Andras <span className='secondary'>Kelemen</span>
          </h2>
          <p>
            <span className='primary'>byAndro</span>
          </p>
          <div className='line secondary center'></div>
        </div>

        <div className={styles.aboutBodyPersonal}>
          <div className={styles.aboutText}>
            <h4>Hello there!</h4>
            <p>
              I created the <span className='primary'>byAndro</span> brand in 2020 as a self-taught
              web developer. My goal was to make beautiful, performant and easy to use sites and web
              applications. I strive for provide value to people and businesses and help build their
              portfolio to make a bigger and better online presence.
            </p>
            <Button btnStyle='secondary'>
              <a href='/publicCV/CV.pdf' target='_blank'>
                Open CV &#8618;
              </a>
            </Button>
            <p>
              Contact at <strong className='secondary strong'>info@byandro.com</strong> or send me a
              message me on the contact page
            </p>
          </div>
          <div className={styles.portrait}>
            <Image src='/portrait.jpg' width='1200px' height='1200px' objectFit='cover' />
          </div>
        </div>

        <h3>
          Technical details <div className='line secondary center'></div>
        </h3>

        <div className={styles.skills}>
          <p>
            I mainly work on the front end with Javascript and React/Next but picking up Node.js
            alongside MongoDB and Express to complete the MERN stack as I am really interested in
            the back end as well.
          </p>
        </div>
      </section>
      <div className={styles.control}>
        <h3>Contact me and let's start your project today!</h3>
        <Link href='/contact'>
          <a>
            <Button btnStyle='secondary'>Let's go &#8811;</Button>
          </a>
        </Link>
      </div>
      <div className='line fit secondary'></div>
    </div>
  );
};

export default AboutBody;
