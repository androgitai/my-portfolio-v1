import Head from 'next/head';
import { Fragment } from 'react';

import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>byAndro</title>
        <meta
          name='description'
          content='byAndro&copy; portfolio website. My name is Andras Kelemen. I am a web developer working with mainly JS,React,Next.js'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
