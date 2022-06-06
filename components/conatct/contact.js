import { Fragment } from 'react';
import ContactBody from './contact-body';
import ContactHeading from './contact-heading';
import styles from '../../styles/components/conatct/contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <ContactHeading />
      <ContactBody />
    </div>
  );
};

export default Contact;
