import DiscountToggle from './DiscountToggle';
import Discount from './Discount';
import SC from './style';

const ToggleSection: React.FC = () => {
  return (
    <SC.Container>
      <SC.LeftText>Monthly Billing</SC.LeftText>
      <DiscountToggle />
      <SC.RightText>Yearly Billing</SC.RightText>
      <Discount />
    </SC.Container>
  );
};

export default ToggleSection;
