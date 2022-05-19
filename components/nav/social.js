import styles from '../../styles/components/nav/social.module.scss';

const Social = props => {
  return (
    <div className={`${styles[props?.place]}`}>
      <div className={styles.icons}>
        <a href='https://github.com/androgitai' target='_blank'>
          <img src='/icons/social/github2.png' alt='github' />
        </a>
        <a href='https://www.facebook.com/byAndro1' target='_blank'>
          <img src='/icons/social/facebook.png' alt='facebook' />
        </a>
        <a href='https://twitter.com/home' target='_blank'>
          <img src='/icons/social/twitter.png' alt='twitter' />
        </a>
        <a href='https://www.linkedin.com/in/andras-kelemen-9a99b01b9/' target='_blank'>
          <img src='/icons/social/linkedin.png' alt='linkedin' />
        </a>
      </div>
    </div>
  );
};

export default Social;
