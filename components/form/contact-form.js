import React from 'react';
import styles from '../../styles/components/form/contact-form.module.scss';
import Button from '../ui/button';

const ContactForm = () => {
  const formSubmitHandler = event => {
    event.preventDefault();
  };

  return (
    <form className={styles.contactForm} onSubmit={formSubmitHandler}>
      <fieldset>
        <label htmlFor='name'>
          <h4>Name</h4>
          <div className='line fit secondary'></div>
        </label>
        <input id='name' name='name' type='text' />
      </fieldset>
      <fieldset>
        <label htmlFor='email'>
          <h4>Email</h4>
          <div className='line fit secondary'></div>
        </label>
        <input type='email' id='email' name='email' />
      </fieldset>
      <fieldset>
        <label htmlFor='message'>
          <h4>
            Message<div className='line fit secondary'></div>
          </h4>
        </label>
        <textarea id='message' name='message' />
      </fieldset>
      <fieldset>
        <Button btnStyle='secondary'>Send message</Button>
      </fieldset>
    </form>
  );
};

export default ContactForm;