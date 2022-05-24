import { Fragment, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/nav/nav.module.scss';
import Social from './social';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  let navStyle = isNavOpen ? `${styles.nav} ${styles.openNav}` : `${styles.nav} ${styles.closeNav}`;

  const navToggleHandler = () => {
    setIsNavOpen(prevState => !prevState);
  };

  return (
    <Fragment>
      <Social place='nav' />
      <div className={styles.navMenu} onClick={navToggleHandler}>
        <img src='/icons/menu/circled-menu.png' alt='menu' />
      </div>
      <nav className={navStyle}>
        <div className={styles.navBase}>
          <ul className={styles.navList}>
            <li>
              <Link href='/'>
                <img src='/icons/menu/home.png' alt='home' />
              </Link>
            </li>
            <li>
              <Link href='/projects'>
                <img src='/icons/menu/inspect-code.png' alt='code' />
              </Link>
            </li>
            <li>
              <Link href='/about'>
                <img src='/icons/menu/person.png' alt='aboutme' />
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <img src='/icons/menu/mail.png' alt='contact' />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
};

export default Nav;
