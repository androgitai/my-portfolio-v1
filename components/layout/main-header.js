import Link from 'next/link';

import Logo from '../ui/logo';
import styles from '../../styles/components/layout/main-header.module.scss';
import Nav from '../nav/nav';

const MainHeader = () => {
  return (
    <header className='container'>
      <Logo />
      <Nav />
    </header>
  );
};

export default MainHeader;
