import styles from '../../styles/components/ui/notification.module.scss';

const Notification = props => {
  const { status, title, message } = props.notification;
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = styles.error;
  }
  if (status === 'success') {
    specialClasses = styles.success;
  }

  const cssClasses = `${styles.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h3>{title}</h3>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
