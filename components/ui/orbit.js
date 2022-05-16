import Image from 'next/image';

import styles from '../../styles/components/ui/orbit.module.scss';

const Orbit = () => {
  return (
    <div className={styles.orbit}>
      <div className={styles.globe}>
        <Image
          src={'/technologyRound.png'}
          width='1024'
          height='1024'
          objectFit='cover'
          layout='responsive'
          priority
        />
      </div>
      <ul>
        <li>
          <img src='/icons/css3.svg' alt='' />
        </li>
        <li>
          <img src='/icons/html5.svg' alt='' />
        </li>
        <li>
          <img src='/icons/javascript.svg' alt='' />
        </li>
        <li>
          <img src='/icons/nextjs.svg' alt='' />
        </li>
        <li>
          <img src='/icons/react-icon.svg' alt='' />
        </li>
        <li>
          <img src='/icons/sass.svg' alt='' />
        </li>
        <li>
          <img src='/icons/jest.svg' alt='' />
        </li>
        <li>
          <img src='/icons/nodejs.svg' alt='' />
        </li>
      </ul>
    </div>
  );
};

export default Orbit;
