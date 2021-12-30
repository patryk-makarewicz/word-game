import styles from './button.module.scss';

type ButtonProps = {
  onClick: () => void;
  children: string;
  secondary?: boolean;
};

const Button = ({ children, onClick, secondary }: ButtonProps) => (
  <button
    className={!secondary ? styles.button : styles.buttonSecondary}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  secondary: false,
};

export default Button;
