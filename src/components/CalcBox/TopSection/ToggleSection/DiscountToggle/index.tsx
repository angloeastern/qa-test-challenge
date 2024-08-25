import { useCalculator } from '@context/Calculator';
import Toggle from '@library/Toggle';

const DiscountToggle: React.FC = () => {
  const { haveDiscount, setHaveDiscount } = useCalculator();

  const handleChange = (b: boolean) => {
    setHaveDiscount(b);
  };

  return <Toggle size={22} value={haveDiscount} onChange={handleChange} />;
};

export default DiscountToggle;
