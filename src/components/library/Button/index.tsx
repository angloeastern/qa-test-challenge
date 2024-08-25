import SC from './style';

const Button: React.FC<{ children: string; onClick?: () => void }> = ({
  children,
  onClick,
}) => {
  return <SC.Container onClick={onClick}>{children}</SC.Container>;
};

export default Button;
