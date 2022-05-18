import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import styles from '../../styles/components/home/section-project-item.module.scss';
import Button from '../ui/button';

const SectionProjectItem = props => {
  const projectStyle = props.project.reverse
    ? `${styles.project} ${styles.reverse}`
    : `${styles.project}`;
  const { title, subTitle, paragraph1, paragraph2, image, reverse } = props.project;

  return (
    <div className={projectStyle}>
      <div className={styles.projectTxt}>
        <h3>
          {title}
          <div className='line accent'></div>
        </h3>

        <h4>{subTitle}</h4>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div className={styles.control}>
          <Button btnStyle='accent'>
            <Link href='/projects'>
              <Fragment>
                <img src='/icons/social/github2.png' alt='github' />
                <a href='/projects'>Code</a>
              </Fragment>
            </Link>
          </Button>
          <Button btnStyle='accent'>
            <Link href='/projects'>
              <Fragment>
                <img src='/icons/sections/website.png' alt='github' />
                <a href='/projects'>Live page</a>
              </Fragment>
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles.projectImg}>
        <Image src={image} width='1400px' height='1000px' objectFit='cover' />
      </div>
    </div>
  );
};

export default SectionProjectItem;
