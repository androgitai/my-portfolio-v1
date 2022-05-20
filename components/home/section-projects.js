import { Fragment } from 'react';
import Link from 'next/link';

import SectionProjectItem from './section-project-item';
import Button from '../ui/button';

import styles from '../../styles/components/home/section-projects.module.scss';
import { projectsData } from '../../data/projects';

const SectionProjects = () => {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <section className={styles.featured}>
          <div className={`quote`}>
            <q>
              Make it work, <span className='accent'>Make it right </span>, Make it fast
            </q>
            <small>~ Kent Beck</small>
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
              <a>
                <Button btnStyle='accent'>See all Projects &#8811;</Button>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default SectionProjects;
