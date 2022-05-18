import styles from '../../styles/components/nav/social.module.scss';

const Social = () => {
  return (
    <div className={styles.social}>
      <div className={styles.icons}>
        <img src='/icons/social/github2.png' alt='github' />
        <img src='/icons/social/facebook.png' alt='facebook' />
        <img src='/icons/social/twitter.png' alt='twitter' />
        <img src='/icons/social/linkedin.png' alt='linkedin' />
      </div>
    </div>
  );
};

export default Social;
