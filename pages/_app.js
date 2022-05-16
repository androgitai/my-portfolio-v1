import Head from 'next/head';
import Script from 'next/script';
import { Fragment } from 'react';
import Layout from '../components/layout/layout';

import '../styles/style.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>byAndro</title>
        <script
          rel='stylesheet'
          src='https://kit.fontawesome.com/ba0aa7f5da.js'
          crossorigin='anonymous'
        ></script>
        <meta
          name='viewport'
          content='initial-scale=1.0,minimum-scale=1.0, maximum-scale = 2.0, width=device-width'
        />
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
