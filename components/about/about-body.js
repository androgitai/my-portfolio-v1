import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import styles from '../../styles/components/about/about-body.module.scss';
import Button from '../ui/button';

const AboutBody = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: personalRef, inView: personalInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: techDetailsRef, inView: techDetailsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className={styles.wrapper}>
      <section className={styles.aboutBody}>
        <div
          className={titleInView ? `${styles.aboutBodyTitle} floatFromBot` : 'hidden'}
          ref={titleRef}
        >
          <h2>
            Andras <span className='secondary'>Kelemen</span>
          </h2>
          <p>
            <span className='primary'>byAndro</span>
          </p>
          <div className='line secondary center'></div>
        </div>

        <div className={styles.aboutBodyPersonal} ref={personalRef}>
          <div className={personalInView ? `${styles.aboutText} slideInLeft` : 'hidden'}>
            <p>
              I started as a selft-taught developer in 2020 and created the
              <span className='primary'> byAndro</span> brand in 2021 to give a better identity to
              my work. My goal was to make beautiful, performant and easy to use sites and web
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
              message on the contact page
            </p>
          </div>
          <div
            className={
              personalInView ? `${styles.portrait} slideInRight` : `${styles.portrait} hidden`
            }
          >
            <Image src='/portrait.jpg' width='1200px' height='1200px' objectFit='cover' />
          </div>
        </div>
        <div
          className={
            techDetailsInView ? `${styles.skills} floatFromBot` : `${styles.skills} hidden`
          }
          ref={techDetailsRef}
        >
          <h3>
            Technical details <div className='line secondary center'></div>
          </h3>
          <p>
            I mainly work on the front-end with <img src='/icons/tech/javascript.svg' alt='js' />
            Javascript and <img src='/icons/tech/react-icon.svg' alt='react.js' />
            React/
            <img src='/icons/tech/nextjs.svg' alt='next.js' />
            Next but picking up <img src='/icons/tech/nodejs.svg' alt='node.js' />
            Node.js and <img src='/icons/tech/typescript.png' alt='typescript' />
            TypeScript alongside <img src='/icons/tech/mongodb.png' alt='mongoDB' />
            MongoDB and <img src='/icons/tech/express.png' alt='express' />
            Express to complete the MERN stack as I am really interested in the back-end as well and
            for testing I use <img src='/icons/tech/jest.svg' alt='jest' />
            Jest.
          </p>
          <p>
            Since I started using <img src='/icons/tech/sass.svg' alt='sass' />
            Sass I really enjoyed the versatility you can achieve with it and for CSS libaries I
            really like <img src='/icons/tech/tailwind.png' alt='tailwind' />
            Tailwind alongside <img src='/icons/tech/bootstrap.png' alt='bootstrap' />
            Bootstrap.
          </p>
        </div>
      </section>
      <div className={styles.control}>
        <h3>Let my projects speak for themselves!</h3>
        <Link href='/projects'>
          <a>
            <Button btnStyle='secondary'>See projects &#8811;</Button>
          </a>
        </Link>
      </div>
      <div className='line fit secondary'></div>
    </div>
  );
};

export default AboutBody;
