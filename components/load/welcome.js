import { Fragment } from 'react';
import styles from '../../styles/components/load/welcome.module.scss';

const Welcome = () => {
  return (
    <Fragment>
      <h1 className={styles.welcomeTop}>Welcome to</h1>
      <h1 className={styles.welcomeBot}>
        <span>byAndro</span>
      </h1>
    </Fragment>
  );
};

export default Welcome;
