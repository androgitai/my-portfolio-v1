import styles from '../../styles/components/home/section-about.module.scss';
import { useInView } from 'react-intersection-observer';

const SectionAbout = () => {
  const { ref: quoteRef, inView: quoteInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: infoRef, inView: infoInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: aimRef, inView: aimInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className={styles.wrapper}>
      <section className={styles.about}>
        <div className={quoteInView ? 'quote floatFromBot' : 'quote hidden'} ref={quoteRef}>
          <q>
            <span className='primary'>Knowledge</span> is power
          </q>
          <small>~ Francis Bacon</small>
          <div className='spacer center primary'></div>
        </div>
        <div className={aboutInView ? 'floatFromBot' : 'hidden'} ref={aboutRef}>
          <h3>A little bit about me..</h3>
          <div className='spacer primary'></div>
        </div>
        <div className={styles.info} ref={infoRef}>
          <div className={infoInView ? `${styles.infoText} slideInLeft` : 'hidden'}>
            <p>
              A never ending passion for computers, technology, maths and science. Programming
              combines all of them together so I can create beautiful, performant and cutting edge
              web applications as a web developer today. My main focus is JavaScript based
              technologies, really enjoy working with React, Next.js but picking up Typescript and
              Node.js as well. I am always looking out for different languages and frameworks to be
              dived into. I am driven to the make the web alive!
            </p>
            <div className='line primary'></div>
          </div>
          <div className={`${styles.icons} ${infoInView ? 'slideInRight' : 'hidden'}`}>
            <img src='/icons/tech/javascript.svg' alt='js' />
            <img src='/icons/tech/nextjs.svg' alt='next.js' />
            <img src='/icons/tech/react-icon.svg' alt='react.js' />
            <img src='/icons/tech/typescript.svg' alt='node.js' />
          </div>
          <div className={`${styles.tech} ${aimInView ? 'floatFromBot' : 'hidden'} `} ref={aimRef}>
            <div className={styles.techGrid}>
              <div className={styles.techGridItem}>
                <img src='/icons/sections/speedometer.png' alt='speed' />
                <h4>Fast</h4>
                <p>
                  Fast load times and quick interaction are essential and it is one of the my
                  highest priorities
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
                  Websites with the right amount of dyanmic content makes them alive, users stay
                  more and visit more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionAbout;
