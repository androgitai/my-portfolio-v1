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
          <img src='/icons/tech/css3.svg' alt='css3' />
        </li>
        <li>
          <img src='/icons/tech/html5.svg' alt='html5' />
        </li>
        <li>
          <img src='/icons/tech/javascript.svg' alt='js' />
        </li>
        <li>
          <img src='/icons/tech/nextjs.svg' alt='next.js' />
        </li>
        <li>
          <img src='/icons/tech/react-icon.svg' alt='react.js' />
        </li>
        <li>
          <img src='/icons/tech/sass.svg' alt='sass' />
        </li>
        <li>
          <img src='/icons/tech/jest.svg' alt='jest' />
        </li>
        <li>
          <img src='/icons/tech/nodejs.svg' alt='node.js' />
        </li>
      </ul>
    </div>
  );
};

export default Orbit;
