import { Fragment } from 'react';
import styles from '../../styles/components/home/section-about.module.scss';

const SectionAbout = () => {
  return (
    <Fragment>
      <section className='quote'>
        <q>
          <span>Knowledge</span> is power
        </q>
        <div className='spacer center'></div>
      </section>
      <section className={styles.about}>
        <h3>A little bit about me..</h3>
        <div className='spacer'></div>
        <div className={styles.info}>
          <p>
            I always had a passion for computers, technology, maths and science. My to work in a
            field involving these topics is a dream come true. My main focus is JavaScript based
            technologies and I really enjoy working with React, Next.js and Node.js
          </p>
          <div className={styles.icons}>
            <img src='/icons/javascript.svg' alt='' />
            <img src='/icons/nextjs.svg' alt='' />
            <img src='/icons/react-icon.svg' alt='' />
            <img src='/icons/nodejs.svg' alt='' />
          </div>
        </div>
      </section>
      <section className={styles.tech}>
        <h3>My aim for my projects..</h3>
        <div className='spacer'></div>
        <div className={styles.techGrid}>
          <div className={styles.techGridItem}>
            <i className='fas fa-tachometer-alt fa-3x'></i>
            <h4>Fast</h4>
            <p>
              Fast load times and quick interaction are essential and it is one of the my highest
              priorities
            </p>
          </div>
          <div className={styles.techGridItem}>
            <i className='fas fa-mobile-alt fa-3x'></i>
            <h4>Responsive</h4>
            <p>
              The layout will work on any device, big or small whether it is mobile or desktop first
              design
            </p>
          </div>
          <div className={styles.techGridItem}>
            <i className='far fa-compass fa-3x'></i>
            <h4>Intuitive</h4>
            <p>
              Any website or webapp has to be easy to use with an intuitive UX/UI no matter who uses
              them
            </p>
          </div>
          <div className={styles.techGridItem}>
            <i className='fas fa-space-shuttle fa-3x'></i>
            <h4>Dynamic</h4>
            <p>
              Websites just come alive with the right amount of dyanmic content and makes users stay
              more and visit more
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionAbout;
