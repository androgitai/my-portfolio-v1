import Head from 'next/head';
import { Fragment } from 'react';
import Layout from '../components/layout/layout';

import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>byAndro</title>
        <meta
          name='description'
          content='byAndro&copy;. My name is Andras `Andro` Kelemen and this is my portfolio. I am a web developer working with mainly JavaScript,React and Next Js'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
