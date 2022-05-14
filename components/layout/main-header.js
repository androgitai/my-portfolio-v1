import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/components/layout/main-header.module.scss';

const MainHeader = () => {
  return (
    <header className='container'>
      <Link href='/'>
        <a href='/' className={styles.logo}>
          <Image src={'/logonew.png'} width='479px' height='156px' objectFit='contain' />
        </a>
      </Link>
      <nav className={styles.nav}></nav>
    </header>
  );
};

export default MainHeader;
