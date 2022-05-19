import Image from 'next/image';
import styles from '../../styles/components/home/section-project-item.module.scss';
import Button from '../ui/button';

const SectionProjectItem = props => {
  const projectStyle = props.small
    ? props.project.reverse
      ? `${styles.small} ${styles.reverseSmall}`
      : `${styles.small}`
    : props.project.reverse
    ? `${styles.project} ${styles.reverse}`
    : `${styles.project}`;

  const { title, subTitle, paragraph1, paragraph2, image, liveSite, gitHub } = props.project;

  return (
    <div className={projectStyle}>
      <div className={styles.projectImg}>
        <a href={liveSite} target='_blank'>
          <Image src={image} width='1400px' height='1000px' objectFit='cover' />
        </a>
      </div>
      <div className={styles.projectTxt}>
        <h3>
          {title}
          <div className={`line ${props.style}`}></div>
        </h3>

        <h4>{subTitle}</h4>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
        <div className={styles.control}>
          <Button btnStyle={props.style}>
            <img src='/icons/social/github2.png' alt='github' />
            <a href={gitHub} target='_blank'>
              Code
            </a>
          </Button>
          <Button btnStyle={props.style}>
            <img src='/icons/sections/website.png' alt='github' />
            <a href={liveSite} target='_blank'>
              Live page
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SectionProjectItem;
