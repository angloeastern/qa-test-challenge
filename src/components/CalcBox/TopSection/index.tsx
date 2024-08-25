import Rates from './Rates';
import PriceSlider from './PriceSlider';
import ToggleSection from './ToggleSection';
import { useCalculator } from '@context/Calculator';
import SC from './style';

const TopSection: React.FC = () => {
  const { pageView } = useCalculator();
  return (
    <SC.Container>
      <SC.InnerBox>
        <SC.PageViews>{pageView} PageViews</SC.PageViews>
        <SC.Slider>
          <PriceSlider />
        </SC.Slider>
        <Rates />
        <ToggleSection />
      </SC.InnerBox>
    </SC.Container>
  );
};

export default TopSection;
