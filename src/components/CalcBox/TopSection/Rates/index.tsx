import { useCalculator } from '@context/Calculator';
import SC from './style';

const Rates: React.FC = () => {
  const { dollarPrice, conversionRate } = useCalculator();

  return (
    <SC.Container>
      <SC.DollarRate>
        {dollarPrice && (
          <SC.DollarAmount>{`$${dollarPrice.toFixed(2)}`}</SC.DollarAmount>
        )}
        <SC.PerMonth>/ month</SC.PerMonth>
      </SC.DollarRate>
      {conversionRate && (
        <SC.CroRate>
          {`or `}
          <SC.CroAmount>{dollarPrice / conversionRate} BTC</SC.CroAmount>
          {` / month`}
        </SC.CroRate>
      )}
    </SC.Container>
  );
};

export default Rates;
