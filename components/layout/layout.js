import { Fragment } from 'react';
import MainHeader from './main-header';
import styles from '../../styles/components/layout/layout.module.scss';

const Layout = props => {
  return (
    <Fragment>
      <MainHeader />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
