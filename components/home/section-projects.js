import { Fragment } from 'react';
import Link from 'next/link';
import styles from '../../styles/components/home/section-projects.module.scss';
import SectionProjectItem from './section-project-item';
import { projectsData } from '../../data/projects';
import Button from '../ui/button';

const SectionProjects = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <section className={styles.featured}>
          <div className='quote'>
            <p>"Make it work</p>
            <p>
              <span className='accent'>Make it right </span>
            </p>
            <p>Make it fast"</p>
            <div className='spacer center accent'></div>
          </div>
          <h2>
            Featured Projects <div className='spacer fluid accent'></div>
          </h2>

          {projectsData.map(item => {
            if (item.id > 2) return;
            return <SectionProjectItem key={item.id} project={item} style='accent' />;
          })}
          <div className={styles.control}>
            <Link href='/projects'>
              <Button btnStyle='accent'>See all Projects &#8811;</Button>
            </Link>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SectionProjects;
