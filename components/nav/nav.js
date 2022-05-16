import { Fragment, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/nav/nav.module.scss';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let navStyle = isNavOpen ? `${styles.nav} ${styles.openNav}` : `${styles.nav} ${styles.closeNav}`;

  const navToggleHandler = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <Fragment>
      <nav className={navStyle}>
        <div className={styles.navBase}>
          <ul className={styles.navList}>
            <li>
              <Link href='/'>
                <img src='/icons/menu/icons8-home-24.png' alt='home' />
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <img src='/icons/menu/icons8-inspect-code-30.png' alt='code' />
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <img src='/icons/menu/icons8-person-32.png' alt='aboutme' />
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <img src='/icons/menu/icons8-mail-24.png' alt='contact' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className={styles.navMenu} onClick={navToggleHandler}>
        <img src='/icons/menu/icons8-circled-menu-32.png' alt='menu' />
      </div>
    </Fragment>
  );
};

export default Nav;
