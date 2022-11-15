import styles from './button.module.scss';

type ButtonProps = {
  onClick: () => void;
  children: string;
  disabled?: boolean;
};

const Button = ({ children, onClick, disabled }: ButtonProps) => (
  <button
    className={!disabled ? styles.button : styles.buttonDisabled}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

Button.defaultProps = {
  disabled: false,
};

export default Button;
