import styles from '../../styles/components/nav/nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navBase}>
        <ul className={styles.navList}>
          <li>
            <img src='/icons/menu/icons8-home-24.png' alt='' />
          </li>
          <li>
            <img src='/icons/menu/icons8-inspect-code-30.png' alt='' />
          </li>
          <li>
            <img src='/icons/menu/icons8-person-32.png' alt='' />
          </li>
          <li>
            <img src='/icons/menu/icons8-mail-24.png' alt='' />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
