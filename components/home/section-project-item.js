import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import styles from '../../styles/components/home/section-project-item.module.scss';
import Button from '../ui/button';

const SectionProjectItem = props => {
  const { title, subTitle, paragraph1, paragraph2, image, image2, liveSite, gitHub, reverse } =
    props.project;

  const { ref: projectTextRef, inView: projectTextInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { ref: image1Ref, inView: image1InView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { ref: image2Ref, inView: image2InView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  let projectStyle = `${styles.small}`;

  if (!props.small) {
    projectStyle = reverse ? `${styles.project} ${styles.reverse} ` : `${styles.project}`;
  }

  return (
    <div className={projectStyle}>
      <div className={`${styles.projectImages}`}>
        <div
          className={
            image1InView ? `${styles.image} ${reverse ? 'slideInRight' : 'slideInLeft'}` : 'hidden'
          }
          ref={image1Ref}
        >
          <a href={liveSite} target='_blank'>
            <Image src={image} width='1400px' height='1000px' objectFit='cover' />
          </a>
        </div>
        {!props.small && (
          <div
            className={
              image2InView
                ? `${styles.image} ${reverse ? 'slideInRight' : 'slideInLeft'}`
                : 'hidden'
            }
            ref={image2Ref}
          >
            <a href={liveSite} target='_blank'>
              <Image src={image2} width='1400px' height='1000px' objectFit='cover' />
            </a>
          </div>
        )}
      </div>
      <div className={`line largeNoDisplay ${props.small ? 'none' : 'accent'}`}></div>
      <div
        className={
          projectTextInView
            ? `${styles.projectTxt} ${reverse ? 'slideInLeft' : 'slideInRight'}`
            : 'hidden'
        }
        ref={projectTextRef}
      >
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
