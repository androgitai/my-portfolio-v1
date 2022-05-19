import styles from '../../styles/components/layout/footer.module.scss';
import Social from '../nav/social';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Social place='footer' />
      <p>Copyright&copy; 2022 Andras Kelemen - byAndro</p>
    </footer>
  );
};

export default Footer;
