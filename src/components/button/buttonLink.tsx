import { Link } from 'react-router-dom';
import styles from './button.module.scss';

type ButtonProps = {
  to: string;
  children: string;
};

const ButtonLink = ({ children, to }: ButtonProps) => (
  <Link className={styles.button} to={to}>
    {children}
  </Link>
);

export default ButtonLink;
