import './button.scss';

type ButtonProps = {
  onPress: () => void;
  children: string;
};

const Button = ({ children, onPress }: ButtonProps) => (
  <button className="button" type="button" onClick={onPress}>
    {children}
  </button>
);

export default Button;
