import styles from '../../styles/components/layout/footer.module.scss';
import Social from '../nav/social';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Social place='footer' />
      <p>Copyright&copy; 2022 Andras Kelemen - byAndro</p>
      <p className={styles.powered}>
        This page is powered by Next.js(
        <img src='/icons/tech/nextjs.svg' alt='next.js' />)
      </p>
    </footer>
  );
};

export default Footer;
