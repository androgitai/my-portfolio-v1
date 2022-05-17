import styles from '../../styles/components/ui/button.module.scss';

const Button = props => {
  const btnClasses = props.btnStyle
    ? `${styles.button} ${styles[props.btnStyle]}`
    : `${styles.button}`;

  return (
    <button onClick={props.onClick} className={btnClasses}>
      {props.children}
    </button>
  );
};

export default Button;
