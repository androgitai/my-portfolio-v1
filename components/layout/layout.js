import { Fragment } from 'react';
import MainHeader from './main-header';
import styles from '../../styles/components/layout/layout.module.scss';
import Footer from './footer';

const Layout = props => {
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.layout}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
