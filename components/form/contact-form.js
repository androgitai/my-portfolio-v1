import { useState, Fragment, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { validateInput } from '../../utility/validation';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from '../../styles/components/form/contact-form.module.scss';
import Button from '../ui/button';
import Notification from '../ui/Notification';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);
  const [showIsValid, setShowIsValid] = useState(false);
  const [isCaptchaTicked, setIsCaptchaTicked] = useState(false);
  const [captcha, setCaptcha] = useState(null);
  const [notification, setNotification] = useState(null);
  const captchaRef = useRef();

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const onCaptchaChange = value => {
    setIsCaptchaTicked(prevState => !prevState);
    setCaptcha(value);
  };
  const inputChangeHandler = event => {
    const validation = validateInput(event.target.value, event.target.name);

    if (event.target.name === 'name') {
      setName(event.target.value);
      setNameIsValid(validation.isValid);
    }
    if (event.target.name === 'email') {
      setEmail(event.target.value);
      setEmailIsValid(validation.isValid);
    }
    if (event.target.name === 'message') {
      setMessage(event.target.value);
      setMessageIsValid(validation.isValid);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    setShowIsValid(true);
    if (!nameIsValid || !emailIsValid || !message || !isCaptchaTicked) {
      setTimeout(() => setShowIsValid(false), 3000);
      return;
    }

    fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        message,
        captcha,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        if (!data.isError) {
          setNotification(
            <Notification
              notification={{
                status: 'success',
                title: 'Success!',
                message: 'Your message has been sent. Thank you!',
              }}
            />
          );
          setTimeout(() => setNotification(null), 5000);
          return;
        }
        throw new Error(data.message);
      })
      .catch(error => {
        setNotification(
          <Notification
            notification={{
              status: 'error',
              title: 'Error!',
              message: 'Something went wrong. Please try again later!',
            }}
          />
        );
        setTimeout(() => setNotification(null), 5000);
      });
    setShowIsValid(false);
    setName('');
    setEmail('');
    setMessage('');
    captchaRef.current.reset();
    setIsCaptchaTicked(false);
  };

  return (
    <Fragment>
      <form
        className={formInView ? `${styles.contactForm} floatFromBot` : 'hidden'}
        onSubmit={formSubmitHandler}
        ref={formRef}
        noValidate
      >
        {notification}
        <fieldset>
          <label htmlFor='name'>
            <h4>Name</h4>
            <div className='line fit secondary'></div>
          </label>
          <input
            id='name'
            name='name'
            type='text'
            onChange={inputChangeHandler}
            value={name}
            className={showIsValid ? (nameIsValid ? '' : styles.error) : ''}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='email'>
            <h4>Email</h4>
            <div className='line fit secondary'></div>
          </label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={inputChangeHandler}
            value={email}
            className={showIsValid ? (emailIsValid ? '' : styles.error) : ''}
          />
        </fieldset>
        <fieldset>
          <label htmlFor='message'>
            <h4>
              Message<div className='line fit secondary'></div>
            </h4>
          </label>
          <textarea
            id='message'
            name='message'
            onChange={inputChangeHandler}
            value={message}
            className={showIsValid ? (messageIsValid ? '' : styles.error) : ''}
          />
        </fieldset>
        <fieldset>
          <div className={!isCaptchaTicked ? (showIsValid ? styles.error : '') : ''}>
            <ReCAPTCHA
              size='normal'
              onChange={onCaptchaChange}
              sitekey={process.env.NEXT_PUBLIC_CAPTCHA_SITE}
              ref={captchaRef}
            />
          </div>
        </fieldset>
        <fieldset>
          <Button btnStyle='secondary'>Send message</Button>
        </fieldset>
      </form>
    </Fragment>
  );
};

export default ContactForm;
