import { Fragment } from 'react';
import ContactBody from './contact-body';
import ContactHeading from './contact-heading';

const Contact = () => {
  return (
    <Fragment>
      <ContactHeading />
      <ContactBody />
    </Fragment>
  );
};

export default Contact;
