import styles from './button.module.scss';

type ButtonProps = {
  onPress: () => void;
  children: string;
};

const Button = ({ children, onPress }: ButtonProps) => (
  <button className={styles.button} type="button" onClick={onPress}>
    {children}
  </button>
);

export default Button;
