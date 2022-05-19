import { Fragment } from 'react';
import ProjectsBody from '../../components/projects/projects-body';
import ProjectsHeading from '../../components/projects/projects-heading';

const ProjectsPage = () => {
  return (
    <Fragment>
      <ProjectsHeading />
      <ProjectsBody />
    </Fragment>
  );
};

export default ProjectsPage;
