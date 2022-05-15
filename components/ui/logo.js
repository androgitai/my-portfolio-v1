import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/components/ui/logo.module.scss';

const Logo = () => {
  return (
    <Link href='/'>
      <a href='/' className={styles.logo}>
        <Image src={'/logonew.png'} width='479px' height='156px' objectFit='contain' />
      </a>
    </Link>
  );
};

export default Logo;
