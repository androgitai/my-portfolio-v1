import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/hero/hero';
import Welcome from '../components/load/welcome';
import styles from '../styles/pages/HomePage.module.scss';

const HomePage = () => {
  return (
    <Fragment>
      <Welcome />
      <Hero />
      <section>
        {/* <div class='quote'>
          <q>
            <span class='text-secondary'>Knowledge</span> is power
          </q>
        </div>
        <div class='skill-grid'>
          <div class='grid-item'>
            <h2>Technologies</h2>
          </div>
          <div class='grid-item grid-item-list'>
            <div>
              <h3>Fast</h3>
              <p>
                Fast load times and quick interaction are essential and it is one of the my highest
                priorities
              </p>
            </div>
            <div>
              <h3>Responsive</h3>
              <p>
                The layout will work on any device, big or small whether it is mobile or desktop
                first design
              </p>
            </div>
            <div>
              <h3>Intuitive and accessible</h3>
              <p>
                Any website or webapp has to be easy to use with an intuitive UX/UI no matter who
                uses them
              </p>
            </div>
            <div>
              <h3>Dynamic</h3>
              <p>
                Websites just come alive with the right amount of dyanmic content and makes users
                stay more and visit more
              </p>
            </div>
          </div>
        </div> */}
      </section>
    </Fragment>
  );
};

export default HomePage;
