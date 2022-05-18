import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/hero/hero';
import SectionAbout from '../components/home/section-about';
import SectionContact from '../components/home/section-contact';
import SectionProjects from '../components/home/section-projects';

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
    </Fragment>
  );
};

export default HomePage;
