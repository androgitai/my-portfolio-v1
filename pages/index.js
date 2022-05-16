import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/hero/hero';
import SectionAbout from '../components/home/section-about';
import SectionProjects from '../components/home/section-projects';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <SectionAbout />
      <SectionAbout />
      <SectionProjects />
      {/* <section style={{ paddingTop: '100rem' }}></section> */}
    </Fragment>
  );
};

export default HomePage;
