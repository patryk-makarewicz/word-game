import { Link } from 'react-router-dom';
import './button.scss';

type ButtonProps = {
  to: string;
  children: string;
};

const ButtonLink = ({ children, to }: ButtonProps) => (
  <Link className="button" to={to}>
    {children}
  </Link>
);

export default ButtonLink;
