import SC from './style';

const Discount: React.FC = () => {
  const { VITE_YEARLY_DISCOUNT } = import.meta.env;
  return (
    <SC.Container>
      <SC.MobileText>- </SC.MobileText>
      {`${VITE_YEARLY_DISCOUNT}%`}
      <SC.DesktopText> discount</SC.DesktopText>
    </SC.Container>
  );
};

export default Discount;
