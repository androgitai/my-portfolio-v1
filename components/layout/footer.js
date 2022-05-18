import styles from '../../styles/components/layout/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <img src='/icons/social/github2.png' alt='github' />
        <img src='/icons/social/facebook.png' alt='facebook' />
        <img src='/icons/social/twitter.png' alt='twitter' />
        <img src='/icons/social/linkedin.png' alt='linkedin' />
      </div>
      <p>Copyright&copy; 2022 Andras Kelemen - byAndro</p>
    </footer>
  );
};

export default Footer;
