import Link from 'next/link';

import styles from '../../styles/components/projects/projects-body.module.scss';
import SectionProjectItem from '../home/section-project-item';
import { projectsData } from '../../data/projects';
import Button from '../ui/button';

const ProjectsBody = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.projectsBody}>
        {projectsData.map(item => (
          <SectionProjectItem key={item.id} project={item} style='primary' small={true} />
        ))}
      </section>
      <div className={styles.control}>
        <h3>Contact me and let's start your project today!</h3>
        <Link href='/contact'>
          <a>
            <Button btnStyle='primary'>Let's go &#8811;</Button>
          </a>
        </Link>
      </div>
      <div className='line fit primary'></div>
    </div>
  );
};

export default ProjectsBody;
