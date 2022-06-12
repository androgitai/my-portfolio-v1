import { Fragment } from 'react';
import styles from '../../styles/components/load/welcome.module.scss';

const Welcome = () => {
  return (
    <Fragment>
      <h2 className={styles.welcomeTop}>Welcome to</h2>
      <h2 className={styles.welcomeBot}>
        <span>byAndro</span>
      </h2>
    </Fragment>
  );
};

export default Welcome;
