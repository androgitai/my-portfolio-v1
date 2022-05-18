import { Fragment } from 'react';
import styles from '../../styles/components/home/section-projects.module.scss';
import SectionProjectItem from './section-project-item';

const projectsData = [
  {
    id: 1,
    title: 'InvoiceMe',
    subTitle: 'Web application for invoicing.',
    paragraph1:
      'Self developed production app where you can manage your invoices with ease in a safe manner.',
    paragraph2:
      'Uses React, Redux, CSS modules and FireBase for backend database and authentication.',
    image: '/projects/invoiceMe/MainPic.jpg',
    reverse: false,
  },
  {
    id: 2,
    title: 'REST Countries',
    subTitle: 'Find detials about any country around the world.',
    paragraph1:
      'Self developed production app where you can search countries with flags, open and see detials about them.',
    paragraph2:
      'Uses Html5, Sass and JavaScript. Built to MVC architecture and uses REST countries API.',
    image: '/projects/rest-countries/rest-countries.jpg',
    reverse: true,
  },
];

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

          {projectsData.map(item => (
            <SectionProjectItem key={item.id} project={item} />
          ))}
        </section>
      </div>
    </Fragment>
  );
};

export default SectionProjects;
