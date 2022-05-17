import { Fragment } from 'react';
import styles from '../../styles/components/home/section-about.module.scss';

const SectionAbout = () => {
  return (
    <Fragment>
      <section className={styles.about}>
        <div className='quote'>
          <q>
            <span className='primary'>Knowledge</span> is power
          </q>
          <div className='spacer center primary'></div>
        </div>
        <h3>A little bit about me..</h3>
        <div className='spacer primary'></div>
        <div className={styles.info}>
          <p>
            A never ending passion for computers, technology, maths and science. Programming
            combines all of them together so I can create beautiful, performant and cutting edge web
            applications as a web developer today. My main focus is JavaScript based technologies,
            really enjoy working with React, Next.js and Node.js but always looking out for
            different languages and frameworks to be dived into. <br />
            <br /> Let's the make the web alive!
          </p>
          <div className={styles.icons}>
            <img src='/icons/tech/javascript.svg' alt='js' />
            <img src='/icons/tech/nextjs.svg' alt='next.js' />
            <img src='/icons/tech/react-icon.svg' alt='react.js' />
            <img src='/icons/tech/nodejs.svg' alt='node.js' />
          </div>
        </div>
        <div className={styles.tech}>
          <h3>My aim for my projects..</h3>
          <div className='spacer primary'></div>
          <div className={styles.techGrid}>
            <div className={styles.techGridItem}>
              <img src='/icons/sections/speedometer.png' alt='speed' />
              <h4>Fast</h4>
              <p>
                Fast load times and quick interaction are essential and it is one of the my highest
                priorities
              </p>
            </div>
            <div className={styles.techGridItem}>
              <img src='/icons/sections/smartphone.png' alt='phone' />
              <h4>Responsive</h4>
              <p>
                The layout will work on any device, big or small whether it is mobile or desktop
                first design
              </p>
            </div>
            <div className={styles.techGridItem}>
              <img src='/icons/sections/easy.png' alt='easy' />
              <h4>Intuitive</h4>
              <p>
                Any website or webapp has to be easy to use with an intuitive UX/UI no matter who
                uses them
              </p>
            </div>
            <div className={styles.techGridItem}>
              <img src='/icons/sections/dynamic.png' alt='dynamic' />
              <h4>Dynamic</h4>
              <p>
                Websites just come alive with the right amount of dyanmic content and makes users
                stay more and visit more
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionAbout;
