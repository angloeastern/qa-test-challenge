import SC from './style';

const CheckItem: React.FC<{ children: string }> = ({ children }) => {
  return (
    <SC.Container>
      <SC.Check />
      <SC.Label>{children}</SC.Label>
    </SC.Container>
  );
};

export default CheckItem;
