import { Link } from 'react-router-dom';
import styles from './button.module.scss';

type ButtonProps = {
  to: string;
  children: string;
  secondary?: boolean;
};

const ButtonLink = ({ children, to, secondary }: ButtonProps) => (
  <Link to={to} className={!secondary ? styles.button : styles.buttonSecondary}>
    {children}
  </Link>
);

ButtonLink.defaultProps = {
  secondary: false,
};

export default ButtonLink;
