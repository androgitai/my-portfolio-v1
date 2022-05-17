import Image from 'next/image';
import Link from 'next/link';
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
        <h3>{title}</h3>
        <div className='line accent'></div>
        <h4>{subTitle}</h4>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <Button btnStyle='accent'>
          <Link href='/projects'>
            <a href='/projects'> Find out more..</a>
          </Link>
        </Button>
      </div>
      <div className={styles.projectImg}>
        <Image src={image} width='1400px' height='1000px' objectFit='cover' />
      </div>
    </div>
  );
};

export default SectionProjectItem;
