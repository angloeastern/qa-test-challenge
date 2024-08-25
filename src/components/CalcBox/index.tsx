import TopSection from './TopSection';
import BottomSection from './BottomSection';
import { CalculatorProvider } from '@context/Calculator';
import SC from './style';

const CalcBox: React.FC = () => {
  return (
    <CalculatorProvider>
      <SC.Container>
        <TopSection />
        <BottomSection />
      </SC.Container>
    </CalculatorProvider>
  );
};

export default CalcBox;
